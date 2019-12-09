import React from 'react';
import UIfx from 'uifx';
import pronounce from '../assets/images/pronounce.png';
import audio from '../assets/audio.mp3';

class Pronunciation extends React.Component {
    
    myfunction() {
        console.log("CLICKED");
    }

    render() {
        
        const beep = new UIfx({asset: audio});
      
        return (
            <div>
                <img src={pronounce} className="resize" onClick={beep.play} />
                <p className="tiny pron">&nbsp; &nbsp;Pronunciation : /'moofa sool'/</p>
            </div>
        );

    }
}
export default Pronunciation;