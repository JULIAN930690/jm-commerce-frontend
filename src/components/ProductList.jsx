import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useProducts } from "../context/ProductContext";

function ProductList() {
  const {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    search,
    setSearch,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    sortBy,
    setSortBy,
    order,
    setOrder,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProducts();

  useEffect(() => {
    setCurrentPage(1);
  }, [search, minPrice, maxPrice, sortBy, order, selectedCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleResetFilters = () => {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedCategory("");
    setSortBy("created_at");
    setOrder("desc");
  };

  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold mb-4">Productos</h1>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded col-span-2"
        />
        <input
          type="number"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="created_at">Recientes</option>
          <option value="price">Precio</option>
          <option value="name">Nombre</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="desc">Descendente</option>
          <option value="asc">Ascendente</option>
        </select>
      </div>

      <div className="mb-6">
        <button
          onClick={handleResetFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Limpiar filtros
        </button>
      </div>

      {/* Filtro de Categoría */}
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4">Filtrar por categoría</h3>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value !== "" ? Number(e.target.value) : "")
          }
        >
          <option value="">Todas las categorías</option>
          {Array.isArray(categories) &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>

      {/* Cantidad de productos */}
      <p className="text-sm text-gray-600 mb-4">
        {products.length} producto{products.length !== 1 ? "s" : ""} encontrado
        {products.length !== 1 ? "s" : ""}
      </p>

      {/* Lista de productos */}
      <motion.div
        key={currentPage}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No se encontraron productos.
          </p>
        )}
      </motion.div>

      {/* Paginación */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="self-center text-gray-700">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </motion.div>
  );
}

export default ProductList;


