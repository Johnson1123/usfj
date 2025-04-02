import React from "react";

const ContactInformation = ({ termsAccepted, onTermsChange }) => {
  return (
    <div className="w-[410px]">
      <form className="flex flex-col gap-[30px] ">
        <div className="flex-1">
          <input
            type="text"
            name="firstName"
            className="w-full h-[48px] p-5 border rounded-full focus:outline-bgBlue"
            placeholder="First Name"
            required
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full h-[48px] p-5 border rounded-full focus:outline-bgBlue"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full h-[48px] p-5 border rounded-full focus:outline-bgBlue"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            name="relationship"
            placeholder="Relationship"
            className="w-full h-[48px] p-5 border rounded-full focus:outline-bgBlue"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="address2"
            placeholder="If yes, please briefly describe"
            className="w-full h-[48px] p-5 border rounded-full focus:outline-bgBlue"
          />
        </div>

        <div className="flex gap-4">
          <input
            type="checkbox"
            name="termsAccepted"
            className="w-[24px] h-[24px] accent-bgBlue"
            checked={termsAccepted}
            onChange={(e) => onTermsChange(e.target.checked)}
          />
          <p className="text-[10px] text-[#98A2B3]">
            By submitting this form, you agree to abide by the policies and
            guidelines of USFJ and acknowledge that your information will be
            used for internal purposes related to your involvement with our
            organization. We are excited to have you join us as we work together
            to make a lasting impact in our community, grounded in faith and
            committed to personal and spiritual growth. Once your registration
            form is submitted, a member of our team will reach out to you for
            the next steps.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;
