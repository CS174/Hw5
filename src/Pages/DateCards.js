import React , {useState,useEffect}from 'react'

const DateCards = ({name,email,userData,setUserData,answers}) => {
  const [showEmail, setShowEmail] = useState(false)
  const [vector, setVector] = useState(0)
  const showVector = ()=>{
    
  }

  useEffect(() => {
    let sum=0
    for(let i=0;i<answers.length;i++){
      if(answers[i]==1) sum++
    }
    setVector(sum/10)
  }, [])
  
  return (
    <div>
        <br/>
        <span>{name} </span>
        <span> Similarity {parseInt(Math.abs(vector+userData)*50)}% </span>
        <button onClick={()=>setShowEmail(!showEmail)}>Setup a Date</button>
        <button onClick ={()=>{if(userData<0.9){setUserData(userData+0.1)}}}>More like this one</button>
        <button onClick ={()=>{if(userData>0.1){setUserData(userData-0.1)}}}>Less like this one</button>
        {showEmail&&<span>{email}</span>}

        <br/>
    </div>
  )
}

export default DateCards