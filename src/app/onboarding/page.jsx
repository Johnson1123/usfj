"use client";
import JoinOurTeam from "@/components/Join/JoinOurTeam";
import ContactInformation from "@/components/volunteers/ContactInformation";
import Details from "@/components/volunteers/Details";
import Interests from "@/components/volunteers/Interests";
import Image from "next/image";
import React, { useState } from "react";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formStep, setFormStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const nextformStep = () =>
    setFormStep((prev) => Math.min(prev + 1, totalSteps));
  const prevformStep = () => setFormStep((prev) => Math.max(prev - 1, 1));

  // Function to handle form submission when on the final step
  const handleSubmit = () => {
    // Add your submission logic here.
    console.log("Form submitted!");
  };

  // Each index corresponds to the step number.
  const stepTitles = [
    "Tell us about yourself",
    "What are your interests",
    "Emergency Contact Information",
  ];

  const renderStep = () => {
    switch (formStep) {
      case 1:
        return <Details />;
      case 2:
        return <Interests />;
      case 3:
        return <ContactInformation />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full h-screen relative">
      {/* Header */}
      <div className="w-full p-[20px] flex items-center justify-between absolute right-0 left-0">
        <Image
          src={"/images/USFJ-DARK-Logo.png"}
          height={60}
          width={193}
          alt="Logo"
        />
        <div>
          <h2 className="text-[14px]">
            Having trouble?{" "}
            <span className="text-[#142560] font-semibold">Get Help</span>
          </h2>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[412px] p-[20px] flex items-end h-screen bg-[#F6F6F6]">
          <div className="w-[316px] h-[350px] p-[25px] bg-white drop-shadow-sm rounded-t-[12px] rounded-r-[12px] flex flex-col gap-[50px]">
            <p className="text-[17px] font-semibold">
              We believe the Bible is inspired by the Holy Spirit of God and
              that it is God’s only infallible, authoritative Word. We believe
              there is one God, eternally existent in three persons: God the
              Father, Jesus Christ the Son, and the Holy Spirit.
            </p>
            <div>
              <h3 className="font-semibold text-[14px]">
                United Servants for Jesus
              </h3>
              <p className="text-[14px]">What we believe</p>
            </div>
          </div>
        </aside>

        {/* Onboarding Content */}
        <div className="w-full flex flex-col items-center justify-center">
          {step === 1 && (
            <div className="w-[700px] h-[610px]">
              <h1 className="text-[24px] font-semibold mb-3">
                What we believe
              </h1>
              <ul className="list-disc list-outside space-y-5 text-[#484848]">
                <li>
                  We believe the Bible is inspired by the Holy Spirit of God and
                  that it is God’s only infallible, authoritative Word. We
                  believe there is one God, eternally existent in three persons:
                  God the Father, Jesus Christ the Son, and the Holy Spirit.
                </li>
                <li>
                  We believe in the deity of our Lord Jesus Christ, in His
                  virgin birth, in His sinless life, in His miracles, in His
                  vicarious and atoning death through His shed blood, in His
                  bodily resurrection, in His ascension to the right hand of the
                  Father, in his current roles as intercessor and advocate, and
                  in His personal return in power and glory.
                </li>
                <li>
                  We believe that all people are sinful and separated from God
                  and need to be born again by the Spirit; that this
                  regeneration by the Holy Spirit is essential, and that this
                  salvation is received through faith in Jesus Christ as Savior
                  and Lord and not as a result of our good works.
                </li>
                <li>
                  We believe in the present ministry of the Holy Spirit by whose
                  indwelling the Christian is enabled to live a godly life and
                  empowers believers to perform good works.
                </li>
                <li>
                  We believe in the resurrection of life for those who are saved
                  by Jesus and of the resurrection of the lost unto damnation.
                </li>
                <li>
                  We believe in the spiritual unity of believers in our Lord
                  Jesus Christ. We are united in Faith as one body in Christ.
                </li>
              </ul>
            </div>
          )}

          {step === 2 && (
            <div className="w-[700px] h-[610px]">
              <JoinOurTeam />
            </div>
          )}

          {step === 3 && (
            <div className="w-[700px] h-[610px]">
              <div className="w-[410px] flex flex-col items-start">
                {/* Render only the current step title */}
                <h1 className="text-[24px] font-semibold text-[#202020] ">
                  Volunteer Details
                </h1>
                <h3 className="text-sm text-textColor mb-[20px] ">
                  {stepTitles[formStep - 1]}
                </h3>

                {/* Progress Bar with Circles */}
                <div className="relative flex items-center w-full">
                  <div className="absolute w-full h-1 bg-gray-200" />
                  <div
                    className="absolute h-2 bg-bgBlue"
                    style={{
                      width: `${((formStep - 1) / (totalSteps - 1)) * 100}%`,
                    }}
                  ></div>
                  {stepTitles.map((_, index) => (
                    <div
                      key={index}
                      className={`z-10 flex items-center justify-center w-[34px] h-[34px] rounded-full flex-shrink-0 ${
                        formStep > index + 1
                          ? "bg-bgBlue text-white"
                          : "bg-white border-2 border-gray-300 text-gray-500"
                      }`}
                      style={{ marginLeft: index === 0 ? 0 : "auto" }}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>

                {/* Render the current form step content */}
                <div className="mt-4 w-full">{renderStep()}</div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="w-[700px] mt-[100px] flex justify-between">
            <div className="flex w-full">
              <button
                className="w-[90px] h-[40px] text-sm border border-[#E8E8E8] rounded-full"
                onClick={() => {
                  if (step === 3 && formStep > 1) {
                    prevformStep();
                  } else if (step > 1) {
                    prevStep();
                  }
                }}
                disabled={step === 1}
              >
                Previous
              </button>
            </div>
            <div className="flex w-full justify-end">
              <button
                className="w-[90px] h-[40px] text-sm bg-[#142560] text-white rounded-full"
                onClick={() => {
                  if (step === 3) {
                    if (formStep < totalSteps) {
                      nextformStep();
                    } else {
                      // When on the last form step, trigger submission.
                      handleSubmit();
                    }
                  } else {
                    nextStep();
                  }
                }}
              >
                {step === 3 && formStep === totalSteps ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
