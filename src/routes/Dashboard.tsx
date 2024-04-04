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
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "#2C587A" }}>Mi Tablero</h1>

      <h2 className="text-2xl mb-4" style={{ color: "#618AAF" }}>Tu camino hacia el éxito comienza aquí...</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 align-center">
        <div className="mt-12">
          <Income />
        </div>
        <div className="mt-12">
          <Expenses />
        </div>
      </div>

      <h2 className="text-2xl mt-8 mb-4" style={{ color: "#2C587A" }}>¡Celebra tus ingresos como pasos hacia el éxito y gestiona tus gastos como inversiones en el futuro de tu negocio!</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-12">
          <Profit revenue={profitData.revenue} expenses={profitData.expenses} profit={profitData.profit} />
        </div>
        <div className="mt-12">
          <CashFlowChart cashFlowData={cashFlowData} />
        </div>
      </div>

      <h2 className="text-2xl mt-8 mb-4" style={{ color: "#618AAF" }}>¡Descubre qué productos están volando de los estantes y cuáles están impulsando tu rentabilidad!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-12">
          <BestSellingProductsChart productData={productData} />
        </div>
        <div className="mt-12">
          <ProfitabilityChart productProfitability={productProfitability} />
        </div>
      </div>

      <h2 className="text-2xl mt-8 mb-4" style={{ color: "#2C587A" }}>¡Mira esta visión detallada de quiénes son tus clientes y cómo prefieren comprar tus productos o servicios!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="mt-12">
          <CustomerSegmentsChart segmentData={segmentData} />
        </div>
        <div className="mt-12">
          <SalesChannelTrendsChart channelData={channelData} />
        </div>
      </div>



    </div>
  );
};

export default Dashboard;
