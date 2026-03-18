import React from 'react';

const NavLinks = ({items}) => {
    console.log(items);
    return (
        <div>
            <a href={items.path}
                className='flex gap-2 hover:border-b-2 hover:border-b-orange-500 transition-all duration-300'
            >
                <li
                    className='text-gray-600'
                >
                    {items.name}
                </li>
            </a>
        </div>
    );
};

export default NavLinks;