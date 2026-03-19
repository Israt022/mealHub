import { ShoppingBasket } from 'lucide-react';
import React from 'react';

const CartItems = ({food}) => {
    // console.log(food);
    return (
        <div>
            
            <div className='flex flex-wrap gap-2 items-center mt-2'>
                <img src={food.strMealThumb} className='w-10 rounded-full' alt="" />
                <h1 className='text-black font-semibold'>{food.strMeal}</h1>
            </div>
            <hr className='border-orange-500/50 mt-2' />
        </div>
    );
};

export default CartItems;