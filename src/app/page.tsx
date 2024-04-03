import Animations from "@/components/Animation";
import { Footer } from "@/components/Footer";
import Goals from "@/components/Goals";
import Intro from "@/components/Intro";
import JoinToUs from "@/components/JoinToUs";
import { Navbar } from "@/components/navbar";
import Reports from "@/components/Report";
import StartIcon from "@/components/StartIcon";

export default function Home() {
  const introList = [
    {
      id: "Name",
      title: "ITech Club",
      desc: "طموحاتنا تتجاوز المستحيل واعمالنا خير دليل",
      classNameForTitle:
        "inline bg-gradient-to-r from-[#6879B8]  to-[#B94C96] text-transparent bg-clip-text",
      classNameForDesc: "text-lg",
    },
    {
      id: "About",
      title: "من نحن",
      desc: "نادي تابع لجامعة طيبة ، مُهتم بالتقنية",
      classNameForTitle: "inline bg-clip-text",
      classNameForDesc: "text-lg",
    },
    {
      id: "Vision",
      title: "الرؤية",
      desc: "رؤية النادي",
      classNameForTitle: "inline bg-clip-text",
      classNameForDesc: "text-lg",
    },
  ];

  return (
    <div className="w-full h-full">
      {0 ? (
        <StartIcon />
      ) : (
        <>
          <Navbar />

          <div
            className=""
            style={{ position: "relative", overflow: "hidden" }}
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
