import './NavStyle.css'

function Quote({ Title, Paragraph }) {

  return (
    <div>
      <h1>{ Title }</h1>
      <h3 className='Nav'> { Paragraph }</h3>
    </div>
  )
}

export default Quote