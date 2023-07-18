
import React, { useRef, useState ,useEffect} from "react"
import { UserAuth } from "../../Context/GoolgeContext";

import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext"
import { Link} from "react-router-dom"



import { useNavigate } from 'react-router-dom';




const SignIn = () => {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  // const { facebookSignIn, fbuser } = UserAuth();


  // const handlefacebookSignIn = async () => {
  //   try {
  //     await facebookSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   if (fbuser != null) {
  //     navigate('/signIn');
  //   }
  // }, [fbuser]);




  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  console.log(login)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
     
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  return (
    <div className="relative flex flex-col pb-40 ">
      <Form onSubmit={handleSubmit}>
   
    <div className="bg-[url(https://file.rendit.io/n/RmrJXrEj0dyznh3uXSNO.svg)] w-full bg-cover bg-50%_50% bg-blend-normal  flex flex-col h-[1308px] shrink-0 items-center mt-[-160px]   pt-[200px] pb-16">
    
    <div className="flex flex-row   no-underline  w-full items-center  px-0 m-[50px] justify-center">
    <Link to="/dashboard" className="z-10 overflow-hidden flex no-underline  flex-row mr-1 gap-1 w-32 shrink-0 items-center">
    <img
      src="https://file.rendit.io/n/6VHf4UqpuJjYlcNUIibJ.svg"
      className="min-h-0 min-w-0 w-3 ml-3 shrink-0"
    />
    <div to="signup" className="text-center  text-xs font-['adineue_PRO'] no-underline  font-bold leading-[15px] text-white w-18 h-full">
      DASHBOARD
    </div>
  </Link>
 
  <Link to="/signup" className="z-10 overflow-hidden flex flex-row mr-1 no-underline  gap-1 w-32 shrink-0 items-center">
    <img
      src="https://file.rendit.io/n/6VHf4UqpuJjYlcNUIibJ.svg"
      className="min-h-0 min-w-0 w-3 shrink-0"
    />
    <div to="signup" className="text-center ml-3 text-xs font-['adineue_PRO'] font-bold leading-[15px] text-white w-18 ">
      SIGN UP
    </div>
  </Link>
  <Link to="/" className="z-10 overflow-hidden flex flex-row gap-1 no-underline  w-32 shrink-0 items-center">
    <img
      src="https://file.rendit.io/n/86CGdUWyStjZVM6V1BMc.svg"
      className="min-h-0 min-w-0 w-3 shrink-0"
    />
    <div className="text-center text-xs font-['adineue_PRO'] font-bold leading-[15px] text-white w-18 h-full">
      SIGN IN
    </div>
  </Link>
</div>
          
          
<div className="text-center text-2xl font-['adineue_PRO'] font-bold leading-[41.6px] text-white w-full">
  Welcome!

<div className="text-center text-sm font-['adineue_PRO'] leading-[19.6px] text-white w-full">
  Use these awesome forms to login or create new account in your project for
  free.
  <br />
  <br />

  </div></div>


      
      
      <div className="shadow-[0px_5px_14px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col mr-2 w-[314px] gap-1 h-[600px] shrink-0 items-start p-3 lg-[500px] lg:justify-center rounded-[20px]">
        <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] justify-center self-center flex m-2 flex-col mb-3 gap-2 w-64 items-center">
          
    
          
          
          <div className="text-center text-lg font-['adineue_PRO'] font-bold leading-[25.2px] text-[#232944] mb-px w-2/5 h-[14.94%]">
            Sign In with
          </div>
          <div className="self-stretch flex flex-row justify-between items-center">
            <button  onClick={handleGoogleSignIn} className="border-solid border-gray-300 flex flex-col justify-center lg:w-20 lg:h:20 w-16 shrink-0 h-16 items-center border-2 rounded-lg">
              <img
                src="https://file.rendit.io/n/HYmA1S4lGOFceVdYLJ6Y.svg"
                className="min-h-0 min-w-0 w-8"
              />
            </button>
            <div className="border-solid border-gray-300 flex flex-col lg:w-20 lg:h:20 w-16 shrink-0 h-16 justify-center items-center border-2 rounded-lg">
              <img
                src="https://file.rendit.io/n/X0HgV7TJM2wwinCluYTL.svg"
                className="min-h-0 min-w-0 w-8"
              />
            </div>
            <button  onClick={handleGoogleSignIn} className="border-solid border-gray-300 flex flex-col justify-center lg:w-20 lg:h:20 w-16 shrink-0 h-16 items-center border rounded-lg">
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

        {error && <Alert variant="danger">{error}</Alert>}

        <div className="text-sm font-['adineue_PRO'] leading-[19.6px] text-gray-800  ml-1 w-10 h-[3.74%]">
            Email
        </div>
        <Form.Control type="email" ref={emailRef} required className="border-solid border-gray-300 overflow-hidden bg-white self-stretch flex flex-col justify-center pl-5 h-12 shrink-0 items-start mb-5 ml-px border rounded-lg"/>
        {/* <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group> */}
        
        <div className="text-sm font-['adineue_PRO'] leading-[19.6px] text-gray-800 ml-1 w-16 h-[3.74%]">
          Password
        </div>
        <Form.Control  type="password" ref={passwordRef} required className="border-solid border-gray-300 overflow-hidden bg-white self-stretch flex flex-col justify-center pl-5 h-12 shrink-0 items-start mb-5 ml-px border rounded-lg"/>
        {/* <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group> */}
        <div className="flex flex-row gap-2 items-center mb-8 ml-px">
          <div className="overflow-hidden bg-[#adf22f] flex flex-col w-8 shrink-0 items-end p-1 rounded-[97.7397232055664px]">
            <img
              src="https://file.rendit.io/n/zEOIwlLzu4YsBvBQyfan.svg"
              className="min-h-0 min-w-0 w-3"
            />
          </div>
          <div className="text-xs font-['adineue_PRO'] leading-[18px] text-gray-800 w-2/3 h-full">
            Remember me{" "}
          </div>
        </div>
        <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>    
                <div className="text-center text-sm font-['adineue_PRO'] leading-[19.6px] text-gray-500 self-center w-3/5 h-[3.74%]">
          <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign up</Link>
      </div>        
        </div>
      </div>
      
    </div>
    </Form>
  </div>
  
  )
}

export default SignIn
















