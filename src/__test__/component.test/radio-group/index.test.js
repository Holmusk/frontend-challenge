import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import '../../../setupTests';

import RadioCheckBox from '../../../component/radio-group';

describe('Radio and Checkbox Group Testing',()=>{
    const props = {
        radio : {
        key : 1,
        label: "radio1",
        value: "radio1",
        checkBoxes: [
            {
            key: 101,
            label: "checkbox1",
            isChecked: false
            },
            {
            key: 102,
            label: "checkbox2",
            isChecked: false
            }
        ]
    },
    name : "myRadio",
    selectedValue : "radio1",
    checkBoxHandler : ()=>console.log("Mock"),
    radioHandler : ()=>console.log("Mock"),
    index : 0
}
    const component = mount(<RadioCheckBox {...props}/>);
    
    it('test case for is component mounted',()=>{
        expect(component).toHaveLength(1);
    });

    it('test case for is radio button mounted',()=>{
        expect(component.find('input[type="radio"]')).toHaveLength(1);
    });

    it('test case for is radio-button checked',()=>{
        expect(component.find('input[type="radio"]').getDOMNode().checked).toEqual(true);
    });

    it('test case for is checkbox is enabled',()=>{
        expect(component.find('input[type="checkbox"]').at(0).getDOMNode().disabled).toEqual(false);
        expect(component.find('input[type="checkbox"]').at(1).getDOMNode().disabled).toEqual(false);
    })
    it('test case for is checkbox not checked',()=>{
        expect(component.find('input[type="checkbox"]').at(0).getDOMNode().checked).toEqual(false);
        expect(component.find('input[type="checkbox"]').at(1).getDOMNode().checked).toEqual(false);
    })
    it('test case for is checkbox checked',()=>{
        component.setProps({
            radio : {
                key : 1,
                label: "radio1",
                value: "radio1",
                checkBoxes: [
                    {
                    key: 101,
                    label: "checkbox1",
                    isChecked: true
                    },
                    {
                    key: 102,
                    label: "checkbox2",
                    isChecked: false
                    }
                ]
            },
            name : "myRadio",
            selectedValue : "radio1",
            checkBoxHandler : ()=>console.log("Mock"),
            radioHandler : ()=>console.log("Mock"),
            index : 0
        })
        expect(component.find('input[type="checkbox"]').at(0).getDOMNode().checked).toEqual(true);
        expect(component.find('input[type="checkbox"]').at(1).getDOMNode().checked).toEqual(false);
    })

})