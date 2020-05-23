// ========================================================================================
/*                                                                                      *
 * SCREEN: LOVE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React, { Component, createRef } from 'react';
import Parallax from 'parallax-js';

// * Styles
import './styles.scss';

// * Display/UI
import { Envelope } from '../../components/atoms';

class Love extends Component {
  scene: HTMLElement | null = {} as HTMLElement;
  parallaxInstance = createRef();
  componentDidMount = () => {
    this.scene = document.getElementById('love-scene');
    this.parallaxInstance = new Parallax(this.scene);
  };

  render = () => {
    return (
      <div className='love'>
        <Envelope message='Te Amo' />
        <div id='love-scene'></div>
      </div>
    );
  };
}

export default Love;
