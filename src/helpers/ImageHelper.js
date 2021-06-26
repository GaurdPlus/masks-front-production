import React from 'react'
import disposable_mask2 from '../assests/disposable_mask2.png';
import valveMask from '../assests/n95_with_valve.png';
import noValveMask from '../assests/n95_without_valve.png';
import noImg from '../assests/No_Image_Available.jpg'

const ImageHelper = ({name}) => {
    if(name === '3-PLY DISPOSABLE FACE MASKS'){
        return <img className='width-100p' src={disposable_mask2} alt={name} />
    }

   else if(name === 'N-95 Cup Mask (With Valve)'){
        return <img className='width-100p' src={valveMask} alt={name} />
    }

    else if(name === 'N-95 Cup Mask'){
        return <img className='width-100p' src={noValveMask} alt={name} />
    }
    else{
        return <img className='width-100p' src={noImg} alt={name} />
    }
    
}

export default ImageHelper
