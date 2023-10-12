import React, {useState} from "react";
import call_icon from '../components/image/call.png';
import envelope_icon from '../components/image/envelope.png';
import iphone_icon from '../components/image/iphone.png'; 
import facebook_icon from '../components/image/facebook.png';
import youtube_icon from '../components/image/youtube.png';

export const Contactus=()=>{
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [message,setMessage] =useState('');

  const handlesubmit =(e)=>{
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(message);
  }

  return(
    <form>
      <div>
        <div className="top">
          <img src={"./image/img.png"} alt=""/>
          <h1 >Contact Us </h1>
        </div>
      <h3>Contact Us</h3>
      <h1 className="get">Get In Touch</h1>
    </div>

    <div className="container">
      <div className="content">
        <h2>Send us a message</h2>
        <input onChange={e=>setName(e.target.value)} type="name" name="name" id="name" placeholder="Name" required/>
        <input onChange={e=>setEmail(e.target.value)} type="email" name="email" id="" placeholder="Email" required/>
        <input onChange={e=>setMessage(e.target.value)} className="massage" type="message" name="message" id="" placeholder="Message" required/>
        <button>Send</button>
      </div>
      <div className="content1">
        <h2>Contact info</h2>
       <div className="img-container">
        <div><img src={call_icon}/></div>
        <div><p className='p-tag'>+251909424567</p></div>
        
       </div>
       <div className="img-container">
        <div><img src={call_icon}/></div>
        <div><p className='p-tag'>+251909424567</p></div>        
       </div>
       <div className="img-container">
        <div><img src={iphone_icon}/></div>
        <div><p className='p-tag'>+251909424567</p></div>        
       </div>
       <div className="img-container">
        <div><img src={iphone_icon}/></div>
        <div><p className='p-tag'>+251909424567</p></div>        
       </div>
       <div className="img-container">
       <div><img src={envelope_icon}/></div>
        <div><p className='p-tag'>SkyRealEstate@gmail.com</p></div>        
       </div>
       <div className="img-container">
       <div><p className='p-tag1'>Social Media</p></div>
        <div><img className="unique" src={facebook_icon}/></div>
        <div><img className="unique" src={youtube_icon}/></div>  
       </div>
      </div>

    </div>
    <div className="container1">
      <div className="end">
      <p >copy right @ Sky real estate</p>
      </div>
      <div className="end1">
      <p >Powered by sky real estate </p>

      </div>
    </div>
    
    </form>
    

  )
}
