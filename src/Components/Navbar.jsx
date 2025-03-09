import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import DropdownMenu from "./Dropdown";

function Navbar() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function isAlphabetOnly(str) {
    return /^[A-Za-z]+$/.test(str);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAlphabetOnly(search)) {
      navigate(`/Frontend/?search=${search}`, { replace: true });
      setError("");
    } else {
      setError("Please enter a valid search query");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/Frontend"
          className="text-2xl font-bold text-yellow-300 hover:scale-110 transition-transform"
        >
          FreeCoupons
        </Link>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white rounded-full shadow-md focus-within:ring-2 focus-within:ring-yellow-400 w-full max-w-sm sm:max-w-md"
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 bg-white outline-none text-black placeholder-gray-500 flex-grow"
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setError("");
                }}
                className="px-2 text-gray-600 hover:text-black"
              >
                <RxCross2 size={20} />
              </button>
            )}
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 flex items-center justify-center rounded-r-full"
            >
              <FiSearch size={20} className="text-black" />
            </button>
          </form>
        </div>

        {/* Dropdown Menu */}
        <div className="ml-4">
          <DropdownMenu setSearch={setSearch} />
        </div>
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
    </nav>
  );
}

export default Navbar;
