import { Col, Row, Divider, DatePicker, Checkbox, Button, Modal } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { DefaultLayout } from '../components/DefaultLayout'
import { Spinner } from '../components/Spinner';
import { bookCar } from '../redux/actions/bookingActions';
import { getAllCars } from '../redux/actions/carsAction';
import StripeCheckout from 'react-stripe-checkout';
import AOS from 'aos';

import 'aos/dist/aos.css';

AOS.init();

const { RangePicker } = DatePicker;
export const BookingCar = () => {
  const {cars} = useSelector(state => state.carsReducer );
  const {loading} = useSelector(state =>state.alertsReducer);
  const [car,setCar] = useState({});
  const dispatch = useDispatch();
  const { carid: carId } = useParams();
  const [from , setFrom] = useState();
  const [to,setTo] = useState();
  const [totalHours,setTotalHours] = useState(0);
  const [driver,setDriver] = useState(false);
  const [totalAmount,setTotalAmount] = useState(0);
  const [modal2Open, setModal2Open] = useState(false);


  useEffect(() => {
   
    if(cars.length === 0)
    {
      dispatch(getAllCars())
      
    }else
    {
      setCar(cars.find(o=>o._id === carId))
    }
}, [cars])

  useEffect(() => {
 
    setTotalAmount((totalHours * car.rentPerHour))
    if(driver){
      setTotalAmount(totalAmount + (80 * totalHours))
    }

}, [driver,totalHours])


function selectTimeSlots(values){
    console.log(moment(values[0]).format('MMM DD YYYY HH:mm'));
    console.log(moment(values[1]).format('MMM DD YYYY HH:mm'));
    setFrom(moment(values[0]).format('MMM DD YYYY HH:mm'));
    setTo(moment(values[1]).format('MMM DD YYYY HH:mm'));

    setTotalHours(values[1].diff(values[0] , 'hours') );
}

function onToken(token){
  const reqObj = {
    token,
    user : JSON.parse(localStorage.getItem('user'))._id,
    car : car._id,
    totalHours,
    totalAmount,
    driverRequired : driver ,
    bookedTimeSlots : {
      from,
      to
    } ,
  }
  dispatch(bookCar(reqObj));
}


  return (
    <DefaultLayout> 
    {/* <h1>Booking car</h1>
    <h1>Car Id = {carId}</h1>
    <img src={car.image} className='carImg'/>
    <h1>Car brand = {car.name}</h1> */}

    {loading && (<Spinner/>)}
    <Row justify='center' className='d-flex align-items-center' style={{minHeight : '90vh'}}>
      <Col lg={10} sm={24} xs={24} className='p-3'>
      <img
      data-aos='zoom-in'
      data-aos-duration='3000'
      src={car.image} className='carImg2 bs1 w-100 '/>
      </Col>

      <Col lg={10} sm={24} xs={24}>
        <Divider type='horizontal' plain>Car Info</Divider>
        <div className='text-right'>
          <p>{car.name}</p>
          <p>{car.rentPerHour} Rent per hour /=</p>
          <p>Fuel-Type : {car.fuel}</p>
          <p>Max Persons : {car.capacity}</p>
        </div>

        <Divider type='horizontal' plain>Select Time Slots</Divider>
        <div className='text-right'>
        <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD YYYY HH:mm' onChange={selectTimeSlots}/>
        <br />
       <Button className='btn1 mt-2 '  onClick={() => setModal2Open(true)}>See Booked Slots</Button>
       
       {/* condition */}
       {from && to &&(

         <div>
         <p>Total Hours : {totalHours}</p>
         <p>Rent Per Hour : <b>{car.rentPerHour}</b></p>
         <Checkbox onChange={(e)=>{
           if(e.target.checked){
             setDriver(true);
           }else{ 
             setDriver(false);
           }
         }}>Driver Required</Checkbox>
         <p><b>Total Amount : {totalAmount}</b></p>

        

         <StripeCheckout
        token={onToken}
        shippingAddress
        amount={totalAmount * 100}
        currency={'lkr'}
        stripeKey="pk_test_51LaAqqBTVpVrUagONSn2UhO6A5ZLkkNfdn0GeJgV76QceDPF491k3Y0Kg9gpWHsVWIoJQpqv1HlZrvcR6C5TMyzH006EsaFJJX">

         <Button className='btn1'>Book Now</Button>

      </StripeCheckout>
       </div>

       )}
        </div>
      </Col>

{car.name &&(
  <Modal
  title="Booked time slots"
  centered
  visible={modal2Open}
  onOk ={() => setModal2Open(false)}
  onCancel={() => setModal2Open(false)}

>
  <div>
  {car.bookedTimeSlots.map(slot =>{
    return <button style={{backgroundColor:'white',borderColor:'orangered'}}>{slot.from} - {slot.to}</button>
  })}  
  </div>
 
</Modal>
      )}

    </Row>


    </DefaultLayout>
  )
} 
 