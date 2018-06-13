import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import '../../../setupTests';

import Home from '../../../containers/home/';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import homeReducer from '../../../redux/home/reducer/';

const defaultDataForSetState = {
    "radioGroupName" : "myradio",
    "selectedValue" : "radio2",
    "radios":[
    {
        "key" : 1,
        "label": "radio1",
        "value": "radio1",
        "checkBoxes": [
          {
            "key": 101,
            "label": "checkbox1",
            "isChecked": false
          },
          {
            "key": 102,
            "label": "checkbox2",
            "isChecked": false
          }
        ]
    },
    {
      "key" : 2,
      "label": "radio2",
      "value": "radio2",
      "checkBoxes": [
        {
          "key": 201,
          "label": "checkbox1",
          "isChecked": true
        },
        {
          "key": 202,
          "label": "checkbox2",
          "isChecked": false
        },
        {
          "key": 203,
          "label": "checkbox3",
          "isChecked": false
        }
      ]
    }
    ]
  };


  const jsonReturnFromAPI = {
    "radioGroupName" : "myradio",
    "selectedValue" : "radio2",
    "radios":[
    {
        "key" : 1,
        "label": "radio1",
        "value": "radio1",
        "checkBoxes": [
          {
            "key": 101,
            "label": "checkbox1",
            "isChecked": false
          },
          {
            "key": 102,
            "label": "checkbox2",
            "isChecked": false
          }
        ]
    },
    {
      "key" : 2,
      "label": "radio2",
      "value": "radio2",
      "checkBoxes": [
        {
          "key": 201,
          "label": "checkbox1",
          "isChecked": true
        },
        {
          "key": 202,
          "label": "checkbox2",
          "isChecked": false
        },
        {
          "key": 203,
          "label": "checkbox3",
          "isChecked": false
        }
      ]
    }
    ]
  };


describe('Home', () => {
    const store = createStore(combineReducers(
        {
            homeReducer : homeReducer
        }
    ));
    const container = mount(
        <Provider store = {store}>
            <Home/>
        </Provider>
    )
    it('1> Home Render',()=>{
        expect(container).toHaveLength(1);
    })
    
    it('Set State Action',()=>{
        container.find('input[type="radio"]').first().getDOMNode().checked = true;
        container.find('input[type="radio"]').first().simulate('change');
        
        container.find('input[type="checkbox"]').first().getDOMNode().checked = true;
        container.find('input[type="checkbox"]').first().simulate('click');

        expect(container.find('input[type="radio"]').first().getDOMNode().checked).toEqual(true);
        expect(container.find('input[type="checkbox"]').first().getDOMNode().checked).toEqual(true);

        container.find('input[type="text"]').first().getDOMNode().value = JSON.stringify(defaultDataForSetState);
        container.find('input[type="text"]').first().simulate('change');
        container.find('button[name="setState"]').simulate('click');
        
        expect(container.find('input[type="radio"]').first().getDOMNode().checked).toEqual(false);
        expect(container.find('input[type="checkbox"]').first().getDOMNode().checked).toEqual(false);
        expect(container.find('input[type="radio"]').at(1).getDOMNode().checked).toEqual(true);
    })

    it('Get API Data Action',()=>{    
        container.setState({
            radioData : jsonReturnFromAPI,
        })
        expect(container.find('input[type="radio"]').at(1).getDOMNode().checked).toEqual(true);
        expect(container.find('input[type="checkbox"]').at(2).getDOMNode().checked).toEqual(true);
    });

});