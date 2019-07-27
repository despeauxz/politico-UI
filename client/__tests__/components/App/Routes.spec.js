import React from 'react';
import Routes from '@components/App/Routes';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import auth from '@reducers/auth';

describe('Routes', () => {
    let store, history;

    beforeEach(() => {
        store = createStore(combineReducers({
            router: routerReducer,
            auth
        }));

        history = createMemoryHistory();
    });

    it('should render welcomepage', () => {
        const comp = 
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Routes dispatch={jest.fn()} />
                    </Switch>
                </BrowserRouter>
            </Provider>;

        const wrapper = mount(comp);
  
        expect(wrapper.find('Welcome')).toBeTruthy();
    });

    it('should render login page', () => {
        const comp = 
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                      <Routes dispatch={jest.fn()} />
                  </Switch>
              </BrowserRouter>
          </Provider>;
        const wrapper = mount(comp);
        history.push('/auth/login');

        expect(wrapper.find('Auth')).toBeTruthy();
    });

    it('should render signup page', () => {
        const comp = 
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Routes dispatch={jest.fn()} />
                </Switch>
            </BrowserRouter>
        </Provider>;
        const wrapper = mount(comp);
        history.push('/auth/signup');

        expect(wrapper.find('Auth')).toBeTruthy();
    });

    it('should render parties page', () => {
        const comp = 
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Routes dispatch={jest.fn()} />
                </Switch>
            </BrowserRouter>
        </Provider>;
        const wrapper = mount(comp);
        history.push('/parties');

        expect(wrapper.find('Parties')).toBeTruthy();
    });

    it('should render not found page', () => {
        const comp = 
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Routes dispatch={jest.fn()} />
                </Switch>
            </BrowserRouter>
        </Provider>;
        const wrapper = mount(comp);
        history.push('/not-found');

        expect(wrapper.find('NotFound')).toBeTruthy();
    });
  

    it('should render the Routes component correctly', () => {
        const shallowWrapper = shallow(<Routes />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
    });
});