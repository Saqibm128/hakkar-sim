import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeckInput from './components/InputComp';
import DamageComponent from './components/DamageComp';


var styleObj = {
  "width": "200px"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    "playerA": {
      "player": "A",
      "numNormCards": 16,
      "numBloodCards": 1,
      "hakkarDamage":0,
      "fatigueDamage":0,
      "fatigueCounter": 0,
      "cardsDrawn":14,
      "pendingBloodCards": 0
    },

    "playerB": {
      "player": "B",
      "numNormCards": 16,
      "numBloodCards": 1,
      "hakkarDamage":0,
      "fatigueDamage":0,
      "cardsDrawn":14,
      "fatigueCounter": 0,
      "pendingBloodCards": 0
    }
  }
  this.drawCardAll = this.drawCardAll.bind(this)
  this.updatePlayer = this.updatePlayer.bind(this)
}

  updatePlayer(playerObj) {
    var isNormCard = false
    var fatigue = false
    playerObj.pendingBloodCards = 0 //reset here
    while (!isNormCard) {
      if (playerObj.numBloodCards <= 0 && playerObj.numNormCards <= 0) {
        isNormCard = true //hard exit
        fatigue = true
      }
      var chanceCorrupt = playerObj.numBloodCards / (playerObj.numBloodCards + playerObj.numNormCards)
      if (Math.random() <= chanceCorrupt) {
        playerObj.numBloodCards -= 1
        playerObj.pendingBloodCards += 2
      } else {
        if (playerObj.numNormCards == 0) {
          fatigue = true
          break
        }
        playerObj.numNormCards -= 1
        isNormCard = true
      }
      playerObj.cardsDrawn += 1
    }
    if (fatigue) {
      playerObj.fatigueCounter ++
      playerObj.fatigueDamage += playerObj.fatigueCounter
    }
    playerObj.numBloodCards += playerObj.pendingBloodCards
    playerObj.hakkarDamage += playerObj.pendingBloodCards

    return playerObj

  }

  drawCardAll() {
    console.log("drawing cards! believe in the heart of the cards Kripp!")
    this.setState((state, props) => {
      //player A
      state.playerA = this.updatePlayer(state.playerA)
      state.playerB = this.updatePlayer(state.playerB)
      console.log(state)
      return state
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is a simple simulation of Hakkar the Soulflayer
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://media-hearth.cursecdn.com/avatars/380/844/636783326877212674.png" style={styleObj} />
          <img src="https://media-hearth.cursecdn.com/avatars/380/832/636783269746724042.png" style={styleObj} />
          </a>
          <br></br>
          <div class="btn btn-primary" onClick={this.drawCardAll}>Draw card</div>
          <div class="row">
            <div class="col">
            <DeckInput player={this.state.playerA.player} numNormCards={this.state.playerA.numNormCards} numBloodCards={this.state.playerA.numBloodCards} numBloodDrawnNow={this.state.playerA.pendingBloodCards / 2}/>
          <DamageComponent hakkarDamage={this.state.playerA.hakkarDamage} fatigueDamage={this.state.playerA.fatigueDamage} cardsDrawn={this.state.playerA.cardsDrawn}/>
          </div>
          <div class="col">
          <DeckInput player={this.state.playerB.player} numNormCards={this.state.playerB.numNormCards} numBloodCards={this.state.playerB.numBloodCards} numBloodDrawnNow={this.state.playerB.pendingBloodCards / 2}/>
          <DamageComponent hakkarDamage={this.state.playerB.hakkarDamage} fatigueDamage={this.state.playerB.fatigueDamage} cardsDrawn={this.state.playerB.cardsDrawn}/>
          </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
