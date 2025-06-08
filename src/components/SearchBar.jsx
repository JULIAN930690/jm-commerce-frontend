import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
