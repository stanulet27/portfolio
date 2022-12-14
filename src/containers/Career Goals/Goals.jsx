import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Goals.scss'


const Goals = () => {

  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query ='*[_type=="goals"]'
    client.fetch(query)
     .then((data)=>setAbout(data));
  }, [])
  
  return (
    <>
      <h2 className='head-text'>My 
        <span> Career Goals </span>
      </h2>
      <br/>
      <div className='app__goal'>
        {about.map((about,index) =>
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration: 0.5, type:"tween"}}
        className="app__goal-item"
        key = {about.title + index}
        
        >

          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description1}</p>
          <br/>
          <p className='p-text' style={{marginTop:10}}>{about.description2}</p>
          <br/>
          <p className='p-text' style={{marginTop:10}}>{about.description3}</p>

        </motion.div>
        )}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Goals,'app__goals'), 'goals', 'app__primarybg');