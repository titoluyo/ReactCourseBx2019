import React, { useState } from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import GalleryContainer from './GalleryContainer';

function App() {
  const [ images, setImages ] = useState([]);
  //console.log('images');
  //console.log(images);
  const handleAdd = () => {
    let image = `https://picsum.photos/id/${images.length + 1}/400/300`;
    setImages([...images, image]);
    //console.log(images);
  }
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Typography>Mi Galeria</Typography>
        </Toolbar>
      </AppBar>
      <GalleryContainer images={images}/>
      <div style={{ position: 'fixed', right: 10, bottom: 10 }}>
        <Fab color="secondary" onClick={handleAdd}>
          <Add />
        </Fab>
      </div>
    </div>
  );
}

export default App;
