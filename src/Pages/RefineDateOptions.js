import React , {useEffect,useState}from 'react'
import DateCards from './DateCards'

const RefineDateOptions = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState()
  const [userVector,setUserVector] = useState(0)
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const email = urlParams.get("email")
        fetch(`http://localhost:8888/api/profile/${email}`)
        .then((res) => res.json())
        .then(res => {setData(res.data)})
        .then((res)=> fetch(`http://localhost:8888/api/${email}`))
        .then(res => res.json())
        .then(res=>{
          setUserData(res.data[0].answers)
        })
        
    }, [])
  
  return (
    <div>
      <h1>Refine Date Options</h1>
      {typeof(userData)}
      <h3>Here are some options for you -</h3>
      {data&&data.map(x =><DateCards key ={x.id} name = {x.name}/>)}
    </div>
  )
}

export default RefineDateOptions