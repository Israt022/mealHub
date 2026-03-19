import { ShoppingBasket } from 'lucide-react';
import React from 'react';
import CartItems from './CartItems';

const Cart = ({cart,handleOrder}) => {
    // console.log(cart);
    return (
        <div className='bg-white h-fit shadow-lg shadow-orange-500/20 border-t-2 border-orange-500 rounded-lg p-3 '>
            <div className='flex justify-between flex-wrap items-center'>
                <h1 className='text-red-400 font-semibold text-xl '>Cart</h1>
                <ShoppingBasket className='text-orange-500' />
            </div>
            {
                cart.map(food => <CartItems food={food}></CartItems>)
            }
            <button onClick={handleOrder} className='btn bg-orange-500 border-none w-full mt-4'>Order</button>
        </div>
    );
};

export default Cart;