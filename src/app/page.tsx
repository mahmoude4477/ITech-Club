"use client";
import Animations from "@/components/Animation";
import { Footer } from "@/components/Footer";
import Goals from "@/components/Goals";
import Intro from "@/components/Intro";
import JoinToUs from "@/components/JoinToUs";
import { Navbar } from "@/components/navbar";
import Reports from "@/components/Report";
import StartIcon from "@/components/StartIcon";
import { useEffect, useState } from "react";

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
      desc: "ان نكون من افضل الاندية الجامعية الرائدة والمتميزة في استقطاب الموهوبين وصقل هوايتهم ومهاراتهم",
      classNameForTitle:
        "inline bg-clip-text bg-gradient-to-r from-[#6879B8] text-transparent  to-[#B94C96]",
      classNameForDesc: "text-lg text-center",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsStart(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full ">
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
            {introList.map((intro, index) => (
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
            <Goals />
            <Reports />
            <JoinToUs />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
