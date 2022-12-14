import React, {useState} from 'react'


import {AppWrap, MotionWrap} from '../../wrapper'
import {HiOutlineMailOpen, HiPhone} from "react-icons/hi";
import {client} from '../../client'


import "./Footer.scss"

const Footer = () => {
  const [formData, setFormData] = useState({name:'', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name,email,message} = formData;
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = () =>{
    setLoading(true);

    const contact ={
      _type:'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(()=>{
        setLoading(false);
        setIsFormSubmitted(true);
      })

  }
  return (
    <>
      <h2 className='head-text'> Contact <span>Me</span></h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <HiOutlineMailOpen className='app__footer-icon'/>
          <a href='mailTo:stanulet.1@osu.edu' className='p-text'>stanulet.1@osu.edu</a>
        </div>
        <div className='app__footer-card'>
          <HiPhone className='app__footer-icon'/>
          <a href='tel: +1 (440) 453-1860' className='p-text'>+1 (440) 453-1860</a>
        </div>
        
      </div>
      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' name="name" placeholder='Your Name' value={name} onChange={handleChangeInput}/>
          </div>
          <div className='app__flex'>
            <input className='p-text' type='text' name="email" placeholder='Your Email' value={email} onChange={handleChangeInput}/>
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name='message' onChange={handleChangeInput}/>
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'),'contact','app__whitebg');