import axios from "axios";
import { GET_DATA } from "../types";

const url = "http://api.tvmaze.com/search/shows?q=marvel"

export const getData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(url);
            dispatch({
                type: `${GET_DATA}_FULFILLED`,
                payload: response.data,
            });
            
        } catch (error) {
            dispatch({
                type: `${GET_DATA}_ERROR`,
                error: error.message,
            })
        }
    }
}
export default getData