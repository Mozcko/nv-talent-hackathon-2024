import React, { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface CashFlowChartProps {
  cashFlowData: number[];
}

const CashFlowChart: React.FC<CashFlowChartProps> = ({ cashFlowData }) => {
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
      };

      chartInstance.current = new Chart(chartRef.current, chartConfig);
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

