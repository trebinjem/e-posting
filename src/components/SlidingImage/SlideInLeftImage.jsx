import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SlideInLeftImage = ({ imgSrc, alt }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 1, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, delay: 0.25 }}
        className="w-100"
      >
        <motion.img
          src={imgSrc}
          alt={alt}
          className="w-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default SlideInLeftImage;
