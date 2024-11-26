import React from "react";
import { motion } from "framer-motion";
import "./AnimatedBackground.css"; 

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {}
      <motion.div
        className="gradient-layer"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </div>
  );
};

export default AnimatedBackground;
