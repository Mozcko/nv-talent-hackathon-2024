import React, { FormEvent, useState } from "react";
import { Button } from "flowbite-react";

interface Record {
  type: string;
  value: number;
  quantity: number;
  unit: string;
  service: boolean;
}

const LogBookForm: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [total, setTotal] = useState(0);

  const addRecord = (record: Record) => {
    setRecords((prev) => [...prev, record]);
  };

  const calculateTotal = () => {
    const saleRecords = records.filter((record) => record.type === "Venta");
    const expenseRecords = records.filter((record) => record.type === "Gasto");

    const saleTotal = saleRecords.reduce((acc, record) => {
      return acc + record.value * record.quantity;
    }, 0);

    const expenseTotal = expenseRecords.reduce((acc, record) => {
      return acc + record.value * record.quantity;
    }, 0);

    setTotal(saleTotal - expenseTotal);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const record: Record = {
      type: formData.get("type") as string,
      value: parseFloat(formData.get("value") as string),
      quantity: parseInt(formData.get("quantity") as string),
      unit: formData.get("unit") as string,
      service: Boolean((event.target as HTMLFormElement).service.checked),
    };
    addRecord(record);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-5">
        <input type="text" name="concept" className="m-3" required />
        <select name="type" className="m-3" required>
            <option value="sale">Venta</option>
            <option value="expense">Gasto</option>
        </select>
        <input type="number" name="value" className="m-3" step="0.01" required />
        <input type="number" name="quantity" className="m-3" step="1" required />
        <select name="unit" required>
            <option value="unit1">unidades</option>
            <option value="unit2">g</option>
            <option value="unit3">kg</option>
            <option value="unit4">lt</option>
        </select>
        <input type="checkbox" name="service" className="ml-3 mr-1" id="service" />
        <label htmlFor="service">Service</label>
      </div>
      <Button color="light" pill> + </Button>
      <button type="button" onClick={calculateTotal}>Add All Records</button>
      <p>Total: {total}</p>
    </form>
  );
};
//Agregar guardar en JSON y terminar formatos
export default LogBookForm;
