import React from 'react'
import { Button, Dropdown, Menu, Row, Col } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export const DefaultLayout = (props) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const menu = (
    <Menu>
      <Menu.Item>
        <a href='https://www.aliyun.com' />
        Home
        </Menu.Item>
      <Menu.Item>
      <a href='https://www.aliyun.com' />
        Booking
        </Menu.Item>
      <Menu.Item>
      <a href='https://www.aliyun.com' />
        Profile
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
              >SpaceZero-Cars</h1>

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
    </div>
  )
}
