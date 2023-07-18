import React, { useRef, useState,useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap";
import { UserAuth } from "../../Context/GoolgeContext";

import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../Context/AuthContext"
import { Link } from "react-router-dom"
  const Signup =()=>{
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
  
  
    const handleGoogleSignUp = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      if (user != null) {
        navigate('');
      }
    }, [user]);

    



  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
     
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  
   






  
  return (
    
    <div className="relative flex flex-col  ">
      <Form onSubmit={handleSubmit}>
    <div className="items-center bg-[url(https://file.rendit.io/n/RmrJXrEj0dyznh3uXSNO.svg)]  w-full bg-cover h-[700px] lg:h-[800px] bg-50%_50% bg-blend-normal flex flex-col shrink-0  mt-[-160px]   pt-[274px]  ">
    
    <div className="flex flex-row gap-1 w-full items-center justify-center mt-[10px] m-[30px] text-center">
    <Link to="/dashboard" className="z-10 no-underline overflow-hidden flex flex-row mr-1 gap-1 w-32 shrink-0 items-center">
    <img
      src="https://file.rendit.io/n/6VHf4UqpuJjYlcNUIibJ.svg"
      className="min-h-0 min-w-0 w-3 shrink-0 ml-2"
    />
    <div to="signup" className=" ml-2  text-center text-xs font-['adineue_PRO'] font-bold leading-[15px] text-white w-18 h-full">
      DASHBOARD
    </div>
  </Link>
 
  <Link to="/signup" className="z-10 ml-2 no-underline overflow-hidden flex flex-row mr-1 gap-1 w-32 shrink-0 items-center">
    <img
      src="https://file.rendit.io/n/6VHf4UqpuJjYlcNUIibJ.svg"
      className="min-h-0 ml-2 min-w-0 w-3 shrink-0"
    />
    <div to="signup" className="text-center text-xs font-['adineue_PRO'] font-bold leading-[15px] text-white w-18 ">
      SIGN UP
    </div>
  </Link>
  <Link to="/" className="z-10 overflow-hidden no-underline flex flex-row gap-1 w-32 shrink-0 items-center">
    <img
      src="https://file.rendit.io/n/86CGdUWyStjZVM6V1BMc.svg"
      className="min-h-0 min-w-0 w-3 shrink-0"
    />
    <div className="text-center text-xs font-['adineue_PRO'] font-bold leading-[15px] text-white w-18 h-full">
      SIGN IN
    </div>
  </Link>
</div>
          


      
      <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white  flex flex-col items-center gap-1 h-[650px] p-8  rounded-[20px]">
        <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] self-center flex flex-col mb-3 gap-3 w-60  items-center">
          
    
          
          
          
          
          
          <div className="text-center text-lg font-['adineue_PRO'] font-bold leading-[25.2px] text-[#232944] mb-px  h-[15%]">
            Register With
          </div>
          <div className="self-stretch flex flex-row justify-between items-center">
            <button  className="border-solid border-gray-300 flex flex-col justify-center w-16 shrink-0 h-16 lg:w-20 lg:h-20 items-center border-2 rounded-lg">
              <img
                src="https://file.rendit.io/n/HYmA1S4lGOFceVdYLJ6Y.svg"
                className="min-h-0 min-w-0 w-8"
              />
            </button>
            <button onClick={handleGoogleSignUp}  className="border-solid border-gray-300 flex flex-col justify-center  w-16 shrink-0 h-16 lg:w-20 lg:h-20  items-center border-2 rounded-lg">
              <img
                src="https://file.rendit.io/n/X0HgV7TJM2wwinCluYTL.svg"
                className="min-h-0 min-w-0 w-8"
              />
            </button>
            <button onClick={handleGoogleSignUp}  className="border-solid border-gray-300 flex flex-col justify-center  w-16 shrink-0 h-16 lg:w-20 lg:h-20  items-center border rounded-lg">
              <img
                src="https://file.rendit.io/n/ptre1Lu7Dmwh2NALIBpg.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </button>
          </div>
          <div className="text-center text-lg font-['adineue_PRO'] font-bold leading-[25.2px] text-gray-500 w-5 h-[14.94%]">
            or
          </div>
        </div>

        <div>
          {error}
        </div>
        <div className="text-sm font-['adineue_PRO'] leading-[19.6px] text-gray-800 ml-1 w-full h-[3.74%]">
          Email
        </div>
        < Form.Control  type="email" ref={emailRef} required className="border-solid border-gray-300 overflow-hidden bg-white self-stretch flex flex-col justify-center pl-5 h-12 shrink-0 items-start ml-px border rounded-lg"/>
      
        <div className="text-sm font-['adineue_PRO'] leading-[19.6px] text-gray-800 ml-1 w-full h-[3.74%]">
          Password
        </div>
        < Form.Control  type="password" ref={passwordRef} required className="border-solid border-gray-300 overflow-hidden bg-white self-stretch flex flex-col justify-center pl-5 h-12 shrink-0 items-start ml-px border rounded-lg"/>
        <div className="text-sm font-['adineue_PRO'] leading-[19.6px] text-gray-800 ml-1 w-full
         h-[3.74%]">
         Confirm Password
        </div>
        < Form.Control   type="password" ref={passwordConfirmRef} className=" border-solid
         border-gray-300 overflow-hidden bg-white self-stretch flex flex-col justify-center
          pl-5 h-12 shrink-0 items-startml-px border rounded-lg"/>
        
      
        <div className="flex flex-row gap-2 items-center  ml-px">
          <div className="overflow-hidden bg-[#adf22f] flex flex-col w-8 shrink-0 items-end  rounded-[97.7397232055664px]">
            <img
              src="https://file.rendit.io/n/zEOIwlLzu4YsBvBQyfan.svg"
              className="min-h-0 min-w-0 w-3"
            />
          </div>
          <div className="text-xs font-['adineue_PRO'] leading-[18px] text-gray-800 w-2/3 h-full">
            Remember me{" "}
          </div>
        </div>
        <button className="bg-gray-800 self-stretch h-12 shrink-0 text-white ml-px rounded-lg" >Register</button>
  
        <div className="text-center text-sm font-['adineue_PRO'] leading-[19.6px] text-gray-500 self-center w-3/5 h-[3.74%]">
          Don’t have an account?<div className="font-bold contents"> </div>
          <Link to="/" className="font-bold text-gray-800 contents">SignIn</Link>
        </div>
      </div>
    
    </div>
    </Form>
  </div>)
}

export default Signup
