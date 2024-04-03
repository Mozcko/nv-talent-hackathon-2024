import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const CustomerSegmentsChart = ({ segmentData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destruir el gráfico anterior
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: segmentData.map((segment) => segment.segment),
          datasets: [
            {
              label: "Customer Segments",
              data: segmentData.map((segment) => segment.customersCount),
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
              ],
            },
          ],
        },
      });
    }
  }, [segmentData]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Segmentacion de clientes</h2>
      
  <canvas ref={chartRef}></canvas>
  </div>
  );
};

export default CustomerSegmentsChart;
