// src/components/Income.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Income: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let incomeChart: Chart | null = null;

  useEffect(() => {
    if (chartRef.current) {
      if (incomeChart) {
        incomeChart.destroy(); // Destruir el gráfico existente
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        incomeChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Enero', 'Febrero', 'Marzo'], // Ejemplo de etiquetas
            datasets: [{
              label: 'Ingresos',
              data: [5000, 6000, 7000], // Ejemplo de datos
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Ingresos</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Income;
