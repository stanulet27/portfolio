import { AppWrap, MotionWrap } from '../../wrapper'
import React, {useState, useEffect} from 'react'
import { urlFor, client } from '../../client';
import { resumePDF } from '../../constants';


import './Resume.scss'

const Resume = () => {

  const [resumes, setResume] = useState([])


  useEffect(() => {
    const query = '*[_type=="resume"]'
    client.fetch(query)
      .then((data) => {
        setResume(data)
      })
  }, [])

  return (
    <>
    {resumes.map((resume,index)=>(
      <div className='app__resume-content'>
          <h2 className='head-text'>My <span>Resume</span></h2>
          
          <p className='p-text app__flex'> Here is a copy of my resume. If you would like to download a PDF copy, just click on the image!</p>
          <div className='app__resume-img app__flex'>
            <a href={resumePDF} download="Resume_ChrisStanulet" target='_blank'>
              <img className='app__flex' src={urlFor(resume.imgUrl)} alt='resume'/>
            </a>
          </div>
      </div>      
    ))}
    </>

  )
}

export default AppWrap(MotionWrap(Resume,"app__resume"),'resume','app__whitebg')