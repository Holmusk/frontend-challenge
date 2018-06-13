import React, { Component } from 'react';
import Checkbox from '../checkbox';

export default class RadioCheckBoxGroup extends Component {
    render() {
        const { radio : {value,label,checkBoxes},name,selectedValue,checkBoxHandler,radioHandler,index } = this.props;
        return (
            <li>
                <input type="radio" 
                    name={name}
                    value = {value} 
                    onChange={(event)=>radioHandler(event)} 
                    checked = {selectedValue === value} 
                />
                {label}
                <ul>
                {checkBoxes.map((checkBox , checkBoxindex)=>{
                    return(
                        <Checkbox
                            key = {checkBox.key}
                            index = {checkBoxindex}
                            disabled = {(selectedValue !== value)}
                            checkBox = {checkBox}
                            handleChange ={checkBoxHandler} 
                            radioBtnIndex = {index}
                        />
                        )
                    })
                }
                </ul>
            </li>
        );
    }
}