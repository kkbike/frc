"use client";

import { useEffect, useState } from "react";
import db from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";

interface Video {
  videoId: string;
  title: string;
  commentCount: number;
  likeCount: number;
  viewCount: number;
}

export default function ProjectsList() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "latest_videos", "latest");

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setVideos(Object.values(docSnap.data()));
        }
      })
      .catch((error) => {
        console.error("影片數據載入失敗: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const sortedVideos = [...videos].sort((a, b) => b.likeCount - a.likeCount);

  return (
    <div className="mx-auto min-h-screen p-6">
      <h1 className="mb-2 text-2xl text-white">影片競賽即時排名</h1>
      <p className="mb-6 text-sm text-white">
        資料每半小時更新一次，並視伺服器負載狀態有些許延遲。
      </p>
      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(16)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-2xl border bg-gray-100 p-4 shadow-sm"
            >
              <div className="h-10 rounded-sm bg-gray-300 mb-4"></div>
              <div className="mb-4 h-[180px] rounded-lg bg-gray-300"></div>
              <div className="h-5 w-3/4 rounded-sm bg-gray-300 mb-2"></div>
              <div className="h-4 w-1/2 rounded-sm bg-gray-300 mb-2"></div>
              <div className="h-4 w-1/4 rounded-sm bg-gray-300 mb-2"></div>
              <div className="h-10 rounded-sm bg-gray-300"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedVideos.map((video, index) => (
            <div
              key={video.videoId}
              className="rounded-2xl border bg-white p-5 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 truncate w-full">
                  {video.title}
                </h2>
              </div>
              <div className="relative w-full h-[180px] overflow-hidden rounded-lg">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                  alt={video.title}
                  width={640}
                  height={360}
                  className="object-cover"
                  priority={index < 6}
                />
              </div>
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p className="font-semibold text-gray-700 text-base">{`按讚數(計分):${video.likeCount}`}</p>
                <p className="font-semibold text-gray-500">{`觀看數(不計分):${video.viewCount}`}</p>
                <p className="font-semibold text-gray-500">{`留言數(不計分):${video.commentCount}`}</p>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full rounded-lg bg-blue-600 py-2 text-center text-white font-medium transition-all hover:bg-blue-700"
              >
                前往觀看
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
