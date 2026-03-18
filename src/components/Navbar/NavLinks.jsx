import React from 'react';

const NavLinks = ({items}) => {
    // console.log(items);
    return (
        <div>
            <li
                className='flex gap-2 hover:border-b-2 hover:border-b-orange-500 transition-all duration-300'
            >
                <a href={items.path}
                    className='text-gray-600'
                >
                    {items.name}
                </a>
            </li>
        </div>
    );
};

export default NavLinks;