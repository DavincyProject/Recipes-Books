import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { IoMdStopwatch } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const ItemCard = () => {
  return (
    <div className="py-5">
      <div className="card bg-white w-full max-w-[400px] shadow-sm text-black">
        <figure>
          <img
            src="https://i.imgur.com/DieShuq.jpeg"
            className="max-h-48 w-full object-cover"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <div className="badge text-orange-800 font-bold bg-orange-300 border-none ">
              <CiForkAndKnife /> Main Course
            </div>
          </div>
          <h2 className="card-title -mb-1">Nasi Goreng Spesial</h2>
          <p className="text-gray-500 text-justify">
            Nasi goreng dengan bumbu rahasia yang lezat dan menggugah selera
          </p>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <IoMdStopwatch size={15} />
              30 menit
            </div>

            <div className="flex items-center gap-1 text-gray-500">
              <BsPeopleFill size={15} />4 Porsi
            </div>

            <div className="badge badge-success">Easy</div>
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

export default ItemCard;
