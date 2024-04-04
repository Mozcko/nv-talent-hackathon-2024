import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const BestSellingProductsChart = ({ productData }) => {
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
          labels: productData.map((product) => product.productName),
          datasets: [
            {
              label: "Ventas",
              data: productData.map((product) => product.salesCount),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
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
  }, [productData]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Productos mas vendidos</h2>
      
        <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BestSellingProductsChart;
