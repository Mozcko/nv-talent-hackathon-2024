import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const SalesChannelTrendsChart = ({ channelData }) => {
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
          labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6"],
          datasets: channelData.map((channel, index) => ({
            label: channel.channel,
            data: channel.salesTrend,
            fill: false,
            borderColor: `rgba(${index * 50}, ${index * 100}, ${index * 150}, 0.5)`,
            tension: 0.1,
          })),
        },
      });
    }
  }, [channelData]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Canales de venta</h2>
      
        <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SalesChannelTrendsChart;
