import clsx from "clsx";
import bg from "../../../public/Lan1.jpg";

const Intro = ({
  title,
  desc,
  classNameForTitle,
  classNameForDesc,
  className,
  id,
}: {
  title: string;
  desc: string;
  classNameForTitle: string;
  classNameForDesc: string;
  className: string;
  id: string;
}) => {
  const style = {
    // backgroundImage: `url(${bg.src})`,
    // backgroundSize: "cover",
  };
  return (
    <div
      style={style}
      id={id}
      className={clsx(
        "h-screen flex justify-center items-center flex-col",
        className
      )}
    >
      <main className="text-5xl mb-5 md:text-6xl font-bold">
        <h1 className="inline">
          <span className={classNameForTitle}>{title}</span>{" "}
        </h1>{" "}
      </main>
      <p className={classNameForDesc}>{desc}</p>
    </div>
  );
};

export default Intro;
