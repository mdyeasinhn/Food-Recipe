import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Header from "./componentes/Header/Header";
import TitleDescrption from "./componentes/TitleDescrption/TitleDescrption";
import Item from "./componentes/Item/Item";

import { useEffect, useState } from "react";

function App() {
  const [proudcts, setProudcts] = useState([]);
  const [cart, setCart] = useState([]);



  useEffect(() =>{    
      fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setProudcts(data));

  }, []);

  const handleWantToCook =(p) =>{
    console.log(p)
   const isExist = cart?.find(item=>item.recipe_id == p.recipe_id );
   if(!isExist){
    setCart([...cart, p]);
   }
   else{
    alert('already in cart');

   }
  };


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <TitleDescrption></TitleDescrption>

     

      <div className="main-container  flex gap-5 container mx-auto h-[500px] ">
        <div className="cards-container grid grid-cols-2 gap-6 mt-14  space-y-2  w-2/3">
          {
            proudcts.map((pd, idx)=> <Item key={idx} pd={pd} handleWantToCook={handleWantToCook}></Item>)
          }
       
        </div>
        <div className="cart-container w-1/3 shadow-2xl rounded-lg h-full mt-14 ">
          <h1 className="text-center text-2xl font-semibold">Want to cook: </h1>
          <hr className="w-[300px]" />
          <div className="flex justify-around">
            <h1 className="text-xl text-[#878787] font-medium">Name</h1>
            <h1 className="text-xl text-[#878787] font-medium">Time</h1>
            <h1 className="text-xl text-[#878787] font-medium">Calories</h1>
          </div>

          <div>
            {cart.map((item, index) =>(
              <div className="flex justify-around ">

                <p>{index+1}</p> 
                <h1 className="text-base font-normal text-[#282828B2]">{item.recipe_name}</h1>
                <h1 className="text-base font-normal text-[#282828B2]"> {item.preparing_time}</h1>
                <h1 className="text-base font-normal text-[#282828B2]">{item.calories}</h1>


              </div>
              
              
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
