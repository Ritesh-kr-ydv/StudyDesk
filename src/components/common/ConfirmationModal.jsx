import React from "react";
import IconBtn from "./IconBtn";

const ConfirmationModal = ({ modalData }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-50 z-50 ">
      <div className="bg-richblack-800 p-8 rounded-md shadow-lg text-center w-96 h-60 border border-blue-400  ">
        <p className="text-xl font-bold text-white mt-4">{modalData.text1}</p>
        <p className="text-md font-semibold text-gray-400 mt-3">{modalData.text2}</p>
        <div className="flex gap-4 justify-center mt-6">
          <IconBtn
            onClick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            onClick={modalData?.btn2Handler}
            className="px-5 py-2 bg-red-600  text-black bg-richblack-25 font-semibold rounded-md hover:bg-red-700 transition"
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
