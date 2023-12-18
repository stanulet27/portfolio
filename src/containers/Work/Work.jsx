import React, {useState, useEffect} from 'react'
import {SiGithub, SiYoutube} from 'react-icons/si'
import {motion} from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Work.scss'
import images from '../../constants/images'



const Work = () => {

  const [animateCard] = useState({y:0, opacity:1});

  const [works, setWorks] = useState([])

  const renderIcon = (link) =>{
    if(link.indexOf("github") > 0 ){
      return(<SiGithub />)
    }
    else if(link.indexOf("youtube") > 0 ){
      return(<SiYoutube />)
    }
  }

  const renderText = (link) =>{
    if(link.indexOf("github") > 0 ){
      return(<p className='p-text hover-text'>Click here to view code</p>)
    }
    else if(link.indexOf("youtube") > 0 ){
      return(<p className='p-text hover-text'>Click here to view video</p>)
    }
  }
  const renderBottomBar = (work) =>{
    let link = String(work.codeLink)

    if(link.length > 1){
      return(
      <div className='app__work-img app__flex'>

      <a href={work.codeLink} target="_blank" rel='noreferrer'>
      {renderText(link)}
        <motion.div
          whileHover={{opacity:[0,1]}}
          transition={{duration:0.5, ease:'easeInOut', staggerChildren:0.5}}
          className='app__work-hover app__flex'
        >
          <motion.div
            whileInView={{scale:[0,1]}}
            whileHover={{scale:[1,0.9]}}
            transition={{duration:0.25,}}
            className='app__flex'
          >
            {renderIcon(link)}
          </motion.div>

        </motion.div> 
        </a>
      </div>)
    }
    else{
    return(<></>)
    }
  }


  useEffect(() => {
    const query = '*[_type=="works"]'
    client.fetch(query)
      .then((data) => {
        setWorks(data)
      })
  }, [])




  return (
    <>
      <h2 className='head-text' >My <span>Projects</span></h2>
      <motion.div
      animate={animateCard}
      transition={{duration:0.5, delayChildren: 0.5}}
      className='app__work-portfolio'
      >
        {works.map((work,index) => (
          <div className='app__work-item app__flex' key ={index}>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop:10}}>{work.description}</p>
            </div>
            {renderBottomBar(work)}
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__work'),'projects', 'app__primarybg')