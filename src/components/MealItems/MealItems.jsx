import React, { use, useState } from 'react';
import MealCard from './MealCard';
import MealSearch from './MealSearch';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const MealItems = ({mealPromise}) => {
    const mealData = use(mealPromise);
    // const meals = mealData.meals;
    const [cart,setCart] = useState([]);
    const [searchText,setSearchText] = useState("")
    const [displayedMeals, setDisplayedMeals] = useState(mealData.meals || []);
    
    const addToCart = (meal) => {
        setCart([...cart,meal]);
        // console.log(meal);
    }
    const handleOrder = () => {
        toast("Order Confirmed!🎉");
        setCart([]);
    }

    const fetchMeals = async() =>{
        try{
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            setDisplayedMeals(res.data.meals || [])
            // console.log(res.meals);
            console.log(res.data.meals);
            // console.log(res);
        }catch(err){
            console.log(err);
            setDisplayedMeals([]);
        }
    }

    return (
        <>
            <div className='w-11/12 mx-auto py-5'>
                <h2 className="text-3xl  text-orange-500 font-bold text-center pt-15 mb-8">
                    🍽️ Fresh Meals for You
                </h2>
                {/* search */}
                <div className='flex items-center '>

                    <MealSearch 
                        searchText={searchText}
                        setSearchText={setSearchText}
                        onSearch = {fetchMeals}
                    />
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-8 md:col-span-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mt-10'>
                            {
                                displayedMeals.map(meal => <MealCard key={meal.idMeal} meal={meal} addToCart={addToCart}></MealCard>)
                            }
                        </div>
                    </div>
                    <div className='col-span-4 md:col-span-2 mt-10 rounded-xl h-fit sticky top-18'>
                        {/* <h1>Cart</h1> */}
                        <Cart handleOrder={handleOrder} cart={cart}></Cart>
                         
                    </div>
                </div>
            </div>
        </>
    );
};

export default MealItems;