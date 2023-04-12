import { Box } from '@mui/material'
import React from 'react'
import { HelperUtils } from '../../../utils/helper';
import './style.css';

function ReportCard(props) {
    const { background, backgroundHighlight, report } = props

    return (
        <Box className="card-container">
            <Box className="card"
                sx={{
                    background: background,
                }}
            >
                <div className="card-header">
                    <h3>{report.title}</h3>
                    <p>{report.unit}</p>
                </div>

                {(report.data || []).map((item, index) => (
                    <div key={index} className="card_body-item" style={{
                        background: item.active ? backgroundHighlight : 'transparent'
                    }}>
                        <span>
                            {item.label}
                            {item.index && <span style={{ display: 'inline-block', marginLeft: '5px' }}>({item.index})</span>}
                        </span>
                        <span>{report.currency ? HelperUtils.formatCurrency(item.value) : item.value}</span>
                    </div>
                ))}

                {/* <div className="card_body-item">
                    <span>Số đơn hàng mới (2)</span>
                    <span>1</span>
                </div>
                <div className="card_body-item">
                    <span>Số đơn có tài xế nhận (3)</span>
                    <span>0</span>
                </div>
                <div className="card_body-item">
                    Số đơn đã lấy hàng (4)
                    <span>0</span>
                </div>
                <div className="card_body-item">
                    Số đơn hàng giao thất bại (5)
                    <span>1</span>
                </div>
                <div className="card_body-item">
                    <span>Tổng số đơn hàng (1)+(2)+(3)+(4)+(5)</span>
                    <span>1</span>
                </div> */}
            </Box>
        </Box>
    )
}

export default ReportCard