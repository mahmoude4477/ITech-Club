"use client";
import {
  animate,
  motion,
  useAnimation,
  useInView,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Animations = ({ children }: { children: JSX.Element }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animations;
