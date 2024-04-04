import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const CashFlowChart = ({ cashFlowData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destruir el gráfico anterior
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: cashFlowData.map((_, index) => `Week ${index + 1}`),
          datasets: [
            {
              label: "Cash Flow",
              data: cashFlowData,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
      });
    }
  }, [cashFlowData]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Flujo de efectivo</h2>
        <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CashFlowChart;
