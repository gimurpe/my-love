// ========================================================================================
/*                                                                                      *
 * ATOM: ENVELOPE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React from 'react';

// * Styles

// * Display/UI
type Props = {
  message: string;
};

const Envelope = (props: Props) => {
  const { message } = props;
  return (
    <div className='design'>
      <div className='envelope'>
        <div className='cover'>
          <div className='bottom'> </div>
          <div className='left'></div>
          <div className='right'> </div>
          <div className='top'></div>
        </div>
        <div className='paper'>
          <div className='message'>{message}</div>
          <div className='heart' />
        </div>
      </div>
    </div>
  );
};

export default Envelope;
