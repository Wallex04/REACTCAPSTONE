import React from 'react'
// import Landing1 from '../assets/Images/Landing1.avif';
// import Landing2 from '../assets/Images/Landing2.avif'
// import LandingTwo from './LandingTwo';
// import landrew from './data';
import test from './test';
import CardTest from './CardTest';
// import LandingMap from './LandingMap';


const Hero = () => {
    
  function createCard(emojiTerm) {
    return (
      <CardTest
        key={emojiTerm.id}
        name={emojiTerm.name}
        img={emojiTerm.img}
        description={emojiTerm.description}
      />
    );
  }

  return (
    <div className=''>
        <div className='text-center group text-zinc-800'>
        <h1 className='text-6xl font-bold pt-10 pb-4'>Covener</h1>
        <h2 className='text-3xl text-blue-600 font-semibold pb-6'>......Redifining event management</h2>
        <button className='border-2 px-2 py-1 rounded-lg text-xl group-hover:bg-blue-600 border-black mb-14 group-hover:text-white'>Contact us</button>
        </div>
        {/* <LandingMap/> */}
        <div className="grid gap-4 grid-cols-3 px-10 pb-10">{test.map(createCard)}</div>
    </div>      
  )
}

export default Hero;