import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectApp from './container/ConnectApp';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectApp />
    </Provider>,document.getElementById('root'));

// const render = () => {
//     ReactDOM.render(
//         <App 
//             store={store.getState()}
//             dispatch={(action) => store.dispatch(action)}
//         />
//         , document.getElementById('root'));
// }

// render();
// store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
