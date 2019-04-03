import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Route} from "react-router";
import {BrowserRouter, Switch} from 'react-router-dom';

import NotFound from './components/NotFound';
// todo: create index export
import Characters from './containers/CharacterContainer';
import CharacterDetails from './containers/CharacterDetailsContainer';

// todo: create action folder
import {fetchCharacters} from "./constants/CharactersActions";
import store from './store/configureStore';

class App extends Component {
	render() {
		return <Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Characters}/>
					<Route path="/:id" component={CharacterDetails}/>
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		</Provider>
	}
}

export default App;
