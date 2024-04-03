// src/components/Expenses.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Expenses: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let expensesChart: Chart | null = null;

  useEffect(() => {
    if (chartRef.current) {
      if (expensesChart) {
        expensesChart.destroy(); // Destruir el gráfico existente
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        expensesChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Enero', 'Febrero', 'Marzo'], // Ejemplo de etiquetas
            datasets: [{
              label: 'Gastos',
              data: [2000, 3000, 4000], // Ejemplo de datos
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
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
      <h2 className="text-lg font-semibold">Gastos</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Expenses;

