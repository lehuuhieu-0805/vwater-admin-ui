import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    TableBasic: {
      width: "100%",
      overflow: "hidden",
      borderRadius: "16px !important",
      boxShadow:
        "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px !important",

      "& >div::-webkit-scrollbar": {
        width: "10px",
      },
      "& >div::-webkit-scrollbar-track": {
        width: "10px",
      },
      "& >div::-webkit-scrollbar-thumb": {
        borderRadius: "30px",
        backgroundColor: "rgb(210, 209, 209)",
      },
      "& .MuiTable-root": {
        padding: "0 10px",
      },
      "& .MuiTableCell-head": {
        color: "rgb(99, 115, 129)",
        backgroundColor: "rgb(244, 246, 248)!important",
        "&:first-child": {
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
        },
        "&:last-child": {
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
        },
      },
      // "& .MuiTableCell-root": {
      //   "&:first-child": {
      //     borderTopLeftRadius: "16px",
      //     borderBottomLeftRadius: "16px",
      //   },
      //   "&:last-child": {
      //     borderTopRightRadius: "16px",
      //     borderBottomRightRadius: "16px",
      //   },
      // },
    },
  })
);
