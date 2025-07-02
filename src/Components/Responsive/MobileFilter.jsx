import React, { useState } from "react";

const MobileFilter = ({ isOpen, onClose, onApplyFilter }) => {
  // State lokal untuk menampung pilihan filter sebelum diterapkan
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("Terbaru");

  if (!isOpen) {
    return null; // Jangan render apapun jika tidak terbuka
  }

  // Fungsi untuk menangani perubahan checkbox kategori
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== value)
      );
    }
  };

  // Fungsi untuk menangani saat tombol "Terapkan" diklik
  const handleSubmit = (event) => {
    event.preventDefault();
    onApplyFilter({
      categories: selectedCategories,
      sort: sortOrder,
    });
    onClose(); // Tutup modal setelah menerapkan filter
  };
  return (
    <div>
      // Latar belakang overlay
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-end sm:items-center">
        {/* Konten Modal */}
        <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-xl p-6 transform transition-all">
          <form onSubmit={handleSubmit}>
            {/* Header Modal */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Filter
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
              >
                {/* SVG Icon untuk tombol close */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Opsi Filter: Kategori */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                Kategori
              </h3>
              <div className="space-y-2">
                {[
                  "Main Course",
                  "Appetizer",
                  "Dessert",
                  "Beverage",
                  "Snack",
                ].map((category) => (
                  <label
                    key={category}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <input
                      type="checkbox"
                      value={category}
                      onChange={handleCategoryChange}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Opsi Filter: Urutkan */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                Urutkan
              </h3>
              <div className="space-y-2">
                {["Easy", "Medium", "Hard"].map((sort) => (
                  <label
                    key={sort}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <input
                      type="radio"
                      name="sortOrder"
                      value={sort}
                      checked={sortOrder === sort}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3">{sort}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tombol Aksi */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Terapkan Filter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
