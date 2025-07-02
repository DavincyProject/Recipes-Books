import { useState, useEffect } from "react";
import AddItemsModal from "./AddItemsModal";
import MobileFilter from "./Responsive/MobileFilter"; // Pastikan path ini benar
import { CiFilter } from "react-icons/ci";

const FilterCard = () => {
  // State untuk membuka/menutup modal filter mobile
  const [isFilterOpen, setFilterOpen] = useState(false);

  // State untuk menyimpan semua filter yang sedang aktif
  const [activeFilters, setActiveFilters] = useState({
    search: "",
    category: "",
    difficulty: "",
  });

  // Data filter tetap sama
  const CardFilter = [
    { label: "Main Course", value: "main-course" },
    { label: "Appetizer", value: "appetizer" },
    { label: "Dessert", value: "dessert" },
    { label: "Beverage", value: "Beverage" },
    { label: "Snack", value: "Snack" },
  ];

  const DifficultyFilter = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  // Fungsi untuk menangani perubahan pada form filter
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setActiveFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fungsi untuk mereset filter
  const resetFilters = (formName) => {
    if (formName === "category") {
      setActiveFilters((prev) => ({ ...prev, category: "" }));
    }
    if (formName === "difficulty") {
      setActiveFilters((prev) => ({ ...prev, difficulty: "" }));
    }
  };

  // Gunakan useEffect untuk melihat perubahan state (untuk debugging)
  useEffect(() => {
    console.log("Filter aktif saat ini:", activeFilters);
    // Di sinilah Anda akan memanggil fungsi untuk memfilter data resep Anda
  }, [activeFilters]);

  return (
    <div className="flex flex-col gap-4 py-2">
      {/* ====== Tampilan Mobile ====== */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Search Bar untuk Mobile */}
        <label className="input grow w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="search"
            placeholder="Cari Resep, resep, atau chef..."
            value={activeFilters.search}
            onChange={handleFilterChange}
          />
        </label>
        {/* Tombol untuk membuka filter mobile */}
        <button
          className="btn btn-info w-full"
          onClick={() => setFilterOpen(true)}
        >
          <CiFilter />
          Filter & Urutkan
        </button>
      </div>

      {/* ====== Tampilan Desktop ====== */}
      <div className="hidden md:flex flex-row items-center gap-4">
        {/* Search Bar */}

        <label className="input grow max-w-xs">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="search"
            placeholder="Cari Resep, resep, atau chef..."
            value={activeFilters.search}
            onChange={handleFilterChange}
          />
        </label>

        {/* Filter Kategori */}
        <div className="flex items-center gap-1">
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => resetFilters("category")}
          >
            ✕
          </button>
          {CardFilter.map((filter) => (
            <input
              key={filter.value}
              className="btn btn-sm"
              type="radio"
              name="category" // Nama unik untuk grup ini
              aria-label={filter.label}
              value={filter.value}
              checked={activeFilters.category === filter.value}
              onChange={handleFilterChange}
            />
          ))}
        </div>

        <div className="divider divider-horizontal m-0" />

        {/* Filter Difficulty */}
        <div className="flex items-center gap-1">
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => resetFilters("difficulty")}
          >
            ✕
          </button>
          {DifficultyFilter.map((filter) => (
            <input
              key={filter.value}
              className="btn btn-sm"
              type="radio"
              name="difficulty" // Nama unik untuk grup ini
              aria-label={filter.label}
              value={filter.value}
              checked={activeFilters.difficulty === filter.value}
              onChange={handleFilterChange}
            />
          ))}
        </div>

        <div className="divider divider-horizontal m-0" />

        <AddItemsModal />
      </div>

      {/* Komponen MobileFilter dipanggil di sini, di luar div responsive */}
      <MobileFilter
        isOpen={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        onApplyFilter={(filters) => {
          setActiveFilters((prev) => ({ ...prev, ...filters }));
          setFilterOpen(false);
        }}
        categoryOptions={CardFilter}
        difficultyOptions={DifficultyFilter}
      />
    </div>
  );
};

export default FilterCard;
