import React from "react";
import Slider from './Slider';

import interior from '../../images/cafe interior.jpg'



export default function Hero(){
    return(
        <div style={{backgroundImage: `url('${interior}')`, height: '100vh'}}>
            <Slider/>
        </div>
    )
}
