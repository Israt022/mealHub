import React from 'react';

const MealCard = ({meal,addToCart}) => {
    // console.log(meal);
    return (
        <div className='bg-white shadow-2xl shadow-orange-500/30 p-4 hover:scale-105 transition-transform duration-300 flex flex-col h-full'>
            <div className='w-[100%] h-[100%]'>
                <img src={meal.strMealThumb} 
                    alt="" 
                    className='bg-cover rounded-2xl w-[90%] h-[60%] mx-auto'
                />
                <div className='flex items-center justify-between mx-auto'>
                    <h1 className='text-orange-400 p-5 pl-8 text-lg font-semibold'>{meal.strMeal}</h1>
                </div>
                <div className="flex gap-2 justify-between mx-8">
                    <span className="text-xs bg-orange-100 text-orange-600 border border-dashed px-4 py-1.5 rounded-full">
                         🍽️ {meal.strCategory}
                    </span>
                    <span className="text-xs bg-gray-100 border border-dashed  text-gray-600 px-4 py-1.5 rounded-full">
                        🌍 {meal.strArea}
                    </span>
                </div>
            </div>
            <button onClick={() => {
                addToCart(meal)
                // console.log(meal);
            }} className='btn bg-orange-500 shadow-md shadow-orange-500/20 border-none w-full rounded-full mb-2'>Add To Cart</button>
        </div>
    );
};

export default MealCard;