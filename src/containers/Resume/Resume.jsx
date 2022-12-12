import { AppWrap, MotionWrap } from '../../wrapper'
import React, {useState, useEffect} from 'react'
import { urlFor, client } from '../../client';

import './Resume.scss'

const Resume = () => {

  const [resumes, setResume] = useState([])

  const getFile = () => {
    // using Java Script method to get PDF file
    fetch('Resume_ChrisStanulet.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume_ChrisStanulet.pdf';
            alink.click();
        })
    })
  }

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
            <button onClick={getFile}>
              <img className='app__flex' src={urlFor(resume.imgUrl)} alt='resume'/>
            </button>
          </div>
      </div>      
    ))}
    </>

  )
}

export default AppWrap(MotionWrap(Resume,"app__resume"),'resume','app__whitebg')