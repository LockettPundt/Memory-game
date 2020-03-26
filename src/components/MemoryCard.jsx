import React, { Component } from 'react';
import './MemoryCard.css'


class MemoryCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let MemoryCardInnerClass;
    // console.log(this.props)
    this.props.isFlipped === true ? MemoryCardInnerClass = "MemoryCardInner flipped" : MemoryCardInnerClass = "MemoryCardInner";
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={MemoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img 
            src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' 
            alt='digital crafts logo' 
            />
          </div>
          <div className="MemoryCardFront">
            {this.props.symbol}
          </div>
        </div>
      </div>
    );
  };
}

export default MemoryCard;