import React from 'react'
import { Button, Dropdown, Menu, Row, Col,Tag } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

AOS.init();
export const DefaultLayout = (props) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const menu = (
    <Menu>
      <Menu.Item>
        <a href='/' />
        Home
        </Menu.Item>
      <Menu.Item>
      <a href='/userbookings' />
        Booking
        </Menu.Item>
      <Menu.Item>
      <a href='/admin' />
        Admin
        </Menu.Item>
      <Menu.Item onClick={()=>{
        localStorage.removeItem('user');
        window.location.href='/login'
      }}>
        <li>Logout</li>
        </Menu.Item>
    </Menu>
  )

  return (
    <div>
        <div className='header bs1'>
          <Row gutter={16} justify='center'>
            <Col lg={20} sm={24} xs={24}>
            <div className='d-flex justify-content-between'>
              <h1 
               data-aos='zoom-in-down'
               data-aos-duration='3000'
              
              ><b><Link to='/' style={{color:'orangered'}}>SpaceZero-Cars</Link></b></h1>

      <Dropdown overlay={menu} placement="bottom">
        <Button>🤵  {user.username}</Button>
      </Dropdown>
             
            </div>
            </Col>
          </Row>
          
        </div>
        <div className='content'>
          {props.children}
        </div>
        <div className='footer'>
        <Row justify='center'>
        <Col lg={20} sm={24} className='d-flex justify-content-between' >
        <div> <p>Copyright @2022 All rights reserved</p></div>
        <div>
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
        </div>
          <div> <p>Designed and Developed by AMS 🧡</p></div>
        
        </Col>
      </Row>
 
        </div>
    </div>
  )
}
