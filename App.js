import './App.css';
import './Gallery.css';
import React, { useState, useEffect } from "react"


const data = require('./data.json');

const Display = ({ num }) => {
  return (

    <div className="Gallery-display">
      <img src={data[num].urls.regular}></img>
      <p>{data[num].alt_description}</p>
    </div>
  )

}

const Gallery = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const isCurrentFavorite = (favorites.indexOf(currentImg) > -1);

  return (
    <div className="Gallery">

      <Display num={currentImg} />
      <div className='Interact'>
      {(currentImg > 0) &&  <button  className='Previous-button'  onClick={() => setCurrentImg(currentImg - 1)}> Előző </button>}

      <button className={`Favorite-button ${isCurrentFavorite && 'favorite'}`} onClick={() => {isCurrentFavorite ? setFavorites(prevState => prevState.splice(favorites.indexOf(currentImg), 1)) : setFavorites([...favorites, currentImg])}}>Kedvenc</button>
    
      {(currentImg < data.length-1) &&  <button className='Next-button'  onClick={() => setCurrentImg(currentImg + 1)}> Következő </button>}
      </div>
      <div className="Favorites">
          { favorites.map((favorite) => (
           <a className="Favorite-item" onClick={() => setCurrentImg(favorite)}>{data[favorite]["id"]+"_"+data[favorite]["alt_description"]}</a>
          ))}
      </div>
    </div>

  );
}

const App = () => {

  return (

    <div className="App">
      <header className="App-header">
        <div>
          <h1>Galéria</h1>
          <Gallery />
        </div>
      </header>
    </div>
  );
}

export default App;
