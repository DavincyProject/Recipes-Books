import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { IoMdStopwatch } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import propTypes from "prop-types";

const ItemCard = ({ recipe }) => {
  const {
    namaResep,
    deskripsi,
    urlGambar,
    kategori,
    tingkatKesulitan,
    waktuMemasak,
    porsi,
  } = recipe;
  return (
    <div className="py-5">
      <div className="card bg-white w-full max-w-[400px] shadow-sm text-black">
        <figure>
          <img
            src={urlGambar}
            className="max-h-48 w-full object-cover"
            alt={namaResep}
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <div className="badge text-orange-800 font-bold bg-orange-300 border-none ">
              <CiForkAndKnife /> {kategori}
            </div>
          </div>
          <h2 className="card-title -mb-1">{namaResep}</h2>
          <p className="text-gray-500 text-justify">{deskripsi}</p>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <IoMdStopwatch size={15} />
              {waktuMemasak}
            </div>

            <div className="flex items-center gap-1 text-gray-500">
              <BsPeopleFill size={15} />
              {porsi}
            </div>

            <div className="badge badge-success">{tingkatKesulitan}</div>
          </div>

          <div className="h-full gap-2 flex justify-center items-center">
            <div className="flex-grow">
              <button
                className="btn w-full"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                <FaRegEye />
                Lihat Detail
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box text-white ">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </div>
              </dialog>
            </div>
            <div className="btn btn-ghost">
              <FaRegEdit size={25} />
            </div>
            <div className="btn btn-ghost">
              <MdDeleteSweep size={30} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  recipe: propTypes.shape({
    namaResep: propTypes.string.isRequired,
    deskripsi: propTypes.string.isRequired,
    urlGambar: propTypes.string.isRequired,
    kategori: propTypes.string.isRequired,
    tingkatKesulitan: propTypes.string.isRequired,
    waktuMemasak: propTypes.string.isRequired,
    porsi: propTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
