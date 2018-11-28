import React, { Component } from 'react';


class DeckInput extends Component {
  constructor(props) {
    super(props)

    this.state = {player: props.player,numNormCards:props.numNormCards,numBloodCards:props.numBloodCards, drewBloodCards:false, numBloodDrawnNow:0}
    this.setupDeck = this.setupDeck.bind(this)
    this.bloodColor = {"color": "#ff0000"}
  }

  componentWillReceiveProps(nextProps){
       if(nextProps.numNormCards !== this.state.numNormCards || nextProps.numBloodCards !== this.state.numBloodCards ){
           this.setState({player: nextProps.player,numNormCards:nextProps.numNormCards,numBloodCards:nextProps.numBloodCards,
             drewBloodCards:nextProps.numBloodCards !== this.state.numBloodCards,
             numBloodDrawnNow:nextProps.numBloodDrawnNow
           });
       }
   }

  setupDeck() {

  }

  render() {
    return (
      <div>
      {(this.state.numBloodDrawnNow != 0) ? <h1 style={this.bloodColor}>We drew {this.state.numBloodDrawnNow} Corrupted Bloods!</h1> : <br />}
      <h2>Number of Normal Cards for Player {this.state.player}</h2>
      <p>{this.state.numNormCards} </p>
      <h2> Number of Corrupted Bloods for Player {this.state.player}</h2>
      <p>{this.state.numBloodCards}</p>
      </div>
    )
  }



}

export default DeckInput
