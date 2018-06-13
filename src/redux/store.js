import { createStore } from 'redux';
import rootReducer from '../redux/reducers';


//create store, which is one for whole application
const store = createStore(rootReducer);

export default store;