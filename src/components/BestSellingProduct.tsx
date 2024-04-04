import React, { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface Product {
  productName: string;
  salesCount: number;
}

interface BestSellingProductsChartProps {
  productData: Product[];
}

const BestSellingProductsChart: React.FC<BestSellingProductsChartProps> = ({ productData }) => {
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
          labels: productData.map((product) => product.productName),
          datasets: [
            {
              label: "Productos más vendidos",
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
      };

      chartInstance.current = new Chart(chartRef.current, chartConfig);
    }
  }, [productData]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Productos más vendidos</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BestSellingProductsChart;
