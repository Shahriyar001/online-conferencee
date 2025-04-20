import React from "react";

const Pricing = () => {
  return (
    <div className="bg-white h-[700px] max-w-[1326px]  mx-auto">
      <div className="card lg:card-side lg:flex-row-reverse  py-20 border-none rounded-nonde text-black">
        <div className="w-6/10 flex">
          {/* cards  */}
          <div className="card w-[370px] h-[545px] bg-white text-black">
            <div className="card-body text-center">
              <div className="mt-10 mb-5">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-5xl font-bold my-8">$99</span>
                <p>1 Visitor</p>
              </div>
              <ul className="mt-6 flex flex-col text-start ml-8 gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">
                    Access to all keynote sessions{" "}
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">Entry to exhibition area </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">No access to workshops </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">No networking lounge access</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary text-xl rounded-none py-6 px-8 text-white">
                  Get Ticket Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[370px] h-[545px] bg-blue-500 text-white">
            <div className="card-body text-center">
              <div className="mt-10 mb-5">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-5xl font-bold my-8">$99</span>
                <p>1 Visitor</p>
              </div>
              <ul className="mt-6 flex flex-col text-start ml-8 gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">
                    Access to all keynote sessions{" "}
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">Entry to exhibition area </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">No access to workshops </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">No networking lounge access</span>
                </li>
              </ul>

              <div className="mt-6">
                <button className="btn btn-primary text-xl rounded-none py-6 px-8 bg-white text-black">
                  Get Ticket Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body w-4/10">
          <div className="mx-auto w-[308px]">
            <h2 className="card-title text-5xl mb-5">PRICING</h2>
            <p>
              Join leading educators, researchers, and policymakers in a global
              dialogue on the future of learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
