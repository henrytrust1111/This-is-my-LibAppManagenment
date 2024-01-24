import React, { useContext, useState } from "react";
import "./loginpage.css";
import { useNavigate } from "react-router";
import { MyContext } from "../../assets/Context/Context";

const Loginpage = () => {
  const {users,logginUser} = useContext(MyContext)
  const [userID, setUserID] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({ type: false, mssg: "" });
  const [loading,setLoading] = useState(false)
  const nav = useNavigate();
  console.log(users);
  console.log(logginUser);
  const authUser = users.find(e=> e.userID === userID && e.phone === password)
  console.log(authUser);
  const submit = (e) => {
    e.preventDefault();
    if (!userID || !password) {
      setError({ type: true, mssg: "You can't leave this input blank" });
    } else{
      if(!authUser){   
        alert("You don't have access to this site")
      }else{
        logginUser.push(authUser)
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },[5000])
        // setLoading(false)
        nav("/home");
      }
    }
  };
  console.log(logginUser);
  return (
    <div className="loginpage-wrapper">
      <div className="login-form">
        <div className="login-form-left-container">
          <div className="login-form-left-wrapper">
            <p>Welcome to your Library Management System</p>
          </div>
        </div>
        <div className="login-form-right-container">
          <div className="login-form-right-container-holder">
            <div className="logo-holder">
              <img src="./Images/Logo.png" alt="" />
            </div>
            <p className="login-text">LOGIN</p>
            <form action="">
              <div className="input-wrapper">
                <label htmlFor="" className="login-label">
                  User ID
                </label>
                <input
                  type="text"
                  className="login-input"
                  placeholder="Enter User ID"
                  onChange={(e) => setUserID(e.target.value)}
                />
                {error.type ? <p className="err-mssg">{error.mssg}</p> : null}
              </div>
              <div className="input-wrapper">
                <label htmlFor="" className="login-label">
                  Pass-key
                </label>
                <input
                  type="password"
                  className="login-input"
                  placeholder="Enter Passkey"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error.type ? <p className="err-mssg">{error.mssg}</p> : null}
              </div>
              <div className="forgot-password">Forgot Password / User ID</div>
              <button className="submit-button" onClick={submit}>
             {loading? "Loading...":"Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
