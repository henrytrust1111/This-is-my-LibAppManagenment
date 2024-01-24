import React from 'react'

const BooksForm = ({handleCancelBookForm}) => {
  return (
    <div className="userForm-container">
      <div className="userForm-container-left">
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Book Name :
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
            Adhoor Name :
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
            Publisher ID :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Price :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Pages :
          </label>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="userForm-container-right">
      <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Genre :
          </label>
          <input type="text" className="input" />
        </div>
      <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Type :
          </label>
          <input type="text" className="input" />
        </div>
        <div className="home-check-form-wrapper">
          <label htmlFor="" className="label">
            Lang :
          </label>
          <input type="text" className="input" />
        </div>
      </div>
      <button className="submit">Submit</button>
      <button className="submit cancel" onClick={handleCancelBookForm}>Cancel</button>
    </div>
  )
}

export default BooksForm