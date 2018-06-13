import * as action from '../../../redux/home/actions';

describe('1> Action',()=>{
    it('set action',()=>{
        const payload = {
            type : action.SETDATA,
            payload : "Testing Action"
        }
        expect(action.setData("Testing Action")).toEqual(payload);
    })
})