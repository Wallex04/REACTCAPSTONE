import React from 'react'
import AboutImage from '../assets/Images/Landing7.avif'
const AboutUs = () => {
  return (
    <div>
            <h1 className='text-center text-4xl font-semibold pt-10 pb-6'><span className='text-blue-600'>ABOUT</span> US</h1>
            <div className='grid grid-cols-2 place-items-center px-10 gap-8'>
            <div >
                <img className='border-[10px] border-gray-600 rounded-3xl hover:p-8' src={AboutImage}alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-semibold'>We Tailor your event just the way you want it</h1>
                <p className='text-xl mt-4 mb-4'>We Are Passionate About Creating Extraordinary Experiences That Leave A Lasting Impression. With Years Of Expertise In Event Planning And A Dedicated Team Of Professionals, We Specialize In Bringing Your Vision To Life And Surpassing Your Expectations.We Believe That Every Event Is Unique And Deserves A Personalized Touch.</p>
                <button>Contact us</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs