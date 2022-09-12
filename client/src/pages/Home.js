import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultLayout } from '../components/DefaultLayout';
import { getAllCars } from '../redux/actions/carsAction';
import { Button, Col, Row } from 'antd';
import { Spinner } from '../components/Spinner';
import { Link } from 'react-router-dom';

export const Home = () => {
  const {cars} = useSelector(state => state.carsReducer )
  // console.log(cars.length);

  const {loading} = useSelector(state =>state.alertsReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars())
    
  }, []);
  

  return (
    <DefaultLayout> 
      {loading && (<Spinner/>) }
      {/* <h1>car length is {cars.length}</h1> */}
      <Row justify='center' gutter={16} className='mt-5'>
        {cars.map(car=> {
          return <Col lg={5} sm={24} xs={24}>
            <div className='car p-2 bs1'>
              <img src={car.image} className='carImg'/>
              <div className='car-content d-flex align-item-center justify-content-between pt-3'>
                <div>
                  <p style={{textTrasform:'uppercase'}}>{car.name}</p>
                  <p>{car.rentPerHour} Rent per hour /-</p>
                </div>
                <div>
                  <button className='btn1 mr-1'><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                </div>

              </div>
            </div>
          </Col>
        })}
      </Row>

    </DefaultLayout>
  ) 
}
