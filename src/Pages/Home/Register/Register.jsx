import React from "react";
import register from "../../../assets/register.png";

const Register = () => {
  return (
    <div className="hero w-[1326px] bg-white mx-auto min-h-[800px] py-20">
      <div className="hero-content flex-col lg:flex-row">
        {/* image section  */}
        <div className="w-1/2 left-0 max-w-[620px]">
          <img src={register} alt="" className="w-[570px] mb-5" />
        </div>
        <div className="w-1/2 text-gray-700 ml-10">
          <div
            tabIndex={0}
            className="collapse collapse-arrow shadow-sm max-w-[727px]"
          >
            <div className="collapse-title  font-semibold text-2xl">
              1. How can I register for an event?
            </div>
            <div className="collapse-content  text-sm">
              You can register online by visiting our event page, selecting your
              preferred event, and completing the registration form. You’ll
              receive a confirmation email with event details after successful
              registration. You can register online by visiting our event page,
              selecting your preferred event.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow  shadow-sm max-w-[727px]"
          >
            <div className="collapse-title font-semibold text-2xl">
              2. Are tickets refundable if I can’t attend?
            </div>
            <div className="collapse-content text-sm">
              You can register online by visiting our event page, selecting your
              preferred event, and completing the registration form. You’ll
              receive a confirmation email with event details after successful
              registration. You can register online by visiting our event page,
              selecting your preferred event.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow  shadow-sm max-w-[727px]"
          >
            <div className="collapse-title font-semibold text-2xl">
              3. Will there be networking opportunities?
            </div>
            <div className="collapse-content text-sm">
              You can register online by visiting our event page, selecting your
              preferred event, and completing the registration form. You’ll
              receive a confirmation email with event details after successful
              registration. You can register online by visiting our event page,
              selecting your preferred event.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow  shadow-sm max-w-[727px]"
          >
            <div className="collapse-title font-semibold text-2xl">
              4. Do you offer virtual or hybrid event options?
            </div>
            <div className="collapse-content text-sm">
              You can register online by visiting our event page, selecting your
              preferred event, and completing the registration form. You’ll
              receive a confirmation email with event details after successful
              registration. You can register online by visiting our event page,
              selecting your preferred event.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow  shadow-sm max-w-[727px]"
          >
            <div className="collapse-title font-semibold text-2xl">
              5. Can I become a speaker at one of your events?
            </div>
            <div className="collapse-content text-sm">
              You can register online by visiting our event page, selecting your
              preferred event, and completing the registration form. You’ll
              receive a confirmation email with event details after successful
              registration. You can register online by visiting our event page,
              selecting your preferred event.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow  shadow-sm max-w-[727px]"
          >
            <div className="collapse-title font-semibold text-2xl">
              6. Is there a dress code for the events?
            </div>
            <div className="collapse-content text-sm">
              You can register online by visiting our event page, selecting your
              preferred event, and completing the registration form. You’ll
              receive a confirmation email with event details after successful
              registration. You can register online by visiting our event page,
              selecting your preferred event.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
