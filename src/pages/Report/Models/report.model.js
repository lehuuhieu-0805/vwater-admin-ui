export const OrderReport = {
    title: 'Tổng số hóa đơn bán hàng',
    unit: 'Đơn vị, hóa đơn',
    data: [
        {
            label: 'Số đơn hàng thành công',
            value: 0,
            index: 1,
        },
        {
            label: 'Số đơn hàng mới',
            value: 1,
            index: 2,
        },
        {
            label: 'Số đơn có tài xế nhận',
            value: 0,
            index: 3,
        },
        {
            label: 'Số đơn đã lấy hàng',
            value: 0,
            index: 4,
        },
        {
            label: 'Số đơn hàng giao thất bại',
            value: 0,
            index: 5,
        },
        {
            label: `Tổng số đơn hàng (1)+(2)+(3)+(4)+(5)`,
            value: 1,
            index: false,
            active: true
        },
    ],
}

export const RevenueReport = {
    title: 'Tổng doanh thu bán hàng',
    unit: 'Đơn vị (VNĐ)',
    currency: true,
    data: [
        {
            label: 'Phí ship',
            value: 0,
            index: false,
        },
        {
            label: 'Phí ship đơn COD',
            value: 8000,
            index: false,
        },
        {
            label: 'Phí đường đi',
            value: 0,
            index: false,
        },
        {
            label: 'Phí đường đi đơn COD',
            value: 0,
            index: false,
        },
        {
            label: 'Phụ phí',
            value: 0,
            index: false,
        },
        {
            label: `Phụ phí đơn COD`,
            value: 0,
            index: false
        },
        {
            label: `Tổng thu hộ`,
            value: 0,
            index: 1,
            active: true
        },
        {
            label: `Tổng tiền ship`,
            value: 0,
            index: 2
        },
        {
            label: `Tiền cần hoàn lại (1)-(2)`,
            value: 37000,
            index: false,
            active: true
        },
    ],
}