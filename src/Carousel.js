import React, { Component } from 'react';
 
import HorizontalScroller from 'react-horizontal-scroll-container';
 
class Example extends Component {
  render() {
    return (
      <div>
        <HorizontalScroller>
          <div className="element">1</div>
          <div className="element">2</div>
          <div className="element">3</div>
          <div className="element">4</div>
          <div className="element">5</div>
          <div className="element">6</div>
          <div className="element">7</div>
          <div className="element">8</div>
        </HorizontalScroller>
      </div>
    );
  }
}