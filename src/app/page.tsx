"use client";
import Animations from "@/components/Animation";
import { Footer } from "@/components/Footer";
import Goals from "@/components/Goals";
import Intro from "@/components/Intro";
import JoinToUs from "@/components/JoinToUs";
import { Navbar } from "@/components/navbar";
import Reports from "@/components/Report";
import StartIcon from "@/components/StartIcon";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isStart, setIsStart] = useState<boolean>(true);
  const introList = [
    {
      id: "Name",
      title: "ITech Club",
      desc: "نادي كلية علوم وهندسة الحاسب الآلي",
      classNameForTitle:
        "inline bg-gradient-to-r from-[#6879B8]  to-[#B94C96] text-transparent bg-clip-text",
      classNameForDesc: "text-lg text-center",
    },
    {
      id: "About",
      title: "من نحن",
      desc: "نادي تخصصي طلابي تطوعي يتبع لعمادة شؤون الطلاب في جامعة طيبة، يهدف الى بناء مجتمع حاسوبي تقني يهتم بإنتاج المعرفة وإنشاء جيل تقني واعد من خلال برامج متنوعة وفعالة",
      classNameForTitle:
        "inline text-center bg-gradient-to-r from-[#6879B8]  to-[#B94C96] text-transparent bg-clip-text",
      classNameForDesc: "text-lg text-center",
    },
    {
      id: "Vision",
      title: "الرؤية",
      desc: "للتميز والريادة في تقديم أنشطة إثرائية تعود بالنفع على الطلبة والمجتمع، وتطوير مهارات الطلاب وتبادل الخبرات بينهم لمساعدتهم على التطور والمشاركة في المسابقات المحلية والدولية وتعزيز روح القيادة والتعاون لديهم، وأن نكون من أفضل الأندية الطلابية التي تعمل على تحقيق رسالة الجامعة.",
      classNameForTitle:
        "inline bg-clip-text bg-gradient-to-r from-[#6879B8] text-transparent  to-[#B94C96]",
      classNameForDesc: "text-lg text-center",
    },
    {
      id: "StudentObjectives",
      title: "الفائدة التي تعود على الطالب عند المشاركة في النادي",
      desc: "الأندية الطلابية نستطيع وصفها بأنها تجمع لجميع الطلاب لمشاركة الاهتمامات واكتساب الخبرات وتعزيز العلاقات المهنية والأكاديمية عن طريق المشاركة في فعاليات النادي / دورات، معسكرات، مسابقات وغيرها الكثير وكل هذا سوف يعود بالنفع على الطلبة لتجهيزهم الى سوق العمل وكما انه يتم إضافة المشاركات في السيرة الذاتية مستقبلاً للتقديم على الوظائف.",
      classNameForTitle:
        "inline text-center bg-gradient-to-r from-[#6879B8]  to-[#B94C96] text-transparent bg-clip-text",
      classNameForDesc: "text-lg text-center",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsStart(false);
    }, 1000);
  }, []);

  return (
    <div dir="rtl" className="w-full h-full ">
      {isStart ? (
        <StartIcon />
      ) : (
        <>
          <Navbar />

          <div
            className="container"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {introList.slice(0, 3).map((intro, index) => (
              <React.Fragment key={index}>
                <Animations>
                  <Intro
                    id={intro.id}
                    className={index % 2 == 0 ? "bg-gradient-to-r " : ""}
                    classNameForTitle={intro.classNameForTitle}
                    classNameForDesc={intro.classNameForDesc}
                    key={index}
                    title={intro.title}
                    desc={intro.desc}
                  ></Intro>
                </Animations>
                <Separator />
              </React.Fragment>
            ))}
            <Goals />
            <Separator />
            {introList.slice(3).map((intro, index) => (
              <Animations key={index}>
                <Intro
                  id={intro.id}
                  className={index % 2 == 0 ? "bg-gradient-to-r " : ""}
                  classNameForTitle={intro.classNameForTitle}
                  classNameForDesc={intro.classNameForDesc}
                  key={index}
                  title={intro.title}
                  desc={intro.desc}
                ></Intro>
              </Animations>
            ))}
            <Separator />
            <Reports />
            <Separator />
            <JoinToUs />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
