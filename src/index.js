import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer  from "./reducer/Reducer";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


const myMiddleware = function(store){
	return function(next){
		return function(action){
			
			console.log('Logged action ', action);

	        let result = next(action);
	  
	        return result;  
		}
	}
}


const store = createStore(reducer,applyMiddleware(myMiddleware));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
