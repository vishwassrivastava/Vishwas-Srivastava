import * as React from "react";
import { motion } from "framer-motion";

export const Example = () => (
  <motion.div
    className="container "
    initial={{ scale: 100 }}
    animate={{ rotate: 90, scale: 25 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 200
    }}
  />
);
