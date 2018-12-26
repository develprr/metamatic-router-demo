import React, {Component} from 'react';
import {connectToRouter, disconnectFromStores, redirectTo} from 'metamatic';

const classNames = require('classnames');

class NaviItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => connectToRouter(this, (path) => this.setState({path}));

  componentWillUnmount = () => disconnectFromStores(this);

  isActive = () => this.state.path === this.props.path;

  getStateClass = () => this.isActive() && 'active';

  onClick = () => redirectTo(this.props.path);

  render = () => (
    <div className={classNames('navi-item', this.getStateClass())} onClick={this.onClick}>
      <i className={'material-icons'}>{this.props.icon}</i>
    </div>
  );
}

export class NaviBar extends Component {

  render = () => (
    <div className={'navi-bar'}>
      <NaviItem path={'/language'} icon={'language'}>Language</NaviItem>
      <NaviItem path={'/vocabulary'} icon={'library_books'}>Vocabulary</NaviItem>
      <NaviItem path={'/exercises'} icon={'question_answer'}>Exercises</NaviItem>
    </div>)
}

