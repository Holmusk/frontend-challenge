import React from 'react';
import ReactDOM from 'react-dom';
import { shallow , mount} from 'enzyme';
import '../../../setupTests';

import RadioList from '../../../component/radio-list/radio-list';
import jsonData from '../../../data.json'

describe('RadioList', () => {
    const component = mount(<RadioList list={jsonData}/>);
    it('1> radio List componenent randered',()=>{
        expect(component).toHaveLength(1);
    })
});