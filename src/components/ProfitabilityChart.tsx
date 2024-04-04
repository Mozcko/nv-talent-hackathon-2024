import React, { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface Product {
  productName: string;
  profitability: number;
}

interface ProfitabilityChartProps {
  productProfitability: Product[];
}

const ProfitabilityChart: React.FC<ProfitabilityChartProps> = ({ productProfitability }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"bar"> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destruir el gráfico anterior
      }

      const chartConfig: ChartConfiguration<"bar"> = {
        type: "bar",
        data: {
          labels: productProfitability.map((product) => product.productName),
          datasets: [
            {
              label: "Profitability",
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
      };

      chartInstance.current = new Chart(chartRef.current, chartConfig);
    }
  }, [productProfitability]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Productos más rentables</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ProfitabilityChart;
