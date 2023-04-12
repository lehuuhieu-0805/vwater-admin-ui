import React from "react";
import { FaStore } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaUserNinja } from "react-icons/fa";


export const ANALYTICS_DASHBOARD_MODEL = [
    {
        bgColorCard: "#c8facd",
        colorCard: "rgb(0, 82, 73)",
        iconColor: "rgb(0, 123, 85)",
        bgImage:
            "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
        amount: 0,
        icon: <FaStore size={30} />,
        title: "Tổng cửa hàng",
    },
    {
        bgColorCard: "rgb(208, 242, 255)",
        colorCard: "rgb(4, 41, 122)",
        iconColor: "rgb(12, 83, 183)",
        bgImage:
            "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)",
        amount: 0,
        icon: <GiEarthAsiaOceania size={30} />,
        title: "Khu vực kinh doanh",
    },
    {
        bgColorCard: "rgb(255, 247, 205)",
        colorCard: "rgb(122, 79, 1)",
        iconColor: "rgb(183, 129, 3)",
        bgImage:
            "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)",
        amount: 0,
        icon: <TbReportAnalytics size={30} />,
        title: "Tổng công việc",
    },
    {
        bgColorCard: "rgb(255, 231, 217)",
        colorCard: "rgb(122, 12, 46)",
        iconColor: "rgb(183, 33, 54)",
        bgImage:
            "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
        amount: 0,
        icon: <FaUserNinja size={30} />,
        title: "Tổng tài xế",
    },
];

export const LATEST_ORDER_HEADER_TABLE = [
    {
        id: "name",
        label: "Sản phẩm",
        minWidth: 170,
    },
    { id: "code", label: "Khu vực\u00a0Code", minWidth: 100 },
    {
        id: "population",
        label: "Số lượng",
        minWidth: 170,
        align: "right",

        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "size",
        label: "Khoảng cách\u00a0(km\u00b2)",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "density",
        label: "Số lượng",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },
];
