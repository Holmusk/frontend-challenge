import React , {Component} from 'react';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import RadioList from '../../component/radio-list/radio-list';
import Modal from 'react-modal';
import Input from '../../component/input/input'
import { setData }  from '../../redux/home/actions';
import getJsonData from '../../utility';
import getRadioData from '../../redux/home/api'

class HomeContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            radioData : [],
            copied: false,
            modalIsOpen: false,
            inputData : ""
        }
        this.closeModal = this.closeModal.bind(this);
    }

    //get data from API
    getDataFromServer = () => {
        const that = this;
        const data = getRadioData().then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            that.setState({
                radioData: myJson
            });
        });
    }
    
    //this function is call after click on set state button
    updateState = () => {
       const jsonData = getJsonData(this.state.inputData);
       if(jsonData){
            this.setState({
                radioData : jsonData,
                copied: false,
                inputData : ""
            });
       }else{
            this.setState({
                modalIsOpen: true,
                inputData : ""
            });
       }
    }

    //used to close modal
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    // used this function to update checkbox state
    updateCheckboxState = (radioBtnIndex,checkBoxIndex) => {
        let tempRadioList = [];
        tempRadioList = this.state.radioData;
        tempRadioList["radios"][radioBtnIndex]["checkBoxes"][checkBoxIndex]["isChecked"] = !tempRadioList["radios"][radioBtnIndex]["checkBoxes"][checkBoxIndex]["isChecked"]
        this.setState({
            radioData : tempRadioList
        });
    }

    // used this function to update radio button state
    updateRadioButtonState = (selectedvalue) => {
        let tempRadioList = [];
        tempRadioList = this.state.radioData;
        tempRadioList["selectedValue"] = selectedvalue
        this.setState({
            radioData : tempRadioList
        });
    }

    //Update input field value
    updateInputValue = (data) => {
        this.setState({
            inputData: data
        });
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data != this.state.radioData){
            this.setState({
                radioData : nextProps.data
            })
        }
    }

    componentDidMount(){
        this.setState({
            radioData : this.props.data
        })
    }

    //call when we click on copy to clipboard 
    onCopyChange = ()=>{
        this.setState({copied: true})
    }

    render(){
        return (
            <div className="container">
                <div className="controll-section">
                
                    <Input getDatafromInput={this.updateInputValue} inputData={this.state.inputData}/>

                    <button name = "setState" onClick={this.updateState}>set state</button>

                    <CopyToClipboard className="copy-to-clipboard" text={JSON.stringify(this.state.radioData)}
                        onCopy={this.onCopyChange}>
                        <span>save state</span>
                    </CopyToClipboard>

                    {this.state.copied ? <span className="copied-color">Copied.</span> : null}

                    <button name="getApiData" onClick={this.getDataFromServer}>get data</button>
                </div>

                <div className="list-section">
                        <RadioList list={this.state.radioData} OnCheckboxChange={this.updateCheckboxState} OnRadioChange={this.updateRadioButtonState}/>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    ariaHideApp={false}
                    >
                    <h2>Please enter valid JSON</h2>
                    <button onClick={this.closeModal}>close</button>
                    </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data : state.homeReducer.data
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setData : (payload) => {
            dispatch(setData(payload))
        }
    })
}

//used to style popup
const customStyles = {
    content : {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%, -50%)'
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);