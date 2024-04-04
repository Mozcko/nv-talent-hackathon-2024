import React, { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface Segment {
  segment: string;
  customersCount: number;
}

interface CustomerSegmentsChartProps {
  segmentData: Segment[];
}

const CustomerSegmentsChart: React.FC<CustomerSegmentsChartProps> = ({ segmentData }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destruir el gráfico anterior
      }

      const chartConfig: ChartConfiguration<"doughnut"> = {
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
      };

      chartInstance.current = new Chart(chartRef.current, chartConfig);
    }
  }, [segmentData]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Segmentación de clientes</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CustomerSegmentsChart;
