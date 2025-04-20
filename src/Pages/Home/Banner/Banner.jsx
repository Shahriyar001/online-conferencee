import bg from "../../../assets/bg.png";
import person from "../../../assets/placeholder.png";

const Banner = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="hero min-h-[1095px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Person Image */}
        {/* <div
          className="absolute z-10"
          style={{
            width: "832px",
            height: "1080px",
            left: "515.22px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={person}
            alt="Person"
            className="w-full h-full object-contain"
          />
        </div> */}
        {/* Person Image Container */}
        <div
          className="absolute z-10"
          style={{
            width: "832px",
            height: "1080px",
            left: "515.22px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {/* Image */}
          <img
            src={person}
            alt="Person"
            className="w-full h-full object-contain"
          />

          {/* Blur Overlay from 40% to bottom */}
          <div className="absolute bottom-[0%] left-0 w-full h-[40%] pointer-events-none">
            <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent blur-sm" />
          </div>
        </div>

        {/* Overlapping Text Content with top-[405px] */}
        <div className="absolute z-20 w-full left-0 top-[405px] px-4">
          <div className="max-w-[1332px] h-[577px] mx-auto rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Side */}
              <div className="space-y-4">
                <p className="text">Start Registration</p>
                <p className="text-4xl font-semibold">25 March 2025</p>
                <h1 className="text-6xl font-bold mt-68 ">
                  Join Ultimate <br /> Online Conference Experience
                </h1>
              </div>

              {/* Right Side */}
              <div>
                <button className="btn btn-primary text-xl mt-92">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
