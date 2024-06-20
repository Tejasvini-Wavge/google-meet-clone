import React from 'react';
import './Main.css';
import Img1 from '../Main/Img/teju-Image.jpg';
import Img2 from '../Main/Img/46.jpg';
import Img3 from '../Main/Img/47.jpg';
import Img4 from '../Main/Img/48.jpg';
import Mic from '../Main/Img/mute.jpg';
import Mic1 from '../Main/Img/mic.jpg'   

const Main = () => {
    return (
        <main className="main">
            <div className="video-grid">
                {/* Example video tiles */}
                <div className="video-tile">
                <img className='mic' src={Mic} alt="" />
                <img className='student-photo img' src={Img1} alt="" />
                <h3 className='student-name'>Teju</h3>
                     </div>

                <div className="video-tile">
                <img className='mic' src={Mic1} alt="" />
                <img className='student-photo' src={Img2} alt="" />
                <h3 className='student-name'>LEENA</h3>

                     </div>
                     <div className="video-tile">
                     <img className='mic' src={Mic} alt="" />     
                <img className='student-photo' src={Img3} alt="" />
                <h3 className='student-name'>JON</h3>

                     </div>
                     <div className="video-tile">
                     <img className='mic' src={Mic} alt="" />
                <img className='student-photo' src={Img4} alt="" />
                <h3 className='student-name'>EMMA</h3>

                     </div>
            </div>
        </main>
    );
};

export default Main;