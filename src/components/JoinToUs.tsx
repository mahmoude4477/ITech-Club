import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Animations from "./Animation";

const JoinToUs = () => {
  return (
    <Animations>
      <div className="h-screen flex  items-center flex-col justify-center">
        {/* <h1 className="text-center mb-5 text-5xl md:text-6xl font-bold">
        Join to us
      </h1> */}
        <Link className={buttonVariants({ size: "lg" })} href="/">
          انضم للنادي
        </Link>
      </div>
    </Animations>
  );
};

export default JoinToUs;
