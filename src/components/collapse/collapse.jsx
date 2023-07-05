import { useState } from 'react'
import './collapse.scss'

function Collapse({ title, content}) {
  const [isShow,setIsShow] = useState(true);
  
  const showContent = () => {
    setIsShow(!isShow);
  }


  return (
      <div className={isShow ? "collapse collapse_up" : "collapse collapse_down"} onClick={showContent}>
          <div className="collapse_title">
            <p>{title}</p>
            <i className={isShow ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
          </div>
          {Array.isArray(content) ? (
            <ul className={isShow ? "collapse_list up" : "collapse_list down"}>
                {content.map((equipment, index) => (
                  <li key={index} 
                      className={isShow ? "collapse_equipement" : "collapse_equipement"}
                      >
                      {equipment}
                  </li>
                ))}
            </ul>
            ) : (
            <p className={isShow ? "collapse_content up" : "collapse_content down"}>{content}</p>)
          }
      </div>
  )
}
export default Collapse

