import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import BACKEND from "../Constant";
import { Link, useHistory } from "react-router-dom";

function Login_SignUP() {
    let history = useHistory();     
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
      
     if(localStorage.getItem("login")=="true"){
        history.push("/");
     }
  }, [])

  const login = async () => {
 try{
     
    if (userName.trim() == "" || password.trim() == "") {
        return alert("Enter input fields");
      }
      const {data}=await  axios.get(`${BACKEND}/user/login/${userName}/${password}`)
      console.log(data,"<<<<<this is data")
      if(data.success) {
          alert("login success")
          localStorage.setItem("login","true")
        history.push("/");

      }else{
        //   console.log(data)
        alert(data.msg)
      }
 }catch(err){console.log(err)}
  };

 

  return (
    <div>
      <Container>
        <div
          className="d-flex  justify-content-center align-item-center border  "
          style={{ height: "60vh" }}
        >
          <div
            className="d-flex flex-column justify-content-center align-item-center  "
            style={{ width: "40%" }}
          >
        <div className="text-center" style={{fontSize:"2rem"}}>Login</div>
            <div className="mt-5" >User Name</div>
            <input type="text" value={userName} onChange={e=>setuserName(e.target.value)} />
            <div>Password</div>
            <input value={password} type="password" onChange={e=>setpassword(e.target.value)} />
            <Button  style={{padding:"10px", marginTop:"20px",width:"40%",alignSelf:"center"}} onClick={login}>Submit</Button>
            <Button  style={{padding:"10px", marginTop:"30px",width:"40%",alignSelf:"center"}} ><Link to="/signup" style={{textDecoration:"none"}}>Sign Up</Link></Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login_SignUP;
