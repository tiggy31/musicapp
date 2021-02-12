import React, {useState} from 'react'
import Player from './components/Player'
import Song from './components/Song'
import './styles/app.scss'
import data from '../src/data'


function App() {
   const [songs, setSongs] = useState(data())


  return (
   <div>
     <Song />
     <Player />
   </div>
 
  );
}

export default App;
