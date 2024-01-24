import React from 'react'
import "./checkin.css"

const CheckIn = () => {
  return (
    <div className="homepage-right-button">
    <div className="homepage-check-form">
      <div className="home-check-form-wrapper">
        <label htmlFor="" className="label">
          User ID :
        </label>
        <input type="text" className="input" />
      </div>
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
          Book Name :
        </label>
        <input type="text" className="input" />
      </div>
      <div className="home-check-form-wrapper">
        <label htmlFor="" className="label">
          Publisher :
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
    </div>
    <div className="homepage-book-condition">
      <p>Bank Condition:</p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="book-condition-input"
      >
        Please mention the book condition, damages(if any...)
      </textarea>
    </div>
    <button type="button" className="submit">Submit</button>
  </div>
  )
}

export default CheckIn
