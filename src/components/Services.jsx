import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMusic, faWineGlassEmpty} from '@fortawesome/free-solid-svg-icons'
const Services = () => {
  return (
    <div>
       <div  className="text-center text-4xl font-bold py-4"><h1>OUR <span className='text-blue-600 '>SERVICES</span></h1>
       </div> 
        <div className='grid grid-cols-4 text-center px-10 gap-8 py-2'>
       <div className='border-2 rounded-lg hover:bg-orange-600 hover:text-white hover:mt-6 hover:rotate-12'>
        <FontAwesomeIcon className='px-4 py-4 my-2 bg-blue-600 rounded-full text-xl' icon={faLocationDot} beatFade />
        <h2 className='text-xl font-bold'>Venue Selection</h2>
        <p className='my-2 px-2'>We Understand The Importance Of Selecting The Right Venue For Your Event. We Strive To Create Unforgettable Experiences By Helping You Find A Venue That Perfectly Aligns With Your Vision And Meets All Your Needs.</p>
        </div>
       <div className='border-2 rounded-lg hover:bg-orange-600 hover:text-white hover:rotate-12'>
        <FontAwesomeIcon className='px-4 py-4 my-2 bg-blue-600 rounded-full text-xl' icon={faEnvelope} />
        <h2 className='text-xl font-bold'>Invitation card</h2>
        <p className='my-2 px-2'>Please Come And Share This Joyous Moment With Us As We Celebrate This Occasion. It Promises To Be An Evening Filled With Laughter, Love, And Cherished Memories.</p>
        </div>
       <div className='border-2 rounded-lg hover:bg-orange-600 hover:text-white hover:mt-6 hover:rotate-12'>
       <FontAwesomeIcon className='px-4 py-4 my-2 bg-blue-600 rounded-full text-xl' icon={faMusic} spin />
       <h2 className='text-xl font-bold'>Entertainment</h2>
       <p className='my-2 px-2'>We Believe That Entertainment Plays A Vital Role In Creating A Truly Remarkable Event Experience. We Specialize In Curating Top-Notch Entertainment Options That Captivate Your Guests And Leave A Lasting Impression.</p>
       </div>
       <div className='border-2 rounded-lg hover:bg-orange-600 hover:text-white hover:mt-6 hover:rotate-12'>
       <FontAwesomeIcon className='px-4 py-4 my-2 bg-blue-600 rounded-full text-xl' icon={faWineGlassEmpty} fade />
        <h2 className='text-xl font-bold'>Food and drinks</h2>
       <p className='my-2 px-2'>We Understand That Exceptional Food And Drinks Are Essential Elements Of A Memorable Event. We Take Pride In Offering Exquisite Culinary Experiences That Tantalize Taste Buds And Leave A Lasting Impression On Your Guests.</p>
       </div>
       </div>
    </div>
  )
}

export default Services