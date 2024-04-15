import iconCalories from '../../assets/Images/Calories.png'
import { CiClock2 } from "react-icons/ci";
const Item = ({ pd, handleWantToCook }) => {
  return (
    <div className="item shadow-2xl rounded-xl  border border-[#828282]  border-solid">
      <div className="card   rounded-lg p-12 ">
        <img
          className="w-[300px] rounded-lg"
          src={pd.recipe_image}
          alt=""
        />
        <h1 className="text-xl font-semibold">{pd.recipe_name}</h1>
        <p className="text-[#878787]">{pd.short_description}</p>
        <hr className="" />
        {/* ingredients */}
        <div>
          <h2 className="font-medium">Ingredients: {pd.ingredients.length}</h2>
          <ul className="space-y-2">
            <li className="text-[#878787]">{pd.ingredients[0]}</li>
            <li className="text-[#878787]">{pd.ingredients[1]}</li>
            <li className="text-[#878787]">{pd.ingredients[2]}</li>
            <li className="text-[#878787]">{pd.ingredients[3]}</li>
          </ul>
        </div>
        {/* time */}

        <div className="mb-4 flex justify-around">
          <div>
           
            <CiClock2 /> {pd.preparing_time}{" "}
          </div>
          <div className='flex justify-center items-center'>
            <img src={iconCalories} alt="" />
            {pd.calories}
          </div>
        </div>

        <div className="footer ">
          <button
            onClick={(e) => handleWantToCook(pd)}
            className="btn p-4 bg-[#0BE58A] rounded-xl"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
