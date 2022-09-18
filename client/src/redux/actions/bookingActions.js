import axios from 'axios';
import { message } from 'antd';

export const bookCar = (reqObj) => async (dispatch) => {

    dispatch({type: 'LOADING', payload:false})

    try{
         await axios.post('/api/bookings/bookcar' , reqObj)
        dispatch({type: 'LOADING', payload:false})
        message.success('Your car booked successfully')
    } catch (error){
        console.log(error);
        dispatch({type: 'LOADING', payload:false})
        message.error('Something went wrong..Please try laters')
    }
}