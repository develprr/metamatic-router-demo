import React, {Component} from 'react';
import {NaviBar} from 'layout/header/NaviBar';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
      <div className={"navigation-div"}>
        <h3>A Metamatic Router Demo</h3>
        <NaviBar/>
      </div>
  )

}
