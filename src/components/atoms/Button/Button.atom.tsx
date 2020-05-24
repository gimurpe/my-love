// ========================================================================================
/*                                                                                      *
 * ATOM: ENVELOPE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React from 'react'

// * Utils
import { gifs, images } from '@constants'

// * Styles
import './styles.scss'

// * Display/UI

const Button = () => {
   return (
      <div className="heart-button">
         <input id="click" type="checkbox" />
         <label>
            <div className="favourite">
               <div className="favourite_heart">
                  <div className="favourite_heart__left"></div>
                  <div className="favourite_heart__right"></div>
               </div>
               <div className="favourite_text">
                  <span>Feliz Cumpleaños</span>
               </div>
            </div>
         </label>
      </div>
   )
}

export default Button
