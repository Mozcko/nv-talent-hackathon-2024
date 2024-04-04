// src/components/ProfitChart.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Profit: React.FC<{ revenue: number; expenses: number; profit: number }> = ({ revenue, expenses, profit }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let profitChart: Chart | null = null;

  useEffect(() => {
    if (chartRef.current) {
      if (profitChart) {
        profitChart.destroy(); // Destruir el gráfico existente
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        profitChart = new Chart(ctx, {
          type: 'bar', // Cambiar el tipo de gráfico a barra
          data: {
            labels: ['Ingresos', 'Gastos', 'Utilidad'],
            datasets: [{
              label: 'Cantidad',
              data: [revenue, expenses, profit],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            indexAxis: 'y', // Establecer el eje de índice como 'y' para barras horizontales
            scales: {
              x: {
                beginAtZero: true
              }
            },
            animation: false // Desactivar la animación
          }
        });
      }
    }
  }, [revenue, expenses, profit]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Rentabilidad y Utilidad</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Profit;
