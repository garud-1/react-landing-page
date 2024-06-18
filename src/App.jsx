import React from 'react';
import { useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
function App() {
    let heroData =[
        {text1:"Dive into",text2:"What you LOVE"},
        {text1:"Indulge",text2:"Your passion"},
        {text1:"Give into ",text2:"your passion"},
    ]
    const [heroCount,setHeroCount] = useState(1);
    const [playStatus,setPlayStatus] = useState(0);

    return (
        <div>
           <Background playStatus={playStatus} heroCount={heroCount}/>
           <Navbar/>
           <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}

           />
        </div>
    );
}

export default App;