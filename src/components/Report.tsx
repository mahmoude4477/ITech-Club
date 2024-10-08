import Link from "next/link";
import Animations from "./Animation";

const Reports = () => {
  const ReportsList = [
    {
      href: "https://drive.google.com/file/d/1ZDAb0RKBDqZOnzoM6x-XnQv-Vn38jS_Y/view?usp=sharing",
      label: "رابط ملف النادي وتقريره للعام ١٤٤٥",
    },
  ];

  return (
    <Animations>
      <div
        id="Reports"
        className="h-screen flex flex-col gap-4 justify-center "
      >
        <h1 className="inline text-center">
          <span
            className={
              "text-center mb-5 pt-9  text-5xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text from-[#6879B8] text-transparent  to-[#B94C96]"
            }
          >
            التقارير
          </span>
        </h1>
        <div dir="rtl" className="flex mb-1 space-y-3 flex-col">
          {ReportsList.map((Report, index) => (
            <Link
              href={Report.href}
              className="border w-full p-5 font-medium text-blue-600 dark:text-blue-500 hover:underline "
              key={index}
            >
              {Report.label}
            </Link>
          ))}
        </div>
      </div>
    </Animations>
  );
};

export default Reports;
