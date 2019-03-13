import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";



class App extends Component {
  //Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score:0,
    message: "",
    shakeit: "false"
  };

  clickPicture = id => {
    //arrange the pictures randomly
    const shuffleArray = this.shuffleArray(cards);
    this.setState({cards:shuffleArray});
    //if clicked an image already clicked set this.state.score = 0
    if (this.state.clickedArray.includes(id)){
      this.setState({score: 0, clickedArray:[], message: "Sorry, start the game again!", shakeit: "true"});
    }  
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
      message: "Correct!",
        shakeit: "false"
      });
    }

    if(this.state.score === 14 ) {
      this.setState({
        topScore: this.state.score,
        clickedArray:[],
        message: "Congratulations, You Won the game! You can keep playing and adding to the top score",
        shakeit: "true"
      });}
    // set topscore = score if score > topscore.
    if(this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score});
    }
    // shake the wrapper if shakeit it set to true
    
  }

  shuffleArray = (picturesArray)=> {
    for (let i = picturesArray.length - 1; i > 0; i-- ){
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArray[i],picturesArray[j]] = [picturesArray[j],picturesArray[i]];
    }
    return picturesArray;
  }

  render() {
    return (
      <div className="App">
      <header className="App-header  sticky-top">
      <div className="text-center"><img src={logo} className = "App-logo" alt="logo"/>
     <h2 className="App-title">Welcome to React Clicky Game</h2>
     <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
     </div>
     
     
      </header>
      <div className="banner">
      <h3 className="App-intro">
      <strong className="instructions">Click on the image to earn points, but don't click it more than once!</strong>
      </h3>
      <h2 className="message"><strong> {this.state.message}</strong></h2>
      </div>
  <Wrapper
      shakeWrapper = {this.state.shakeit}
      pictures = {this.state.cards.map(picture => (
        <PictureCard
            clickPicture = {this.clickPicture}
            id = {picture.id}
            key = {picture.id} // to get rid of the unique key prop warning
            name = {picture.name}
            image = {picture.image}
            />
      ))}
  />
  <footer className="footer">
  <div className="container">
        <span className="text-muted">&copy; Rebeca Dodero - React App - Clicky Game</span>
  </div>
  </footer>
      </div>
    );
  }
}

export default App;
