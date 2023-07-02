import './tags.scss'

function Tags({title}) {
    return (
      <>
        <div className='tags'>
            {title.map((tags,index) => (
                <span key={index}>{tags}</span>
            ))}
        </div>
    </>
     
    )
  }
  export default Tags