import React from 'react'

const CreateEventsModal = ({onClose}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="bg-white p-[40px] rounded-lg w-[600px] flex flex-col gap-4 shadow-lg relative">
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-[#222222] ">
            Create an Event
          </h1>
          <p className="text-[20px] text-[#222222]  ">
            This will be sent to the admin for approval
          </p>
        </div>

        <div className="w-full flex flex-col gap-[20px]">
          <div className="w-full h-auto px-[21px] py-[19px] border-[1.37px] border-[#EFEFEF] rounded flex justify-between items-center ">
            <div>
              <h4 className="text-[19px] font-semibold text-[#75838D] ">
                Cover Image for Event
              </h4>
              <p className="text-[#75838D]">Click to upload from your device</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEventsModal