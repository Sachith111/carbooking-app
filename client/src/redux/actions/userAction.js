import axios from 'axios';
import {message} from 'antd';

export const userLogin=(reqObj)=> async dispatch=>{


    dispatch({type: 'LOADING', payload:true})

    try{
        const response = await axios.post('/api/users/login',reqObj)

        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING', payload:false})

        setTimeout(()=> {
            // navigate to login after registration
window.location.href='/'
}, 500);

    } catch (error){
        console.log(error);
        message.error('Something went wrong');
        dispatch({type: 'LOADING', payload:true})
    }
}


export const userRegister=(reqObj)=> async dispatch=>{


    dispatch({type: 'LOADING', payload:true})

    try{
        const response = await axios.post('/api/users/register',reqObj)
        message.success('registration successfull')

        setTimeout(()=> {
                    // navigate to login after registration
        window.location.href='/login'
        }, 500);

        
        dispatch({type: 'LOADING', payload:false})
    } catch (error){
        console.log(error);
        message.error('Something went wrongs');
        dispatch({type: 'LOADING', payload:true})
    }
}