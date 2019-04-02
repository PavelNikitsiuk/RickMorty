import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Route} from "react-router";
import {BrowserRouter, Switch} from 'react-router-dom';

import configureStore from './store/configureStore';

import NotFound from './components/NotFound';
import Characters from './containers/CharacterContainer';
import CharacterDetails from './components/CharacterDetails';

const store = configureStore();

class App extends Component {
	render() {
		return <Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Characters}/>
					<Route path="/character/:id" component={CharacterDetails}/>
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		</Provider>
	}
}

export default App;
