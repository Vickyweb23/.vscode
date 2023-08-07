import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsLinkedin  } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import {PiTelegramLogoDuotone} from "react-icons/pi";
// import {src16} from './images.pic16.png';
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
          
      
       
        <div className='icons2  d-f' alt='icons2'>
          <div className='img'>
        {/* < img src={src16} className='img16' alt='img 16'/>  */}
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
          </div>   </div>
          
          <div className='map'>
            
          </div>
          </div>
          </from>

          <div className='fotter' alt='fotter'>
    <div className='senchola-text'>
      <h1>Senchola</h1>
      <p>Senchol University is the one of the best Software Developement . It is the extradinorry webdevelopment oppertunties available in the senchola</p>
      
    </div>

    <div className='course' alt='course1'>
        <h1>Course</h1>
      <h6>UI Design</h6>
      <h6>UX Design</h6>
      <h6>ANIMATION Design</h6>
      <h6>3D Design</h6>
      <h6>GRAPHIC Design</h6>


    </div>
    <div className='explore' alt='explore'>
      <h1>Explore</h1>
      <h6>Figma</h6>
      <h6>Mango dp</h6>
      <h6>C##</h6>
      <h6>Figma</h6>

      <h6>C sharp</h6>
    </div>
    <div className='resourse'>
      <h1>Resourse</h1>
      <h6>Resourse hub</h6>
      <h6>Support</h6>
      <h6>Education</h6>
      <h6>Contact</h6>
      <h6>Education</h6>

    </div>
    <div className='connect' alt='connect'>
      <p>Connect With the Senchola Technologies</p>
     
     <BsLinkedin   id='BsLinkedin' alt='icons1'/>
     <AiFillYoutube  id='BsLinkedin' className='icons2'/>
     <BsFacebook  id='BsLinkedin' className='icons3'/> 
     <BsInstagram id='BsLinkedin' className='icons4'/>
     <AiFillTwitterCircle id='BsLinkedin' className='icons5'/>
     <PiTelegramLogoDuotone id='BsLinkedin' className='icons6'/>
     <div className='copy'>
    <h6>
      All CopyRights Reserved @ 2023 Senchola Technologies Solution
      </h6>
    </div>
    </div>
    
  </div>
 
</div>

  )
}

export default Cantact