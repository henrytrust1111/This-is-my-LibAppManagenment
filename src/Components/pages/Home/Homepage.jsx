import React, { useContext, useState } from "react";
import "./homepage.css";
import CheckIn from "./CheckIn";
import Checkout from "./Checkout";
import Books from "../books/Books";
import Users from "../users/Users";
import UserForm from "../userForm/userForm";
import BooksForm from "../books/BooksForm";
import { useNavigate } from "react-router";
import { MyContext } from "../../../assets/Context/Context";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const [checkin, setCheckin] = useState(false);
  const [checkout, setCheckout] = useState(true);
  const [books, setBooks] = useState(false);
  const [users, setUsers] = useState(false);
  const [userForm, setUserForm] = useState(false);
  const [bookForm, setBookForm] = useState(false);

  const nav = useNavigate()
  const {logginUser} = useContext(MyContext)
  console.log(logginUser);

  const handleCheckin = () => {
    setCheckin(true);
    setCheckout(false);
    setBooks(false);
    setUsers(false);
  };
  const handleCheckout = () => {
    setCheckin(false);
    setCheckout(true);
    setBooks(false);
    setUsers(false);
  };
  const handleBooks = () => {
    setCheckin(false);
    setCheckout(false);
    setBooks(true);
    setUsers(false);
  };
  const handleUsers = () => {
    setCheckin(false);
    setCheckout(false);
    setBooks(false);
    setUsers(true);
  };
  const handleUserForm = () => {
    setCheckin(false);
    setCheckout(false);
    setBooks(false);
    setUsers(false);
    setUserForm(true);
  };
  const handleCancelUserForm = () => {
    setCheckin(false);
    setCheckout(false);
    setBooks(false);
    setUsers(true);
    setUserForm(false);
  };
  const handleBookForm = () => {
    setCheckin(false);
    setCheckout(false);
    setBooks(false);
    setUsers(false);
    setUserForm(false);
    setBookForm(true);
    console.log("Hello Rose");
  };
  const handleCancelBookForm = () => {
    setCheckin(false);
    setCheckout(false);
    setBooks(true);
    setUsers(false);
    setUserForm(false);
    setBookForm(false);
  };
  const logout=()=>{
    nav("/login")
  }

  const current_time = new Date();
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formatted_time = current_time.toLocaleDateString("en-US", options);

  const mytime = new Date();

  const timeList = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time_time = mytime.toLocaleTimeString("en-US", timeList);

  const current_date = new Date();
  const day_of_month = ("0" + current_date.getDate()).slice(-2);

  const current_month = new Date();
  const fomat = { month: "short" };
  const abbreviated_month = current_month.toLocaleDateString("en-US", fomat);

  console.log("Abbreviated month:", abbreviated_month);

  return (
    <div className="homepage-wrapper">
      <div className="homepage-left">
        <div className="homepage-left-wrapper">
          <div className="homepage-left-wrapper-logoHolder">
            <img src="src/Components/Images/Logo.png" alt="" />
          </div>
          <div className="navigation-wrapper">
            <div className="navigation-icons-container">
              <div className={`${(checkin || checkout)? "active-border icon-container":"icon-container"}`}>
                <img
                  src="src/Components/Images/material-symbols_local-library-outline.svg"
                  alt=""
                />
              </div>
              <div className={`${(books)? "active-border icon-container":"icon-container"}`}>
                <img
                  src="src/Components/Images/healthicons_register-book-outline.svg"
                  alt=""
                />
              </div>
              <div className={`${(users)? "active-border icon-container":"icon-container"}`}>
                <img src="src/Components/Images/Staff.svg" alt="" />
              </div>
              <div className="icon-container">
                <img src="src/Components/Images/User Shield.png" alt="" />
              </div>
              <div className="icon-container">
                <img src="src/Components/Images/gala_search.svg" alt="" />
              </div>
              <div className="icon-container">
                <img
                  src="src/Components/Images/ic_sharp-attach-money.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="navigation-texts-container">
              <div
                className="icon-container icons-description"
                onClick={handleCheckout}
              >
                Check- in / out
              </div>
              <div
                className="icon-container icons-description"
                onClick={handleBooks}
              >
                Books
              </div>
              <div
                className="icon-container icons-description"
                onClick={handleUsers}
              >
                Users
              </div>
              <div className="icon-container icons-description">Admin</div>
              <div className="icon-container icons-description">Search</div>
              <div className="icon-container icons-description">Fine</div>
            </div>
          </div>
          <div className="setting-logout-wrapper">
            <div className="setting">
              <img
                src="src/Components/Images/mingcute_settings-7-line.svg"
                alt=""
              />
            </div>
            <div className="logout" onClick={logout}>
              <img
                src="src/Components/Images/logout.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-right">
        <div className="homepage-container">
          <div className="homepage-right-top">
            <div className="date-profile">
              <div className="date">
                <p>
                  {formatted_time} <br /> {time_time}
                </p>
                <img src="src/Components/Images/twemoji_calendar.svg" alt="" />
                <div className="calender-day">{day_of_month}</div>
                <div className="calender-month">{abbreviated_month}</div>
              </div>
              <div className="profile-image">
                <img src={logginUser.image} alt="" />
              </div>
            </div>
            <div className="checks">
              {books ? (
                <p className="book-tag">Books</p>
              ) : userForm ? (
                <p className="book-tag">Users</p>
              ) : bookForm ? (
                <p className="book-tag">Books</p>
              ) : users ? (
                <p className="book-tag">Users</p>
              ) : (checkin||checkout)? (
                <>
                  <p>CHECK-IN</p>
                  <div className="switch">
                    {toggle ? (
                      <img
                        src="src/Components/Images/toggle switch (2).svg"
                        alt=""
                        onClick={() => {
                          setCheckin(true);
                          setToggle(!toggle);
                        }}
                      />
                    ) : (
                      <img
                        src="src/Components/Images/toggle switch.svg"
                        alt=""
                        onClick={() => {
                          setCheckout(true);
                          setToggle(!toggle);
                        }}
                      />
                    )}
                  </div>
                  <p>CHECK-OUT</p>
                </>
              ):null}
            </div>
          </div>
          {checkout ? (
            <>{toggle ? <Checkout /> : <CheckIn />}</>
          ) : books ? (
            <Books handleBook={handleBookForm} />
          ) : users ? (
            <Users handleUsers={handleUserForm} />
          ) : userForm ? (
            <UserForm handleCancelUserForm={handleCancelUserForm} />
          ) : bookForm ? (
            <BooksForm handleCancelBookForm={handleCancelBookForm} />
          ) : (
            <CheckIn />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
