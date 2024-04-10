import icon from '../../assets/Images/profile_icon.png'
const Header = () => {
  return (
    // header
    <div className=" container mx-auto flex  justify-around">
      <div>
        <h1 className="text-3xl text-[#150B2B]">Recipe Calories</h1>
      </div>
      <div className="flex gap-2 mt-2">
        <p className="btn text-[#150B2BB2] bg-gray-200 rounded-xl ">Home</p>
        <p className="btn text-[#150B2BB2] bg-gray-200 rounded-xl ">Recipes</p>
        <p className="btn text-[#150B2BB2] bg-gray-200 rounded-xl ">About</p>
        <p className="btn text-[#150B2BB2] bg-gray-200 rounded-xl ">Search</p>
      </div>
      <div className='flex gap-2'>
        <input
          type="text"
          placeholder="Search"
          className="input   bg-gray-100 mt-4 w-[200px] h-[40px] rounded-xl"/>

          <p className='bg-[#0BE58A] w-10 h-10 rounded-full mt-4'>
            <img className='p-2 ' src={icon} alt="" />
          </p>
      </div>
    </div>
  );
};

export default Header;
