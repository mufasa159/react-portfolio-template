import React from 'react';
import volume from '../assets/images/volume.svg';

class Sound extends React.Component {
    render() {
        
        let audio = new Audio("../assets/audio.mp3")
      
        return (
            <div>
                <a onClick={ () => audio.play() }><img src={volume} className="resize" /></a>
                <p className="tiny pron">&nbsp; &nbsp;Pronunciation : /'moofa sool'/</p>
            </div>
        );

    }
}
export default Sound;