import {
    ADD_SHOP
} from '../actions';

const initialState = {
    name: '',
    address: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SHOP:

        default:
            return state;
    }
}

export default reducer;