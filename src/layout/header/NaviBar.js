import React, {Component} from 'react';
import {connectToRouter, disconnectFromStores, updateUrl} from 'metamatic';

const classNames = require('classnames');

class NaviItem extends Component {

  componentDidMount = () => connectToRouter(this, (url) => this.setState({url}));

  componentWillUnmount = () => disconnectFromStores(this);

  isActive = () => (this.state || {}).url === this.props.path;

  getStateClass = () => this.isActive() && 'active';

  onClick = () => updateUrl(this.props.path);

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
    </div>
  )

}

