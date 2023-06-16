import React, { Component } from 'react';

class SideClickArrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: 'left',
    };
  }

  onContextMenu = (event) => {
    event.preventDefault();

    let clientX = event.clientX;
    let clientY = event.clientY;

    let direction = 'left';

    if (clientX < window.innerWidth / 2) {
      direction = 'right';
    }

    this.setState({
      direction,
    });
  };

  render() {
    let arrow = (
      <span className={`arrow ${this.state.direction}`} />
    );

    return (
      <div>
        <span onContextMenu={this.onContextMenu}>Click here to side click</span>
        {arrow}
      </div>
    );
  }
}

export default SideClickArrow;