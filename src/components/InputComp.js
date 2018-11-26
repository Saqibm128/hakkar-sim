import React, { Component } from 'react';


class DeckInput extends Component {
  constructor(props) {
    super(props)
    this.player = props.player
    this.state = {
      "numNormCards": 16,
      "numBloodCards": 1,
      "currentFatigue": 0
    }
    this.setupDeck = this.setupDeck.bind(this)
  }

  setupDeck() {

  }

  render() {
    return (
      <div>
      <form>
      <label for="numNormCards">Number of Normal Cards for Player {this.player}</label>
      <input name="numNormCards" id={this.player + "numNormCards"}>{this.state.numNormCards}</input>
      <label for="numBloodCards"> Number of Corrupted Bloods for Player {this.player}</label>
      <input name="numBloodCards" id={this.player + "numBloodCards"}>{this.state.numBloodCards}</input>
      </form>
      </div>
    )
  }



}

export default DeckInput
