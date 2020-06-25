import React, { useState } from "react";

function MainSection(props) {
const {data} = props;
console.log('mainSection props = ', props)
  const [title] = useState(data.title);
  console.log("This is Title: ", title);
  console.log("Props url?  : ", data.url)
  return (
    <div className = 'main-section'>
      <h1 className="title" data={data.title}>{title}</h1>
      <p className='description' >{data.explanation}</p>
      <img src={data.url} alt={data.explanation}/>
      {console.log('This is MainSection props: ', data)}
      <p className='date'>{data.date}</p>
    </div>
  )
}

export default MainSection