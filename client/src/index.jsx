import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/configureStore';
import refreshPage from './utils/refreshPage';

refreshPage(store);

const renderApp = (Root) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Root />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

renderApp(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./components/App/index.jsx', () => {
        renderApp(App);
    });
}