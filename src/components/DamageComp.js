import React, { Component } from 'react';


class DamageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {hakkarDamage:props.hakkarDamage,fatigueDamage:props.fatigueDamage,cardsDrawn:props.cardsDrawn}
  }

  componentWillReceiveProps(nextProps){
       if(nextProps.hakkarDamage !== this.state.hakkarDamage || nextProps.fatigueDamage !== this.state.fatigueDamage || nextProps.cardsDrawn != this.state.cardsDrawn ){
           this.setState({hakkarDamage:nextProps.hakkarDamage,fatigueDamage:nextProps.fatigueDamage,cardsDrawn:nextProps.cardsDrawn});
       }
   }

  render() {
    return (
      <div>
      <h2>Amount of Hakkar Damage</h2>
      <p>{this.state.hakkarDamage}</p>
      <h2>Amount of Fatigue Damage</h2>
      <p>{this.state.fatigueDamage}</p>
      <h2>Number of Total Cards Drawn</h2>
      <p>{this.state.cardsDrawn}</p>
      </div>
    )
  }



}

export default DamageComponent
