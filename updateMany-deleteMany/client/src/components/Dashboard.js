import React from "react";
import { useSelector } from "react-redux";
import TopNavigation from "./TopNavigation";

function Dashboard() {
  let storeObj = useSelector((store) => {
    console.log(store);
    return store;
  });
  let deleteProfile = async () => {
    let reqOptions = {
      method: "DELETE",
    };
    let url = `http://localhost:4567/deleteProfile?email=${storeObj.loginDetails.email}`;
    let JSONData = await fetch(url, reqOptions);
    let JSOData = await JSONData.json();
    alert(JSOData.msg);
  };
  return (
    <div>
      <TopNavigation></TopNavigation>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          deleteProfile();
        }}
      >
        Delete Profile
      </button>
      <h1>
        {storeObj.loginDetails.firstName} {storeObj.loginDetails.lastName}
      </h1>
      <img
        src={`http://localhost:4567/${storeObj.loginDetails.profilePic}`}
      ></img>
    </div>
  );
}

export default Dashboard;
