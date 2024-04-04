import React, { FormEvent, useState } from "react";
import { Button, Table } from "flowbite-react";

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
    <>
    <form onSubmit={handleSubmit} className="bg-fill-100 rounded-lg p-6">
      <div className="m-5">
        <input type="text" name="concept" className="m-3 p-2 border border-black-200 rounded-md" placeholder="Concepto" required />
        <input type="checkbox" name="service" className="ml-3 mr-1" id="service" />
        <label htmlFor="service" className="text-black-100">Servicio</label>
        <select name="type" className="m-3 p-2 border border-black-200 rounded-md" required>
          <option value="sale">Venta</option>
          <option value="expense">Gasto</option>
        </select>
        <input type="number" name="value" className="m-3 p-2 border border-black-200 rounded-md" step="0.01" placeholder="Valor" required />
        <input type="number" name="quantity" className="m-3 p-2 border border-black-200 rounded-md" step="1" placeholder="Cantidad" required />
        <select name="unit" className="p-2 border border-black-200 rounded-md" required>
          <option value="unit1">unidades</option>
          <option value="unit2">g</option>
          <option value="unit3">kg</option>
          <option value="unit4">lt</option>
        </select>
      </div>
      <button type="submit" className="bg-primary text-white-100 hover:bg-primary-dark rounded-lg p-2">Guardar</button>
      {/* <button type="button" onClick={calculateTotal} className="bg-secondary text-white-100 hover:bg-secondary-dark rounded-lg p-2 ml-2">Agregar</button> */}
      <p className="text-black-100">Total: {total}</p>
    </form>
    
    <div className="overflow-x-auto">
    <h2 className="my-5 text-xl font-semibold text-black-100 mb-4 border-b border-black-200 pb-2">
      Mis Anotaciones
    </h2>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Concepto</Table.HeadCell>
          <Table.HeadCell>Categoria</Table.HeadCell>
          <Table.HeadCell>Cantidad</Table.HeadCell>
          <Table.HeadCell>monto</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Google Pixel Phone
            </Table.Cell>
            <Table.Cell>Gray</Table.Cell>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>$799</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
            <Table.Cell>Red</Table.Cell>
            <Table.Cell>Wearables</Table.Cell>
            <Table.Cell>$999</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </>
  );
};
//Agregar guardar en JSON y terminar formatos
export default LogBookForm;
