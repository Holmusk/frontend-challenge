import React from 'react';
import {GETDATA,SETDATA,getData,setData} from '../../../redux/home/actions';

import homeReducer from '../../../redux/home/reducer/';


describe('Testing Reducer',()=>{
    it('test case for empty payload', () => {
        let state = {
            
        }
        let actionPayload = {
            type : '',
            payload : {}
        }
        expect(homeReducer({},actionPayload)).toEqual(state);
    });

    it('test case for wrong payload', () => {
        let state = {
            
        }
        let act = {
            type : GETDATA
        }
        expect(homeReducer({},act)).toEqual(state);
    });

    it('test case for right payload', () => {
        let state = {
            data : {

            }
        }
        let actionPayload = {
            type : SETDATA,
            payload : {}
        }
        expect(homeReducer({},actionPayload)).toEqual(state);
    });

 })