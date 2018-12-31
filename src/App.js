import React, {Component} from 'react';
import {Header} from 'layout/header/Header';
import {LanguageView} from 'views/LanguageView';
import {VocabularyView} from 'views/VocabularyView';
import {ExerciseView} from 'views/ExerciseView';
import {connectToRouter, matchRoute} from '@metamatic.net/metamatic-router'

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    window.onpopstate = (event) => {
      console.log('Popstate event', event);
    }
  }

  componentDidMount = () => connectToRouter(this, () => this.setState({}));

  render = () => (
      <div className="meta-lang">
        {matchRoute('/', <Header/>)}
        {matchRoute('/language', <LanguageView/>)}
        {matchRoute('/vocabulary', <VocabularyView/>)}
        {matchRoute('/exercises', <ExerciseView/>)}
      </div>
  )
}
