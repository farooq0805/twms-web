import React from "react";
import ReactApexChart from "react-apexcharts";

const MultiSemiCircleRadialBars = () => {
  const chartConfigs = [
    {
      title: "Range: 0 to <100",
      series: [76], // Example: 76%
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: { enabled: true },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
            },
            dataLabels: {
              name: { show: false },
              value: { offsetY: -2, fontSize: "18px" },
            },
          },
        },
        fill: {
            colors: ["#FF0000"], // Red color for radial bar
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
          },
        },
        labels: ["<100"],
      },
    },
    {
      title: "Range: 0 to 90-100",
      series: [92], // Example: 92%
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: { enabled: true },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
            },
            dataLabels: {
              name: { show: false },
              value: { offsetY: -2, fontSize: "18px" },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: ["#51ad51"], // Red color for radial bar
          gradient: {
            shade: "dark",
            shadeIntensity: 0.5,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
          },
        },
        labels: ["90-100"],
      },
    },
    {
      title: "Range: 0 to >100",
      series: [120], // Example: 120%
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: { enabled: true },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
            },
            dataLabels: {
              name: { show: false },
              value: { offsetY: -2, fontSize: "18px" },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: ["#FF0000"], // Red color for radial bar
          gradient: {
            shade: "dark",
            shadeIntensity: 0.6,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 70, 100],
          },
        },
        labels: [">100"],
      },
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {chartConfigs.map((config, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <h4>{config.title}</h4>
          <ReactApexChart
            options={config.options}
            series={config.series}
            type="radialBar"
            height={400}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiSemiCircleRadialBars;
