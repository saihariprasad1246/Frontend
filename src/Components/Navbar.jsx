import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
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
    <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg z-50 transition-all duration-500 sm:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-center sm:flex-row sm:items-center w-full">
          {/* Logo */}
          <Link
            to="/Frontend"
            className="text-3xl font-bold tracking-wide text-yellow-300 transition-transform hover:scale-110 duration-300"
          >
            FreeCoupons
          </Link>
          
          {/* Search Form (Mobile View) */}
          <div className="w-full mt-4 sm:hidden">
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-white rounded-full overflow-hidden shadow-md focus-within:ring-2 focus-within:ring-yellow-400 w-full max-w-xs mx-auto"
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
        </div>

        {/* Search Form (Desktop View) */}
        <div className="hidden sm:flex w-auto">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white rounded-full overflow-hidden shadow-md focus-within:ring-2 focus-within:ring-yellow-400"
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

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm mt-2 sm:mt-0 text-center">{error}</div>}

        {/* Dropdown Menu (Aligned to Right) */}
        <div className="mt-4 sm:mt-0 sm:ml-auto sm:self-end">
          <DropdownMenu setSearch={setSearch} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
