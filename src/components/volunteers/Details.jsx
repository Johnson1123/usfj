import React from "react";

const Details = () => {
  return (
    <div className="w-[410px]">
      <form className="flex flex-col gap-[30px] ">
        <div className="flex-1">
          <input
            type="text"
            name="firstName"
            className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
            placeholder="First Name"
            required
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
            required
          />
        </div>

        <div className="flex gap-4  ">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
              required
            />
          </div>
          <div className="w-32">
            <input
              type="text"
              name="state"
              placeholder="State"
              className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
              required
            />
          </div>
          <div className="w-24">
            <input
              type="text"
              name="zip"
              placeholder="Zip"
              className="w-full h-[48px] p-5  border rounded-full focus:outline-bgBlue"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
