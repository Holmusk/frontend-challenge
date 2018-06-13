import React, {Component} from 'react';
import RadioCheckBoxGroup from '../radio-group';

export default class RadioList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue : '',
        };
    }
    
    componentDidMount(){
        const { list : {selectedValue} } = this.props;
        this.setState({
            selectedValue : selectedValue,
        })
    }
    
    componentWillReceiveProps(nextProps) {
      const { list : {selectedValue} } = nextProps;
        this.setState({
            selectedValue : selectedValue,
        })
    }

    // this function is called on change of checkbox
    handleChange = (event,radioBtnId,checkBoxIndex) => {
        this.props.OnCheckboxChange(radioBtnId,checkBoxIndex);
    }

    // this function is called on change of radio button
    handleRadioBtnChange = (event) => {
        this.setState({
            selectedValue : event.target.value,
        });
        this.props.OnRadioChange(event.target.value); 
    }

    render(){
        const { list : {radios,radioGroupName} } = this.props;
        const { selectedValue } = this.state;
        return(
            radios && radios.length > 0?
            radios.map( ( radioBtn,radioBtnIndex) => {
                return (
                    <RadioCheckBoxGroup
                        key = {radioBtn.key}
                        radio = {radioBtn}
                        index = {radioBtnIndex}
                        name = {radioGroupName}
                        selectedValue = {selectedValue}
                        radioHandler = {this.handleRadioBtnChange}
                        checkBoxHandler = {this.handleChange}
                    />)
            })
           : 
            <h1>
               Opps!! Something went wrong!
            </h1>
        )
    }
}
