import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";

const FilterCard = () => {
  const [formData, setFormData] = useState({
    namaResep: "",
    deskripsi: "",
    urlGambar: "",
    kategori: "",
    tingkatKesulitan: "",
    prepTime: "",
    cookTime: "",
    porsi: "",
    bahan: [{ id: Date.now(), nama: "", jumlah: "" }],
    langkah: [{ id: Date.now(), deskripsi: "" }],
  });

  const [imageError, setImageError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setImageError(false);
  }, [formData.urlGambar]);

  // --- HANDLER UNTUK BAHAN ---
  const handleBahanChange = (index, event) => {
    // Buat salinan dari array bahan agar tidak mengubah state secara langsung
    const values = [...formData.bahan];
    // Update nilai 'nama' atau 'jumlah' dari bahan pada index tertentu
    values[index][event.target.name] = event.target.value;
    // Set state baru
    setFormData({ ...formData, bahan: values });
  };

  const handleTambahBahan = () => {
    // Tambahkan objek bahan baru ke dalam array
    setFormData({
      ...formData,
      bahan: [...formData.bahan, { id: Date.now(), nama: "", jumlah: "" }],
    });
  };

  const handleHapusBahan = (index) => {
    const values = [...formData.bahan];
    // Hanya hapus jika item lebih dari satu
    if (values.length > 1) {
      values.splice(index, 1);
      setFormData({ ...formData, bahan: values });
    }
  };

  // --- HANDLER UNTUK LANGKAH ---
  const handleLangkahChange = (index, event) => {
    const values = [...formData.langkah];
    values[index][event.target.name] = event.target.value;
    setFormData({ ...formData, langkah: values });
  };

  const handleTambahLangkah = () => {
    setFormData({
      ...formData,
      langkah: [...formData.langkah, { id: Date.now(), deskripsi: "" }],
    });
  };

  const handleHapusLangkah = (index) => {
    const values = [...formData.langkah];
    if (values.length > 1) {
      values.splice(index, 1);
      setFormData({ ...formData, langkah: values });
    }
  };

  const handleSubmitResep = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    console.log("Data Resep yang Siap Dikirim:", formData);
    // Di sini bisa menambahkan logika untuk mengirim `formData` ke API
    // Setelah berhasil, tutup modal
    document.getElementById("my_modal_3").close();
  };

  const CardFilter = [
    { label: "Main Course", value: "main-course" },
    { label: "Appetizer", value: "appetizer" },
    { label: "Dessert", value: "dessert" },
    { label: "Beverage", value: "beverage" },
    { label: "Snack", value: "snack" },
  ];

  const DifficultyFilter = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4 p-5">
      <div className="grow md:max-w-[310px]">
        <label className="input">
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
            className="grow "
            placeholder="Cari Resep, bahan, atau chef..."
          />
        </label>
      </div>
      {/* <div className="divider lg:divider-horizontal p-0 m-0" /> */}
      <div>
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          {CardFilter.map((filter) => (
            <input
              key={filter.value}
              className="btn m-1 md:m-0 grow"
              type="radio"
              name="frameworks"
              aria-label={filter.label}
            />
          ))}
        </form>
      </div>
      <div className="divider lg:divider-horizontal p-0 m-0" />
      <div>
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          {DifficultyFilter.map((filter) => (
            <input
              key={filter.value}
              className="btn mx-1 md:m-0 grow"
              type="radio"
              name="frameworks"
              aria-label={filter.label}
            />
          ))}
        </form>
      </div>
      <div className="divider lg:divider-horizontal p-0 m-0" />

      {/* modal button start here */}
      <button
        className="btn btn-info grow md:max-w-[310px]"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <IoMdAdd size={20} />
        Tambah Resep Baru
      </button>

      {/* modal open here */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl max-h-[80dvh] border border-gray-800">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-bold text-lg">Tambah Resep Baru</h1>
          <small>Buat resep baru untuk dibagikan.</small>

          <form
            onSubmit={handleSubmitResep}
            className="mt-4 flex flex-col w-full gap-4"
          >
            {/* ... Bagian input yang sudah ada ... */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">
                Nama Resep <span className="text-red-500">*</span>
              </legend>
              <input
                type="text"
                name="namaResep"
                value={formData.namaResep}
                onChange={handleChange}
                className="input w-full"
                placeholder="Nama Resep yang menarik"
                required
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">
                Deskripsi Resep <span className="text-red-500">*</span>
              </legend>
              <textarea
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                className="textarea w-full"
                placeholder="Deskripsi singkat tentang resep ini"
                rows="4"
                required
              ></textarea>
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">
                URL Gambar <span className="text-red-500">*</span>
              </legend>
              <input
                type="text"
                name="urlGambar"
                value={formData.urlGambar}
                onChange={handleChange}
                className="input w-full"
                placeholder="https://example.com/image.jpg"
                required
              />
            </fieldset>

            {formData.urlGambar && !imageError && (
              <div className="mt-2">
                <small className="text-gray-400">Preview gambar</small>
                <img
                  src={formData.urlGambar}
                  alt="Preview resep"
                  className="w-full h-64 object-cover mt-1 rounded-lg border border-gray-700"
                  onError={() => setImageError(true)}
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Kategori</legend>
                <select
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  className="select w-full"
                >
                  <option>Main Course</option>
                  <option>Dessert</option>
                  <option>Appetizer</option>
                  <option>Minuman</option>
                </select>
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Tingkat Kesulitan</legend>
                <select
                  name="tingkatKesulitan"
                  value={formData.tingkatKesulitan}
                  onChange={handleChange}
                  className="select w-full"
                >
                  <option>Mudah</option>
                  <option>Menengah</option>
                  <option>Sulit</option>
                </select>
              </fieldset>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <fieldset>
                <legend>Prep Time (menit)</legend>
                <input
                  type="number"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>
              <fieldset>
                <legend>Cook Time (menit)</legend>
                <input
                  type="number"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>
              <fieldset>
                <legend>Porsi</legend>
                <input
                  type="number"
                  name="porsi"
                  value={formData.porsi}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Bahan-bahan</h3>
                <button
                  type="button"
                  onClick={handleTambahBahan}
                  className="btn btn-sm"
                >
                  <IoMdAdd /> Tambah Bahan
                </button>
              </div>
              {formData.bahan.map((bahan, index) => (
                <div key={bahan.id} className="flex items-center gap-2">
                  <input
                    type="text"
                    name="nama"
                    value={bahan.nama}
                    onChange={(e) => handleBahanChange(index, e)}
                    className="input w-full"
                    placeholder="Nama bahan"
                    required
                  />
                  <input
                    type="text"
                    name="jumlah"
                    value={bahan.jumlah}
                    onChange={(e) => handleBahanChange(index, e)}
                    className="input w-1/3"
                    placeholder="cth: 200 gram"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleHapusBahan(index)}
                    className="btn btn-ghost btn-square"
                    disabled={formData.bahan.length === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            {/* ======================================================= */}

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Langkah-langkah</h3>
                <button
                  type="button"
                  onClick={handleTambahLangkah}
                  className="btn btn-sm"
                >
                  <IoMdAdd /> Tambah Langkah
                </button>
              </div>
              {formData.langkah.map((langkah, index) => (
                <div key={langkah.id} className="flex items-start gap-2">
                  <span className="pt-3 font-semibold">{index + 1}.</span>
                  <textarea
                    name="deskripsi"
                    value={langkah.deskripsi}
                    onChange={(e) => handleLangkahChange(index, e)}
                    className="textarea w-full"
                    placeholder="Langkah Memasak"
                    rows="2"
                    required
                  ></textarea>
                  <button
                    type="button"
                    onClick={() => handleHapusLangkah(index)}
                    className="btn btn-ghost btn-square"
                    disabled={formData.langkah.length === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            {/* ======================================================= */}

            {/* === KODE BARU: Tombol Aksi di Footer Modal === */}
            <div className="modal-action mt-6 flex justify-end gap-2">
              {/* Tombol Batal ini akan menggunakan method="dialog" untuk menutup modal */}
              <button
                type="button"
                className="btn btn-error"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                Batal
              </button>
              {/* Tombol ini akan men-submit form */}
              <button type="submit" className="btn btn-info">
                Tambah Resep
              </button>
            </div>
            {/* ============================================== */}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FilterCard;
