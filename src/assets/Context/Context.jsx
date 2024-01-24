import React, { createContext } from "react";

export const MyContext = createContext(null);
const Context = ({ children }) => {
  const users = [
    {
      id: 1,
      name: "Prithal",
      address: "KolKata",
      userID: "20511xT",
      gender: "Female",
      mail: "abcd@gmail.com",
      phone: "12345678901",
      isAdmin: true,
      image: "./Images/usersImages/am_antir_vepu-1 1 (3).png",
    },
    {
      id: 2,
      name: "Mandy Williams",
      address: "KolKata",
      userID: "cs/17/661",
      gender: "Male",
      mail: "abcd@gmail.com",
      phone: "555",
      isAdmin: false,
      image: "./Images/usersImages/am_antir_vepu-1 1 (4).png",
    },
    {
      id: 3,
      name: " Aanand",
      address: "Burnpur",
      userID: "20511xT",
      gender: "Male",
      mail: "ananda@outlook.com",
      phone: "2255889977",
      isAdmin: true,
      image: "./Images/usersImages/am_antir_vepu-1 1 (5).png",
    },
    {
      id: 4,
      name: "Gopinath",
      address: "Burdwan ",
      userID: "207oxT",
      gender: "Male",
      mail: "asdf@mai.com",
      phone: "5656565656",
      isAdmin: false,
      image: "./Images/usersImages/am_antir_vepu-1 1 (6).png",
    },
  ];
  const books=[
    {
      id:1,
      name:"good book",
      author:"Sandra Prince",
      bookId: "20511xT",
      pages:255,
      publisher: "Ananda Publisher",
      price:"₹ 379",
      categories:"Story",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1 (1).png"
    },
    {
      id:2,
      name:"Aam antir bhenpu",
      author:"Sandra Prince",
      bookId: "20511xT",
      pages: 444,
      publisher: "Belle Rose",
      price:"₹ 321",
      categories:"Story",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1 (2).png"
    },
    {
      id:3,
      name:"Fundamentals of modern Biology",
      author:"Charles Babbage",
      bookId: "2001FMB",
      pages:255,
      publisher: "Deuce Style",
      price:"₹ 379",
      categories:"Science",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1.png"
    },
    {
      id:4,
      name:"good book",
      author:"Sandra Prince",
      bookId: "20511xT",
      pages:255,
      publisher: "Ananda Publisher",
      price:"₹ 379",
      categories:"Science",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1 (1).png"
    },
    {
      id:5,
      name:"good book",
      author:"Sandra Prince",
      bookId: "20511xT",
      pages: 564,
      publisher: "Ananda Publisher",
      price:"₹ 379",
      categories:"Science",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1 (2).png"
    },
    {
      id:6,
      name:"good book",
      author:"Sandra Prince",
      bookId: "20511xT",
      pages:255,
      publisher: "Ananda Publisher",
      price:"₹ 379",
      categories:"Science",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1.png"
    },
    {
      id:7,
      name:"good book",
      author:"Sandra Prince",
      bookId: "20511xT",
      pages:255,
      publisher: "Ananda Publisher",
      price:"₹ 379",
      categories:"Story",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1 (1).png"
    },
    {
      id:8,
      name:"good book",
      author:"Sandra Prince",
      bookId: "20511xT",
      pages:255,
      publisher: "Ananda Publisher",
      price:"₹ 379",
      categories:"Story",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1 (1).png"
    },
    {
      id:9,
      name:"Beauty and the Beast",
      author:"Trust Henry",
      bookId: "2011BB",
      pages:255,
      publisher: "Mary Stiles",
      price:"₹ 600",
      categories:"Drama",
      languages:"English",
      images:"./Images/booksImages/am_antir_vepu-1 1.png"
    },
  ]
  const logginUser=[];
  return (
    <>
      <MyContext.Provider value={{ users,logginUser,books }}>{children}</MyContext.Provider>
    </>
  );
};

export default Context;
