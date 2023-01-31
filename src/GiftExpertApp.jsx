import { useState } from "react";
import  {AddCategory} from './components'
import  {GifGrid} from './components'
/* import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid"; */

//import PropTypes from 'prop-types'

function GiftExpertApp(props) {
  const [categories, setCategories] = useState([
    "Made in Abyss",
    "Halo Infinite",
    "Demon Slayer",
  ]);

  const addCategory = (category) => {
    if(categories.includes(category)) return;
    setCategories([...categories, category]);
  };

  return (
    <div className="w-screen ">

      {/* titulo */}
      <div 
        className="flex justify-between items-center w-screen bg-gray-900 px-10 py-5"
      >
        <h1 className="text-white text-2xl font-semibold">GiftExpertApp</h1>
        {/* Input */}
        <AddCategory onNewCategory={addCategory} />
      </div>

      

   
      <div className="w-screen bg-gray-100 p-9 ">
        {
          categories.map((category) =>(
            <GifGrid key={category} category={category}/>
          ))
        }
      </div>
    </div>
  );
}

GiftExpertApp.propTypes = {};

export default GiftExpertApp;
