import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard';
import './App.css';

const generateDeck = () => {
    const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`];
    let i = 0;
    let deck = [];
    while (i < 16) {
      deck.push({isFlipped: false, symbol: symbols[i % 8]});
      i++;
    }
    shuffle(deck);
    return deck;
}

const shuffle = deck => {
  let j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    return deck;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    }
  }
  
  pickCard = (cardIndex) => {
    
    if (!!this.state.deck[cardIndex].isFlipped) {
      console.log("already flipped"); 
      return;
    }
    let cardToFlip = {...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    console.log(newPickedCards.length)
    if (newPickedCards.length === 2) {
      const cardIndex1 = newPickedCards[0];
      const cardIndex2 = newPickedCards[1];
      console.log("this is index 0:", cardIndex1)
      console.log("this is index 1:", cardIndex2)
      console.log("This is new picked cards: ", [...newPickedCards])
      if (newDeck[cardIndex1].symbol !== newDeck[cardIndex2].symbol) {
        console.log("This is new picked cards: ", [...newPickedCards])
        setTimeout(this.unFlipCards.bind(this, cardIndex1, cardIndex2), 1000);
      }
    newPickedCards = [];
      
    }
    console.log("this is the new DEck", newDeck)
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards,
    })
  }
  
  unFlipCards = (index1, index2) => {
    console.log(index2);
    
    console.log("hi, this is the unflipping of cards.")
    const card1 = {...this.state.deck[index1]};
    const card2 = {...this.state.deck[index2]};
    console.log("card 1:", card1);
    console.log("card 2:", card2);
    let newDeck = this.state.deck.map((card, index) => {
      if (index1 === index || index2 === index) {
        card.isFlipped = false;
        return card;
      }
      return card;
    });
    console.log("newdeck:",newDeck);
    this.setState({
      deck: newDeck,
    })
  }
  
  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
                symbol={card.symbol}
                pickCard={this.pickCard.bind(this, index)}
                isFlipped={card.isFlipped}
                key={index}
              />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3 className='subtitle'>Match Cards To Win</h3>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
        
        
      </div>
    );
  }
}

export default App;
