import {SETDATA} from './actions'; 
import jsonFromFile from '../../data.json';

export default (state = { data : jsonFromFile },action) => {
    switch (action.type) { 
        case SETDATA: 
        return { ...state, 
            data: action.payload 
        }; 
        default: 
        return state; 
    } 
}