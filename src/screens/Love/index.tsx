// ========================================================================================
/*                                                                                      *
 * SCREEN: LOVE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React, { Component, createRef } from 'react'
import Parallax from 'parallax-js'

// * Utils
import { gifs, images } from '@constants'
// * Styles
import './styles.scss'

// * Display/UI
import { Envelope, Button } from '@atoms'
import video from './butterfly.webm'

class Love extends Component {
   scene: HTMLElement | null = {} as HTMLElement
   parallaxInstance = createRef()
   componentDidMount = () => {
      this.scene = document.getElementById('love-scene')
      this.parallaxInstance = new Parallax(this.scene)
   }

   getStampsList = () => [
      <img className="love__nori-stamp" src={gifs.NORI_STAMP} />,
      <img className="love__heart-stamp" src={images.HEART_STAMP} />,
   ]

   render = () => {
      return (
         <div className="love">
            <video
               className="love__background"
               muted={true}
               autoPlay
               playsInline
               loop
               id="myVideo"
            >
               <source src={video} type="video/webm" />
               Sorry, your browser doesn't support embedded videos.
            </video>
            <div className="love__envelop-container">
               <Envelope stamps={this.getStampsList()} message="Te Amo">
                  <div className="heart" />
                  <img
                     className="love__balloons-couple"
                     src={gifs.BALLOON_COUPLE}
                  />
               </Envelope>
            </div>
            <div className="love__heart-button">
               <Button />
            </div>
            {/* <div className="love__nori" /> */}
            {/* <div className="love__panki" /> */}
            <div id="love-scene"></div>
         </div>
      )
   }
}

export default Love
