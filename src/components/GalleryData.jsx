import React from 'react'
import Gallery1 from '../assets/Images/FIVEdecorated-tables-wedding-restaurant_8353-9963.avif'
import Gallery2 from '../assets/Images/FOURbright-classy-wedding-table-serving_8353-10179.avif'
import Gallery3 from '../assets/Images/Landing7.avif'
import Gallery4 from '../assets/Images/Landing8.avif'
import Gallery5 from '../assets/Images/NINEdecorated-banquet-hall-with-flowers_8353-10058.avif'
import Gallery6 from '../assets/Images/TWOlarge-screen-table-with-flowers-it_916626-57.avif'
const GalleryData = () => {
    const Galleries = [
        {
            id : 1,
            title : 'photos and Events',
            image : Gallery1,
        },
        {
            id : 2,
            title : 'photos and Events',
            image : Gallery2, 
        },
        {
            id : 3,
            title : 'photos and Events',
            image : Gallery3, 
        },
        {
            id : 4,
            title : 'photos and Events',
            image : Gallery4, 
        },
        {
            id : 5,
            title : 'photos and Events',
            image : Gallery5,
        },
        {
            id : 6,
            title : 'photos and Events',
            image : Gallery6,
        },
    ]
  return (
    <div className='grid grid-cols-3 gap-6 text-center px-10'>
        {  
           Galleries.map((gallery)=> (
            <div className='h-82 border-[15px] border-gray-600 rounded-lg relative' key={gallery.id}>
                <h3 className='text-center bg-gray-600 pb-2 text-lg font-semibold text-white'>{gallery.title}</h3>
                <img className='h-52 w-full object-cover grayscale grayscale-0 hover:scale-100 hover:grayscale-0 hover:w-full' src={gallery.image} alt={gallery.title}/>
            </div>
            
           ))
            
        };
    </div>
  )
};

export default GalleryData;