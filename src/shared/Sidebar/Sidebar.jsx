import React, { memo, useEffect, useMemo } from "react";
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaClipboardList,
  FaCube,
  FaDeezer,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaStore,
  FaUser,
  FaUserNinja,
  FaWarehouse,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import SidebarMenu from "./SidebarMenu";
import Ripples from "react-ripples";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import "./style.css";
import Header from "../Header/Header";
import { Box } from "@mui/system";
import { VWaterPaths } from "../../confgurations/paths/vwaterPath";

const routes = [
  {
    path: VWaterPaths.dashboard,
    name: "Bảng điều khiển",
    icon: <FaDeezer />,
  },
  {
    path: VWaterPaths.report,
    name: "Báo cáo",
    icon: <FaClipboardList />,
  },
  {
    path: VWaterPaths.store,
    name: "Cửa hàng",
    icon: <FaStore />,
  },
  {
    path: VWaterPaths.warehouse,
    name: "Kho",
    icon: <FaWarehouse />,
  },
  {
    path: VWaterPaths.products,
    name: "Sản phẩm",
    icon: <FaCube />,
  },
  {
    path: VWaterPaths.drivers,
    name: "Tài xế",
    icon: <FaUserNinja />,
  },
  // {
  //   path: "/analytics",
  //   name: "Analytics",
  //   icon: <BiAnalyse />,
  // },
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const SideBar = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked(!checked);
  };
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleMouseEnter = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const hanleMouseLeave = () => {
    if (isOpen && !checked) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(VWaterPaths.dashboard);
    }
  }, [location]);

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "300px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={hanleMouseLeave}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  VWATER ADMIN
                </motion.h1>
              )}
            </AnimatePresence>

            {/* <div className="bars">
              <FaBars onClick={toggle} />
            </div> */}
            {isOpen && (
              <div className="bars">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  className="radio-group"
                >
                  <FormControlLabel
                    checked={checked}
                    control={<Radio />}
                    onClick={toggle}
                  />
                </RadioGroup>
              </div>
            )}
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>
          <Box sx={{ height: "55px" }}></Box>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default React.memo(SideBar);
