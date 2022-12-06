import React , {useEffect,useState}from 'react'
import { useNavigate } from 'react-router'
import DateCards from './DateCards'

const RefineDateOptions = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState()
  const [userVector,setUserVector] = useState(0)
  const[calc,setCalc] = useState(true)
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
  
    const calcVector = ()=>{
      if(calc){
        console.log(userData)

      let sum =0
      for(let i=0;i<userData.length;i++){
        console.log(i)

        if(userData[i]==1 || userData[i]=='1'){
          sum++
        }
      }
      setUserVector(sum/10)
    }

    setCalc(false)
    }

    const nav = useNavigate()
  return (
    <div>
      <h1>Refine Date Options</h1>
      <h2>To get your vector please press this first - <button onClick={calcVector}>show vector</button></h2>
      <h2>Your vector: {userVector.toFixed(2)}</h2>
      <h3>Here are some options for you -</h3>
      {data&&data.map(x =><DateCards key ={x.id} name = {x.name} email = {x.email} answers={x.answers} userData={userVector} setUserData={setUserVector}/>)}
      <br/><br/><br/>
      <button onClick ={()=>nav('/')}>Log out</button>
    </div>
  )
}

export default RefineDateOptions