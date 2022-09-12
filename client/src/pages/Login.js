import React from 'react'
import {Col, Form, Input, Row} from 'antd';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { userLogin } from '../redux/actions/userAction';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../components/Spinner';

AOS.init();
export const Login = () => {

  const dispatch = useDispatch()
  // const {loading} = useSelector(state =>state.alertReducer)

  function onFinish(values){
    dispatch(userLogin(values))
    console.log(values);
  }

  return (
    <div className='login'>
      {/* {loading && (<Spinner />)} */}
      <Row gutter={16} className='d-flex align-item-center'>
        <Col lg={16} style={{position:'relative'}}>
          {/* <img style={{height:'60vh'}} src='https://us.123rf.com/450wm/medvedsky/medvedsky2001/medvedsky200100107/141805375-kazakhstan-almaty-january-20-2020-all-new-bmw-8-series-coupe-on-dark-background-3d-render.jpg?ver=6' /> */}
          <img
          data-aos='fade-left'
          data-aos-duration='3000'
          style={{height:'60vh'}} src='https://us.123rf.com/450wm/medvedsky/medvedsky2001/medvedsky200100067/141805335-kazakhstan-almaty-january-20-2020-all-new-bmw-8-series-coupe-on-dark-background-3d-render.jpg?ver=6' />

          <h1 
          data-aos='flip-right'
          data-aos-duration='3000'
          className='login-logo'>SPACE-ZERO</h1>
        </Col>
        <Col lg={8} className='text-left p-5'>
          <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
            <h1
            data-aos='fade-left'
            data-aos-duration='3000'
            >Login</h1>
            <hr />
            <Form.Item name='username' label='Username' rules={[{required:true}]}>
              <Input />
            </Form.Item>

            <Form.Item name='password' label='Password' rules={[{required:true}]}>
              <Input.Password />
            </Form.Item>
            <button className='btn1 mt-2 mb-5'>Login</button>
            <hr />

            <Link to='/register'>Click here to Register</Link>
          </Form>
        </Col>

      </Row>

    </div>
  )
}
