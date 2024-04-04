import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono de filtro de Font Awesome

interface Tags {
  cities: string[];
  categories: string[];
  subcategories: string[];
  deliveryTypes: string[];
  productTypes: string[];
}

interface FilterAsideProps {
  tags: Tags;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

interface Filters {
  city: string;
  category: string;
  subcategory: string;
  delivery: string;
  product: string;
  [key: string]: string;
}

const FilterAside: React.FC<FilterAsideProps> = ({ tags, setFilters }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFilterChange = (category: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value
    }));
  };

  return (
    <aside className="md:block sm:sticky top-16 h-full">
      {/* Filtros para dispositivos grandes */}
      <div className="hidden md:flex flex-col bg-white-100 p-4 rounded-lg w-64">
        <h2 className="text-black-100">Filters</h2>
        {/* Contenido de los filtros */}
        <div className="mt-4">
          <h3 className="text-black-100">Cities</h3>
          <select
            className="w-full py-2 px-3 rounded-md border border-black-200"
            onChange={(e) => handleFilterChange("city", e)}
          >
            <option value="">All</option>
            {tags.cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        {/* Añade los otros filtros aquí */}
        <div className="mt-4">
          <h3 className="text-black-100">Categories</h3>
          <select
            className="w-full py-2 px-3 rounded-md border border-black-200"
            onChange={(e) => handleFilterChange("category", e)}
          >
            <option value="">All</option>
            {tags.categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <h3 className="text-black-100">Subcategories</h3>
          <select
            className="w-full py-2 px-3 rounded-md border border-black-200"
            onChange={(e) => handleFilterChange("subcategory", e)}
          >
            <option value="">All</option>
            {tags.subcategories.map((subcategory, index) => (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <h3 className="text-black-100">Delivery Types</h3>
          <select
            className="w-full py-2 px-3 rounded-md border border-black-200"
            onChange={(e) => handleFilterChange("delivery", e)}
          >
            <option value="">All</option>
            {tags.deliveryTypes.map((deliveryType, index) => (
              <option key={index} value={deliveryType}>
                {deliveryType}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <h3 className="text-black-100">Product Types</h3>
          <select
            className="w-full py-2 px-3 rounded-md border border-black-200"
            onChange={(e) => handleFilterChange("product", e)}
          >
            <option value="">All</option>
            {tags.productTypes.map((productType, index) => (
              <option key={index} value={productType}>
                {productType}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Menú desplegable para dispositivos pequeños */}
      <div className="md:hidden bg-gray-100">
        <button
          className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faFilter} className="mr-2" /> {/* Ícono de filtro de Font Awesome */}
          {isMenuOpen ? "Hide Filters" : "Show Filters"}
        </button>
        {isMenuOpen && (
          <div className="mt-2">
            {/* Contenido del menú desplegable */}
            <div>
              <h2 className="text-black-100">Filters</h2>
              {/* Contenido de los filtros */}
              <div className="mt-2">
                <h3 className="text-black-100">Cities</h3>
                <select
                  className="w-full py-2 px-3 rounded-md border border-black-200"
                  onChange={(e) => handleFilterChange("city", e)}
                >
                  <option value="">All</option>
                  {tags.cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              {/* Añade los otros filtros aquí */}
              <div className="mt-2">
                <h3 className="text-black-100">Categories</h3>
                <select
                  className="w-full py-2 px-3 rounded-md border border-black-200"
                  onChange={(e) => handleFilterChange("category", e)}
                >
                  <option value="">All</option>
                  {tags.categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <h3 className="text-black-100">Subcategories</h3>
                <select
                  className="w-full py-2 px-3 rounded-md border border-black-200"
                  onChange={(e) => handleFilterChange("subcategory", e)}
                >
                  <option value="">All</option>
                  {tags.subcategories.map((subcategory, index) => (
                    <option key={index} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <h3 className="text-black-100">Delivery Types</h3>
                <select
                  className="w-full py-2 px-3 rounded-md border border-black-200"
                  onChange={(e) => handleFilterChange("delivery", e)}
                >
                  <option value="">All</option>
                  {tags.deliveryTypes.map((deliveryType, index) => (
                    <option key={index} value={deliveryType}>
                      {deliveryType}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <h3 className="text-black-100">Product Types</h3>
                <select
                  className="w-full py-2 px-3 rounded-md border border-black-200"
                  onChange={(e) => handleFilterChange("product", e)}
                >
                  <option value="">All</option>
                  {tags.productTypes.map((productType, index) => (
                    <option key={index} value={productType}>
                      {productType}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterAside;
