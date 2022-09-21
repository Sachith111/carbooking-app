import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultLayout } from '../components/DefaultLayout';
import { getAllCars } from '../redux/actions/carsAction';
import { Col, Row, DatePicker } from 'antd';
import { Spinner } from '../components/Spinner';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { RangePicker } = DatePicker;
export const Home = () => {
  const {cars} = useSelector(state => state.carsReducer )
  // console.log(cars.length);

  const {loading} = useSelector(state =>state.alertsReducer)
  const [totalCars,setTotalcars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars())
    
  }, []);

  useEffect(() => {
    setTotalcars(cars)
  }, [cars])
  
  
  function setFilter(values){

    var selectedFrom = moment(values[0],'MMM DD yyyy HH:mm')
    var selectedTo = moment(values[1],'MMM DD yyyy HH:mm')

      var temp=[]
      for(var car of cars){
        if(car.bookedTimeSlots.length === 0){
          temp.push(car)
          console.log('ssss',car.bookedTimeSlots.length)
        }
        else{
          for(var booking of car.bookedTimeSlots ){

            if(selectedFrom.isBetween(booking.from , booking.to) || 
            selectedTo.isBetween(booking.from , booking.to) || 
            moment(booking.from).isBetween(selectedFrom,selectedTo) || 
            moment(booking.to).isBetween(selectedFrom,selectedTo) 

          )
          {

          }else{
            temp.push(car)
          }
        } 
      }
    } 
    setTotalcars(temp)
  }

  return (
    <DefaultLayout> 
      <Row className='mt-3' justify='center'>
        <Col lg={20} sm={24} className='d-flex justify-content-left' >
        <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD YYYY HH:mm'  onChange={setFilter}/>

        
        </Col>
      </Row>
      {loading && (<Spinner/>) }
      {/* <h1>car length is {cars.length}</h1> */}
      <Row justify='center' gutter={16} >
        {totalCars.map(car=> {
          return <Col lg={5} sm={24} xs={24}>
            <div className='car p-2 bs1'> 
              <img src={car.image} className='carImg'/>
              <div className='car-content d-flex align-item-center justify-content-between pt-3'>
                <div className='text-left pl-2'>
                  <p style={{textTrasform:'uppercase'}}>{car.name}</p>
                  <p> Rent per hour : {car.rentPerHour} /-</p>
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
