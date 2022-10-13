
import ReactJkMusicPlayer from 'react-jinke-music-player'
import React, { useState, useEffect, } from 'react';
import { URLAPI , URLRADIO} from '../api/api_radio';

export default function PlayerMusic() {
  const [textsong, setTextsong] = useState('');
  const [audioList, setAudioList] = useState([]);
  useEffect(() => {
    CallApi();
    setInterval(() => { CallApi() }, 5000);
  }, []);

  function CallApi() {
    fetch(URLAPI)
      .then((response) => response.json())
      .then((data) => {
        setTextsong(data[0].now_playing.song.text)
      },
        (error) => {
          console.log(error);
        });
    setAudioList(
      [
        {
          name: 'Radio Liebre Jue',
          singer: '',
          duration: 600 ,
          cover:
            'https://i.ibb.co/LZ3JSfB/conejo-avatar.jpg',
          musicSrc:
            URLRADIO,
        }
      ]
    )

  }


  const options = {
    mode: "full",
    responsive: true,
    remove: false,
    autoHiddenCover: true,
    showPlayMode: false,
    showDownload: false,
    showReload: false,
    showMiniModeCover: false,
    remember: true,
    glassBg: true,
    renderAudioTitle(audioList) {
      return <a>{audioList.name} - {textsong}</a>
    }

  }
  return (
    <div className='text-white'>
      <ReactJkMusicPlayer
        className='float-none'
        {...options}
        audioLists={audioList}
        mobileMediaQuery="(max-width: 1024px)"
        showMediaSession

      />
    </div>
  )
}