import React from 'react';
import CustomAudioPlayer from './components/CustomAudioPlayer';
import './App.css';

function App() {
  // URL de ejemplo de un archivo MP3 (puedes cambiar esta URL por la tuya)
  const audioUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";
  
  // Ejemplo alternativo con un archivo de prueba:
  // const audioUrl = "https://file-examples.com/storage/fe68c8b8a0a0b5b5b5b5b5b/2017/11/file_example_MP3_700KB.mp3";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reproductor de Audio Personalizado</h1>
        <CustomAudioPlayer audioUrl={audioUrl} />
      </header>
    </div>
  );
}

export default App;
