import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { OrderReport, RevenueReport } from "./Models/report.model";
import ReportCard from "./ReportCard";
import './style.css';

export default function Report() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <>
      <div className="report-container">
        <div className="report-header">
          <div className="report_header-left">
            <h2>Báo cáo tổng quan</h2>
          </div>
          <div className="report_header-right">
            <DatePicker
              label="Ngày bắt đầu"
              value={startDate}
              inputFormat={"dd/MM/yyyy"}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="Ngày kết thúc"
              value={endDate}
              inputFormat={"dd/MM/yyyy"}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField
                sx={{
                  marginLeft: '10px'
                }}
                {...params} />}
            />
          </div>
        </div>
        <div className="report-body">
          <ReportCard background={'rgb(33, 150, 243)'} backgroundHighlight={'rgb(3, 169, 244)'} report={OrderReport} />
          <ReportCard background={'rgb(76, 175, 80)'} backgroundHighlight={'rgb(129, 199, 132)'} report={RevenueReport} />
        </div>
      </div>
    </>
  );
}
