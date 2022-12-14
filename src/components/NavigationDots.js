import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'goals', 'resume', 'projects', 'contact' ].map((item,index) => (
            <a 
            key={item+index}
            className='app__navigation-dot'
            href={`#${item}`} 
            style={active === item ? {backgroundColor:'#313BAC'} : {}}
            />

        ))}
    </div>
  )
}

export default NavigationDots