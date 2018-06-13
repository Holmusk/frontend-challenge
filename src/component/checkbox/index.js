import React, { Component } from 'react';

export default class Checkbox extends Component {
    render() {
        const { index,checkBox,radioBtnIndex, disabled } = this.props;
        return (
            <li key={index}>
                <input type="checkbox" 
                    disabled ={disabled}  
                    checked={checkBox.isChecked} 
                    onChange={(event) => this.props.handleChange(event,radioBtnIndex,index)} 
                />  
                {checkBox.label}
            </li>
        );
    }
}