import { useState } from 'react'
import './collapse.scss'

function Collapse({ title, content}) {
  const [isShow,setIsShow]=useState(false);
  const showContent = () => {
    setIsShow(!isShow);
  }
    return (
      <>
        <div className='collapse'>
          <p className="collapse_title">
            {title}
            <i className="fas fa-chevron-down" onClick={showContent}></i>
          </p>
          {isShow && <p className="collapse_content">{content}</p>}
        </div>
        </>
     
    )
  }
  export default Collapse

