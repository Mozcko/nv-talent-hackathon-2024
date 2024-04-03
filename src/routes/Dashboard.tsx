import React from "react";
import {
  Income,
  Expenses,
  Profit,
  CashFlowChart,
  BestSellingProductsChart,
  CustomerSegmentsChart,
  SalesChannelTrendsChart,
  ProfitabilityChart,
} from "../components";

const Dashboard = () => {
  const profitData = {
    revenue: 15000,
    expenses: 8000,
    profit: 7000,
  };

  const cashFlowData = [1000, 2000, 1500, 3000, 2500, 2000]; // Datos de ejemplo para el flujo de efectivo
  const productData = [
    { productName: "Producto A", salesCount: 50 },
    { productName: "Producto B", salesCount: 30 },
    { productName: "Producto C", salesCount: 20 },
  ]; // Datos de ejemplo para productos más vendidos
  const segmentData = [
    { segment: "Segmento A", customersCount: 100 },
    { segment: "Segmento B", customersCount: 80 },
    { segment: "Segmento C", customersCount: 120 },
  ]; // Datos de ejemplo para clientes por segmento
  const channelData = [
    { channel: "Tienda Física", salesTrend: [1000, 1500, 2000, 1800, 2200, 2500] },
    { channel: "Sitio Web", salesTrend: [500, 800, 1000, 1200, 1500, 1800] },
    { channel: "Redes Sociales", salesTrend: [200, 400, 600, 800, 1000, 1200] },
  ]; // Datos de ejemplo para tendencias de ventas por canal
  const productProfitability = [
    { productName: "Producto A", profitability: 20 },
    { productName: "Producto B", profitability: 25 },
    { productName: "Producto C", profitability: 15 },
  ]; // Datos de ejemplo para rentabilidad por producto o servicio

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="dashboard-item mt-32">
            <Income />
        </div>
        <div className="dashboard-item mt-32">
            <Expenses />
        </div>
        <div className="dashboard-item mt-32">
            <Profit revenue={profitData.revenue} expenses={profitData.expenses} profit={profitData.profit} />
        </div>
        <div className="dashboard-item mt-32">
            <CashFlowChart cashFlowData={cashFlowData} />
        </div>
        <div className="dashboard-item mt-32">
            <BestSellingProductsChart productData={productData} />
        </div>
        <div className="dashboard-item mt-32">
            <CustomerSegmentsChart segmentData={segmentData} />
        </div>
        <div className="dashboard-item mt-32">
            <SalesChannelTrendsChart channelData={channelData} />
        </div>
        <div className="dashboard-item mt-32">
            <ProfitabilityChart productProfitability={productProfitability} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
