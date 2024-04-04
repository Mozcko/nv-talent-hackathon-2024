import React, { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface Channel {
  channel: string;
  salesTrend: number[];
}

interface SalesChannelTrendsChartProps {
  channelData: Channel[];
}

const SalesChannelTrendsChart: React.FC<SalesChannelTrendsChartProps> = ({ channelData }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"line"> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destruir el gráfico anterior
      }

      const chartConfig: ChartConfiguration<"line"> = {
        type: "line",
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
          datasets: channelData.map((channel, index) => ({
            label: channel.channel,
            data: channel.salesTrend,
            fill: false,
            borderColor: `rgba(${index * 50}, ${index * 100}, ${index * 150}, 0.5)`,
            tension: 0.1,
          })),
        },
      };

      chartInstance.current = new Chart(chartRef.current, chartConfig);
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
