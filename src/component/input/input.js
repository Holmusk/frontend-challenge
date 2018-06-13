import React,{Component} from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // handle input field change
    handleChange(event) 
    { 
        this.props.getDatafromInput(event.target.value)
    }

    render(){
        return (
            <div className="input-container">
                <input type="text" name="inputBox" className="input" onChange={this.handleChange} value={this.props.inputData} />
            </div>
        )
    }
}
