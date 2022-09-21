import React from 'react'
import { Button, Dropdown, Menu, Row, Col } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';

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
        <div className='footer text-center'>
            <p>Designed and Developed by</p>
            <p>AMS</p>
        </div>
    </div>
  )
}
