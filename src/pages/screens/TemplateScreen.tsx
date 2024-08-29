import React from "react";
import MenuBarComponent from "../shared/MenuBarComponent";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface TemplateScreenProps {
  children: React.ReactNode;
}

const TemplateScreen: React.FC<TemplateScreenProps> = ({ children }) => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="grid grid-cols-12">
        <div className="col-span-1 h-screen"></div>
          <motion.div
            initial={{ y: isHome ? "50vh" : "-13vh", x: "-50%" }}
            animate={{ y: isHome ? "50vh" : "-13vh", x: "-50%" }}
            transition={{ type: "tween", stiffness: 300, ease: "easeInOut" }}
            style={{
              position: "fixed",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: isHome ? "auto" : 0,
            }}
          >
            <MenuBarComponent />
          </motion.div>
          <div className="col-span-10">
            {children}
          </div>
        <div className="col-span-1 h-screen"></div>
    </div>
  );
};

export default TemplateScreen;
