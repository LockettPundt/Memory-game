import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {
  constructor(props) {
    super(props); 
    this.state = { isFlipped: false, };
  }
  
  clickHandler = () => {
    this.setState({isFlipped: !this.state.isFlipped})
  }
  
  render() {
    let MemoryCardInnerClass;
    this.state.isFlipped === true ? MemoryCardInnerClass = "MemoryCardInner flipped" : MemoryCardInnerClass = "MemoryCardInner";
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={MemoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img 
            src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' 
            alt='digital crafts logo' 
            />
          </div>
          <div className="MemoryCardFront">
            ∆
          </div>
        </div>
      </div>
    );
  };
}

export default MemoryCard;