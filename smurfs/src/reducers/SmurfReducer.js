import {FETCH_SMURF_DATA_START, FETCH_SMURF_DATA_SUCCESS, SEND_SMURF_DATA_START,SEND_SMURF_DATA_SUCCESS} from '../actions'


const initialState = {
    smurf: [],
    isLoading: false,
    error: ''
    }


export const SmurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurf: action.payload,
                error: ''
            };
            case SEND_SMURF_DATA_START:
                return {
                    ...state,
                isLoading: true,
                error: ''
                };
            case SEND_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurf: [...state.smurf, action.payload],
                error: ''
            };    
        default:
            return state
    }
}

