import './collapse.scss'

function Collapse({ title, content}) {
    return (
      <>
        <div className='collapse'>
          <p className="collapse_title">{title}
            <i className="fas fa-chevron-down"></i>
          </p>
          <p className="collapse_content">{content}</p>
        </div>
        </>
     
    )
  }
  export default Collapse

