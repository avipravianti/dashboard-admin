import { GET_DATA } from "../types";

const initialState = {
    data: [],
    error: null,
}

const dataReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case `${GET_DATA}_FULFILLED`: {
            return {
                ...state,
                data: payload,
            }
        }

        case `${GET_DATA}_ERROR`: {
            return {
                ...state,
                error: error.message
            }
        }
        default: 
        return {
            ...state,
        }
    }
}
export default dataReducer