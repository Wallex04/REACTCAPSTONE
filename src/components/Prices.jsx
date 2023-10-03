import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbtack} from '@fortawesome/free-solid-svg-icons'
const Prices = () => {
  return (
    <div>
        <h1 className="text-center text-3xl font-semibold">OUR<span className='text-orange-600'> PRICES</span></h1>
        <div>
            <div>
                <h3>for Birthdays</h3>
                <div>
                    <li><FontAwesomeIcon icon={faThumbtack} bounce size="sm" />Full Services</li>
                    <li><FontAwesomeIcon icon={faThumbtack} bounce size="sm" />Decorations</li>
                    <li><FontAwesomeIcon icon={faThumbtack} bounce size="sm" />Food and drinks</li>
                    <li><FontAwesomeIcon icon={faThumbtack} bounce size="sm" />Music And Photos</li>
                    <li><FontAwesomeIcon icon={faThumbtack} bounce size="sm" />Invitation card</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prices;