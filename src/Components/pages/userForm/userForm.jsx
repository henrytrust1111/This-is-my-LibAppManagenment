import React from "react";
import "./userForm.css";

const UserForm = ({handleCancelUserForm}) => {
  return (
    <div className="userForm-container">
      <div className="userForm-container-left">
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            User Name :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Book ID :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Adhoor ID :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            D.O.B :
          </label>
          <input type="date" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Address :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Phone :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Email :
          </label>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="userForm-container-right">
      <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Gender :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            D.O.I :
          </label>
          <input type="date" className="input" />
        </div>
      </div>
      <button className="submit">Submit</button>
      <button className="submit cancel" onClick={handleCancelUserForm}>Cancel</button>
    </div>
  );
};

export default UserForm;
