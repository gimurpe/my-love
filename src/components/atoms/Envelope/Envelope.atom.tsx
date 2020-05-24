// ========================================================================================
/*                                                                                      *
 * ATOM: ENVELOPE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React, { ReactNode } from 'react'

// * Utils
import { gifs, images } from '@constants'

// * Styles
import './styles.scss'

// * Display/UI
type Props = {
   message: string
   children: ReactNode
   stamps: Array<ReactNode>
}

const Envelope = (props: Props) => {
   const { message, stamps } = props
   return (
      <div className="flip-envelope">
         <div className="design">
            <div className="envelope">
               <div className="cover">
                  <div className="bottom"> </div>
                  <div className="left"></div>
                  <div className="right"> </div>
                  <div className="top"></div>
               </div>
               {/* <div className="paper">
                  <div className="message">{message}</div>
                  {props.children}
               </div> */}
            </div>
            <div className="envelope-back">{stamps}</div>
         </div>
      </div>
   )
}

export default Envelope
