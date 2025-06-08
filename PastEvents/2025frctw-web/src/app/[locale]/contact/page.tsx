import { useTranslations } from "next-intl";
import contact from "../../../../config/contact.json";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return {
    title: "聯絡團隊",
    description: "這裡是聯絡團隊的頁面，提供相關的聯絡團隊。",
    openGraph: {
      url: `/${params.locale}/contact`,
      images: "/og?title=聯絡團隊",
      type: "website",
    },
  };
}

export default function Page() {
  const t = useTranslations("base");

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          {t("contact")}
        </h1>
        <div className="space-y-2">
          {Object.entries(contact).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <span className="mr-2 font-semibold text-gray-600">{key}:</span>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
