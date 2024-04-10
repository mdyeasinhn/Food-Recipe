import banner from "../../assets/Images/banner.png";
const Banner = () => {
  return (
    <div
      className="container mx-auto bg-cover w-full h-[600px] rounded-xl mt-12"
      style={{
        backgroundImage: `url(${banner}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center pt-28">
        <p className="text-white font-bold text-5xl">
          Discover an exceptional cooking <br /> class tailored for you!
        </p>
        <p className="text-white ">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br /> problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex justify-center gap-4 mt-10">
            <button className="btn bg-green-400 rounded-3xl text-black px-8 py-5">Explore now</button>
            <button className="btn text-white">Our Feedback</button>
        </div>
      </div>

  
      
    </div>
    
  );
};

export default Banner;
