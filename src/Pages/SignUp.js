import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import BACKEND from "../Constant";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  let history = useHistory();
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
      
    if(localStorage.getItem("login")=="true"){
       history.push("/");
    }
 }, [])


  const signup = async (req, res) => {
    try {
      const { data } = await axios.post(`${BACKEND}/user/register`, {
        userName,
        password,
      });
      if (data.success) {
        // alert("Success")
        console.log(window.location);
        return (window.location.href = "http://localhost:3000/login");
      } else {
        alert(data.msg);
      }
    } catch (e) {
      console.log(e);
    }
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
            <div className="text-center" style={{ fontSize: "2rem" }}>
              Register
            </div>
            <div className="mt-5">User Name</div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
            <div>Password</div>
            <input
              value={password}
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <Button
              style={{
                padding: "10px",
                marginTop: "20px",
                width: "40%",
                alignSelf: "center",
              }}
              onClick={signup}
            >
              Submit
            </Button>
            <Button
              style={{
                padding: "10px",
                marginTop: "30px",
                width: "40%",
                alignSelf: "center",
              }}
            >
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
