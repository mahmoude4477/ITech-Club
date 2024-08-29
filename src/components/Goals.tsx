import Animations from "./Animation";

const Goals = () => {
  const Goals = [
    "مساعدة الطلبة في التطور المستمر وتهيئتهم للمستقبل لسوق العمل من خلال تسجيلهم في دورات مختلفة وكذلك ورشات عمل.",
    "التطوير المستمر في شتى المجالات التقنية، القيادية، التطوعية والمهنية لتكوين الذات وبناء المستقبل.",
    "التحفيز المستمر للطلاب لتطوير مهاراتهم واكتشاف ذاتهم بالمشاركة في البرامج والمسابقات.",
    "إنشاء بيئة تعليمية تمكن الطلاب من مشاركة خبراتهم وبناء علاقات مهنية وأكاديمية.",
    "تعزيز التعاون، والمشاركة والعمل التطوعي بين أعضاء هيئة التدريس والطلبة.",
    "إقامة أنشطة تساهم في تطوير المهارات الاجتماعية والأكاديمية.",
    "المساهمة في مساعدة المستجدين من خلال مساعدتهم على تحديد أهدافهم وأولوياتهم.",
    "زيادة الوعي عن أهمية دخول الأندية الجامعية وتوضيح مجالات النادي والمسابقات والبرامج التي تساهم في اكتساب المهارات وتطوير الذات.",
  ];

  return (
    <Animations>
      <div id="Goals" className="h-screen flex  flex-col justify-center   ">
        <h1 className="inline text-center">
          <span
            className={
              "text-center mb-5 pt-9  text-5xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text from-[#6879B8] text-transparent  to-[#B94C96]"
            }
          >
            الأهداف
          </span>
        </h1>
        <div dir="rtl" className="flex mb-1 space-y-2 flex-col">
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
