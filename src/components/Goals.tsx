import Animations from "./Animation";

const Goals = () => {
  const Goals = [
    "إقامة الفعاليات والبرامج التي تساهم في تطوير المهارات القيادية والتقنية",
    " تعزيز القيم الاخلاقية والمشاركة المجتمعية وروح العمل الجماعي",
    " تكوين بيئة تعليمية وإبداعية تمكن الطلاب من بناء علاقات مهنية واكاديمية",
    "تشجيع الطلاب على المشاركة في المسابقات والبرامج المتنوعة داخل وخارج الجامعة",
  ];

  return (
    <Animations>
      <div id="Goals" className="h-screen flex  flex-col justify-center ">
        <h1 className="text-center mb-5 pt-9  text-5xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text from-[#6879B8] text-transparent  to-[#B94C96]">
          الأهداف
        </h1>

        {/* <ul dir="rtl" className="ps-5 mt-2 space-y-1 list-disc list-inside">
        {Goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul> */}
        <div dir="rtl" className="flex mb-1 space-y-3 flex-col">
          {Goals.map((goal, index) => (
            <p className="border w-full p-5" key={index}>
              {goal}
            </p>
          ))}
        </div>
      </div>
    </Animations>
  );
};

export default Goals;
