import React , { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      }
    },
    move: {
      speed: 15,
    },
    size: {
      value: 3,
    }
  }
}

const app = new Clarifai.App({
 apiKey: 'c63b1f897fdd45e48664cab4ae093598'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b", 
        "https://samples.clarifai.com/face-det.jpg")
    .then(
      function(response) {
      console.log('worked', response)
    // do something with responseconsole.log(response);
      },
      function(err) {
      console.log('failed', err)
    // there was an error
      }
    ); 
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation /> 
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />    
      </div>
    );
  }
}

export default App;
