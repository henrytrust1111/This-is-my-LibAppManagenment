import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-page">
     <div className="checkout-wrapper">
     <div className="home-check-form-wrapper">
        <label htmlFor="" className="label">
          User ID :
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
          Date :
        </label>
        <input type="date" className="input" />
      </div>
      <div className="home-check-form-wrapper">
        <label htmlFor="" className="label">
          Return :
        </label>
        <input type="date" className="input" />
      </div>
      <button type="button" className="submit btn-submit">Submit</button>
     </div>
    </div>
  );
};

export default Checkout;
