import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let ageInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileNoInputRef = useRef();
  let profilePicInputRef = useRef();

  let [profilePic, setprofilePic] = useState("/images/images.png");

  let onSignup = async () => {
    let sendData = new FormData();

    sendData.append("firstName", firstNameInputRef.current.value);
    sendData.append("lastName", lastNameInputRef.current.value);
    sendData.append("age", ageInputRef.current.value);
    sendData.append("email", emailInputRef.current.value);
    sendData.append("password", passwordInputRef.current.value);
    sendData.append("mobileNo", mobileNoInputRef.current.value);

    for (let i = 0; i < profilePicInputRef.current.files.length; i++) {
      sendData.append("profilePic", profilePicInputRef.current.files[i]);
    }

    let requestOptions = {
      method: "POST",
      body: sendData,
    };

    let jsonData = await fetch("http://localhost:4567/Signup", requestOptions);
    let jsoData = await jsonData.json();
    console.log(jsoData);
    alert(jsoData.msg);
    console.log(sendData);
  };

  return (
    <div>
      <form>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
          <label>FirstName</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>LastName</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Age</label>
          <input ref={ageInputRef}></input>
        </div>
        <div>
          <label>Email</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>Password</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div>
          <label>MobileNo</label>
          <input ref={mobileNoInputRef}></input>
        </div>
        <div>
          <label>ProfilePic</label>{" "}
          <input
            type="file"
            ref={profilePicInputRef}
            accept="image/*"
            onChange={(eo) => {
              let selectedImgPath = URL.createObjectURL(eo.target.files[0]);
              setprofilePic(selectedImgPath);
            }}
          ></input>
        </div>
        <img src={profilePic} alt="imageasdfghj"></img>
        <div>
          <button
            type="button"
            onClick={() => {
              onSignup();
            }}
          >
            Signup
          </button>
        </div>
      </form>
      <br></br>
      <Link to="/" className="link">
        Login
      </Link>
    </div>
  );
}

export default Signup;
