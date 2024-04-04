import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ProfitabilityChart = ({ productProfitability }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destruir el gráfico anterior
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: productProfitability.map((product) => product.productName),
          datasets: [
            {
              label: "Rendiemiento",
              data: productProfitability.map((product) => product.profitability),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [productProfitability]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Productos mas rentables</h2>
      
  <canvas ref={chartRef}></canvas>
  </div>
  );
};

export default ProfitabilityChart;
