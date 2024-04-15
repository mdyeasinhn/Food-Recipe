import { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = () => {
    const [Items, setItems] = useState([]);

    useEffect(() =>{    
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setItems(data));

    }, []);


    return (
        <div className="md:w-2/3">
            <h1>Recipe name: {Items.length} </h1>
          
            {
                Items.map((item)  =>( <Item key={item.recipe_id}  item={item}></Item>))
            }
            
        </div>
        
    );
};

export default Items;