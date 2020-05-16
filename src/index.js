import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './store/reducer'

const store = createStore(reducer)

const app = (
    <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
