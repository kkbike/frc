import { useTranslations } from "next-intl";
import calendar from "../../../../config/calendar.json";

interface Event {
  name: string;
  date: string;
  link: string;
}

interface MetadataParams {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata(props: MetadataParams) {
  const params = await props.params;
  return {
    title: "活動日曆",
    description: "這裡是活動日曆的頁面，提供相關的活動日曆。",
    openGraph: {
      url: `/${params.locale}/calendar`,
      images: "/og?title=活動日曆",
      type: "website",
    },
  };
}

function generateCalendarGrid(events: Event[], monthsToShow: number) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const grids = [];

  for (let m = 0; m < monthsToShow; m++) {
    const currentMonth = (month + m) % 12;
    const currentYear = year + Math.floor((month + m) / 12);

    const firstDayOfMonth =
      (new Date(currentYear, currentMonth, 1).getDay() + 7) % 7;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = Array.from({ length: 42 }, (_, i) => {
      const dayNumber = i - firstDayOfMonth + 1;
      return dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null;
    });

    const grid = days.map((day, index) => {
      const dayEvents = events.filter((e) => {
        const eventDate = new Date(e.date);
        return (
          eventDate.getFullYear() === currentYear &&
          eventDate.getMonth() === currentMonth &&
          eventDate.getDate() === day
        );
      });

      return (
        <div
          key={index}
          className={`flex h-20 flex-col justify-between border p-1 md:p-4 ${dayEvents.length > 0 ? "bg-yellow-200" : "bg-gray-100"}`}
        >
          <div className="text-sm font-bold">{day || ""}</div>
          {dayEvents.length > 0 && (
            <div className="text-xs">
              {dayEvents.map((event, i) => (
                <a
                  key={i}
                  href={event.link}
                  className="block text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.name}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    });

    grids.push(
      <div key={m} className="mb-8">
        <h2 className="mb-2 text-lg text-white">
          {currentYear} 年 {currentMonth + 1} 月
        </h2>
        <div className="grid grid-cols-7 gap-1">{grid}</div>
      </div>,
    );
  }

  return grids;
}

export default function Page() {
  const t = useTranslations("base");
  const events = calendar as Event[];
  const monthsToShow = 3; // 顯示的月份數量

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <h1 className="mb-4 text-2xl text-white">{t("calendar")}</h1>
        {generateCalendarGrid(events, monthsToShow)}
      </div>
    </div>
  );
}
