import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
    // const[data,setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/dhruv3980')
    //     .then(res=>res.json())
    //     .then(data => setdata(data));

    // },[])


  return (
   <div className='text-center m-4 bg-slate-400 text-indigo-100 p-4 text-3xl flex flex-col items-center
'>Github followers : {data.followers}
    <div className='m-4'>
    <img src={data.avatar_url} alt="Git Picture" width={300}  class></img>
   
    </div>
   </div>
  )
}

export default Github

export const githubinfoloader = async () => {
  const response = await fetch('https://api.github.com/users/dhruv3980');
  return response.json();
}


// export const githubinfoloader = async() =>{
//   const response = await fetch('https://api.github.com/users/hiteshchodhory')

//   return response.json();
// }