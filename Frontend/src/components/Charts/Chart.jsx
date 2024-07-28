// import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset } from "./dataset ";

const chartSetting = {
    yAxis: [
        {
            label: "Cantidad",
        },
    ],
    width: 800,
    height: 400,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: "translate(-20px, 0)",
        },
    },
};

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
    return (
        <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
                { dataKey: "productos", label: "Productos", valueFormatter },
                { dataKey: "movimientos", label: "Movimientos", valueFormatter },
                { dataKey: "categoria", label: "Categoria", valueFormatter },
            ]}
            {...chartSetting}
        />
    );
}
