import React, { useState } from 'react'
import Navbar from './Navbar'


const Login = () => {

    const [Email,SetEmail]=useState('');
    const [Password,SetPassword]=useState('')

    const  HandleSubmit=async()=>{

try{
   const {Email,Password}={Email,Password} 
await axios.post("/api/user/login")
}
catch(err){
  console.log(err)
}

    }

  return (
    <div className="">
<Navbar/>
    <form className='bg-white p-10 rounded-3xl w-1/4 mt-3' onSubmit={HandleSubmit}>
      <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">your Email</label>
        <input onChange={(e)=>{SetEmail(e.target.value)}} value={Email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@blablabla .com" required/>
      </div>
      <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">your password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input onChange={(e)=>{SetPassword(e.target.value)}} value={Password} id="remember" type="checkbox"  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">test</button>
    </form>
    
        </div>
  )
}

export default Login