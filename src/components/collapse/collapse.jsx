import { useState } from 'react'
import './collapse.scss'

function Collapse({ title, content}) {
    const [isShow,setIsShow]=useState(false);
    
    const showContent = () => {
      setIsShow(!isShow);
    }
    return (
      <>
        <div className={isShow ? "collapse collapse_up" : "collapse collapse_down"}>
          <span className="collapse_title">
            {title}
            <i className={isShow ? "fas fa-chevron-up" : "fas fa-chevron-down"} onClick={showContent}></i>
          </span>
          <p className={isShow ? "collapse_content up" : "collapse_content down"}>{content}</p>
        </div>
        </>
     
    )
}
export default Collapse

