import { Container } from '@mui/material';
import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/player.css';

function FancyPlayer()  {
    return(
        <div className='video_container'>
            <div>
                <h2>React Player</h2>
            </div>
            <Container maxWidth="md">
                <div className='player_wrapper'>
                    <ReactPlayer className="player" url='https://cdn.discordapp.com/attachments/687366919149322252/1104973197197189150/white_aussies_sick_of_abo_monsters.mp4' width="100%" height="100%" playing={true} muted={true} />
                </div>
                
            </Container>
        </div>
    )
}

export default FancyPlayer;

