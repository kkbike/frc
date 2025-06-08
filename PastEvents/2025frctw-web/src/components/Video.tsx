import { YouTubeEmbed } from "@next/third-parties/google";

export default function Video() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-[url('/background/bg2.jpg')] bg-center p-4 md:flex-row md:p-8">
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">活動主題影片</h2>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <YouTubeEmbed videoid="zM1wAo4eQzQ" />
        </div>
        <div className="px-6 py-4">
          <span className="text-sm text-gray-600">
            快來看看這次官方釋出的活動宣傳影片！
          </span>
        </div>
      </div>
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">活動宣傳影片</h2>
        </div>
        <video className="w-full rounded-lg border border-gray-200" controls>
          <source src="/宣傳影片.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放功能。
        </video>
        <div className="px-6 py-4">
          <span className="text-sm text-gray-600">
            快來看看這次官方釋出的活動宣傳影片！
          </span>
        </div>
      </div>
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            比賽90秒精華影片
          </h2>
        </div>
        <video className="w-full rounded-lg border border-gray-200" controls>
          <source src="/精華影片.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放功能。
        </video>
        <div className="px-6 py-4">
          <span className="text-sm text-gray-600">
            快速回顧比賽當天的精彩瞬間！
          </span>
        </div>
      </div>
    </div>
  );
}
