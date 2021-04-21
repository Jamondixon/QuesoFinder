// import  Carousel  from './Carousel'
import { Component } from 'react';
import './App.css';
import Favorites from './Favorites';
import Logo from './Logo';


import QuesoContainer from './QuesoContainer';
const baseURL = 'http://localhost:3000/quesos/';

class App extends Component {

  state = {
    quesos: [],
    favorites: []
  }

  componentDidMount(){
    fetch(baseURL)
      .then(response => response.json())
      .then(quesos => this.setState({ quesos }))
      
  }

  addFavorites = (clickedFavorite) => {
    if(!this.state.favorites.find(favorite => clickedFavorite.id === favorite.id)){
      this.setState({
        favorites: [...this.state.favorites, clickedFavorite]
      })
    }
  }
  
  render() {
    return ( 
      <>
      {/* <div className='carousel-container'>
        <Carousel />
      </div> */}
        <div className='logo-container'>
          <Logo />
        </div>
        <div className="plate-container">
          <Favorites favorites={this.state.favorites} />
        </div>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3">
              <QuesoContainer quesos={this.state.quesos} clickAction={this.addFavorites}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
