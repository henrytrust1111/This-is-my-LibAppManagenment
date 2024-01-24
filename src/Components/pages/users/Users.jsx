import React, { useContext } from "react";
import "./users.css";
import { MyContext } from "../../../assets/Context/Context";

const Users = ({ handleUsers }) => {
  const { users } = useContext(MyContext);
  console.log(users);
  return (
    <div className="books-page">
      <div className="books-features"></div>
      <div className="list-of-books">
        {users.map((e) => (
          <div className="the-books-container" key={e.id}>
            <div className="the-books-wrapper">
              <div className="the-book-image">
                <img
                  src={e.image}
                  alt=""
                />
              </div>
              <div className="the-book-contents">
                <p>Name: {e.name}</p>
                <p>Address: Kolkata</p>
                <p>User ID : 20511xT</p>
                <p>Gender : Male</p>
                <p>Mail : abcd@gmail.com</p>
                <p>Phone : 1234567890</p>
              </div>
            </div>
            <div className="btn-delete">DELETE</div>
          </div>
        ))}
      </div>
      <div className="add-icon">
        <div
          className="add-icon-holder"
          onClick={() => {
            handleUsers();
            console.log("HEllo");
          }}
        >
          <img src="src/Components/Images/mingcute_add-line.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Users;
