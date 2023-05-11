import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/App.css';


function CentralPlayer() {
    var playUrl = "http://snergal.live:8088/hls/snerg.m3u8";
    const [isStreamLoaded, setIsStreamLoaded] = React.useState(false);
    const [isStreamFailed, setIsStreamFailed] = React.useState(false);

    const handleReady = () => {
        setIsStreamLoaded(true);
    }

    const handleError = () => {
        setIsStreamFailed(true);
    }


    
    return (
        <React.Fragment>
            <div className="central-player">
                
                {isStreamLoaded && !isStreamFailed ? <div></div> : <div className="loading">Loading...</div>}
                {isStreamFailed ? 
                <React.Fragment>
                    <img src="blink.gif" alt="Blinking Sergal" className="blink" />
                    <div className="loading">Stream failed to load. Please try again later.</div> 
                </React.Fragment>
                : <ReactPlayer className='react-player' url={playUrl} onReady={handleReady} onError={handleError} controls={true} playing={true} muted={true} />}
            </div>
        </React.Fragment>
    )
}

export default CentralPlayer;