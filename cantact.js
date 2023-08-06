import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { MdLocationPin } from "react-icons/md";
import {src16} from './images.pic16.png';
const cantact = () => {
  return (
    <div>
  
        <from className='form-control'>
          <h1>CONTACT FROM</h1>
          <br></br>
          <label> 
      <h6 id='position'>Get In Touch<br></br></h6>
          <input type='name'  name='name' placeholder='Enter Your Message Each Out'/>    
          </label>
          <br></br>
          <label>
          <h6 id='position'>  Email address<span>*</span> </h6>
            <input type='email' name='email' placeholder='Enter Your email'/>    
          </label><br></br>
          
          <label>
          <h6 id='position'> Phone Number<span>*</span></h6>
                      <input type='phonenumber'  name='phonenumber' placeholder='Enter Your email'/>    
          </label><br></br>
          
          <label>
          <h6 id='position1'> Command Or Message</h6>
            <input type='text area'    placeholder='Enter message'/>    
           </label>
           <br></br>
          <button className='btn'>SEND</button>
          
        </from>
       
        <div className='icons2  d-f' alt='icons2'>
          <div className='img'>
        < img src={src16} className='img16' alt='img 16'/> 
        </div>
        <div className='con'>
          <div  id='AiOutlineMail'className='phone d-f '>
            <h5>    <BsFillTelephoneFill/>Phone</h5>
            <h6><span id='span1'>9360753535</span></h6>
            </div>
          <div id='AiOutlineMail' className='email d-f'>
            <h5>    <AiOutlineMail/>Email</h5>
            <h6> <span id='span1'> Sweetha@gmail.com</span></h6>
          </div>

          <div  id='AiOutlineMail ' className='address d-f size:2rem'>
            <h5>    <MdLocationPin/>Address</h5>
            <h6><span id='span1'>44, 1 street,tvm,chennai-32</span></h6>
          </div>   </div></div>
</div>

  )
}

export default cantact