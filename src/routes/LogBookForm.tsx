import React, { FormEvent, useState } from "react";
import { Table } from "flowbite-react";
import { motion } from "framer-motion";

interface Record {
  concepto: string;
  categoria: string;
  cantidad: number;
  monto: string;
  service: boolean;
}

const LogBookForm: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [serviceChecked, setServiceChecked] = useState(false);

  const addRecord = (record: Record) => {
    setRecords((prev) => [...prev, record]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const concepto = formData.get("concept") as string;
    const categoria = formData.get("type") as string;
    const cantidad = parseInt(formData.get("quantity") as string);
    const monto = `$${parseFloat(formData.get("value") as string).toFixed(2)}`;
    const isService = Boolean(serviceChecked);
  
    if (isService) {
      addRecord({
        concepto: concepto,
        categoria: "Servicio",
        cantidad: 1,
        monto: monto,
        service: isService,
      });
    } else {
      addRecord({
        concepto: concepto,
        categoria: categoria,
        cantidad: cantidad,
        monto: monto,
        service: isService,
      });
    }
    setServiceChecked(false);
    event.currentTarget.reset();
  };
  

  const handleServiceCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServiceChecked(event.target.checked);
  };

  return (
    <>
      <motion.form 
        onSubmit={handleSubmit} 
        className="bg-tertiary rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="m-5">
          <input type="text" name="concept" className="m-3 p-2 border border-black-200 rounded-md" placeholder="Concepto" required />
          <div>
            <input type="checkbox" name="service" className="ml-3 mr-1" id="service" onChange={handleServiceCheckboxChange} />
            <label htmlFor="service" className="text-black-100">Servicio</label>
          </div>
          <select name="type" className={`m-3 p-2 border border-black-200 rounded-md ${serviceChecked ? 'opacity-50 pointer-events-none' : ''}`} required disabled={serviceChecked}>
            <option value="Laptop">Venta</option>
            <option value="Accessories">Gasto</option>
          </select>
          <input type="number" name="value" className={`m-3 p-2 border border-black-200 rounded-md`} step="0.01" placeholder="Valor" required />
          <input type="number" name="quantity" className={`m-3 p-2 border border-black-200 rounded-md ${serviceChecked ? 'opacity-50 pointer-events-none' : ''}`} step="1" placeholder="Cantidad" required disabled={serviceChecked} />
          <select name="unit" className={`p-2 border border-black-200 rounded-md ${serviceChecked ? 'opacity-50 pointer-events-none' : ''}`} required disabled={serviceChecked}>
            <option value="unit1">unidades</option>
            <option value="unit2">g</option>
            <option value="unit3">kg</option>
            <option value="unit4">lt</option>
          </select>
        </div>
        <button type="submit" className="bg-primary text-white-100 hover:bg-primary-dark rounded-lg p-2">Agregar</button>
      </motion.form>

      <motion.div 
        className="overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="my-5 text-xl font-semibold text-black-100 mb-4 border-b border-black-200 pb-2">
          Mis Anotaciones
        </h2>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Concepto</Table.HeadCell>
            <Table.HeadCell>Categoria</Table.HeadCell>
            <Table.HeadCell>Cantidad</Table.HeadCell>
            <Table.HeadCell>Monto</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {records.map((record, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {record.concepto}
                </Table.Cell>
                <Table.Cell>{record.categoria}</Table.Cell>
                <Table.Cell>{record.cantidad}</Table.Cell>
                <Table.Cell>{record.monto}</Table.Cell>
              </motion.tr>
            ))}
          </Table.Body>
        </Table>
      </motion.div>
    </>
  );
};

export default LogBookForm;
