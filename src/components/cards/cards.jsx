import React from "react";
import "./cards.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Navigate } from "../index";
const Cards = () => {
  return (
    <>
      <Navigate />
      <div className="cards">
        <div className="cards-left-conatiner">
          <img
            className="cards-image"
            src="https://s3-alpha-sig.figma.com/img/3579/0eaa/ffb7b894757284ab45e7f7045ffd1997?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SrPyFYsYEGdzQbZ7s-l79U1GwWtAowOZ8Dm5zKenFU5T-UxN6aQHEdGuZ0f7uth3CFJt3c5qZ3rHBpe1bAgWT7niHSXW45S1vu~JnaDYK~wFjeLZNft9hvSyck0kjQo4Ihf224AcusUCJ9tALAkT-Q~yvigp~N7pN5fvR-YjZi8a77ZRWtuWGbent0gavXFvKrJ0-cZZ3xF7xDLBbmhNar0J0PqfsHGDSkbGHEjSoyJhNQ5o6E5c4YkpXEKKhwqH4qm184Trz~Owbkqajw0W8NSWYXzFVUxbTdI0wY6sb7abOEq5~-DU4d1UksIEygnFzZcGiKs9H7oF2d3HiX4YbA__"
            alt=""
          />
          <div className="cards-content">
            <h1>Bank Entrance-front-view Camera1</h1>
            <div className="cards-content-desc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="black"
                  d="M28.5 32a3.476 3.476 0 0 1-2.475-1.025l-4.128-4.128a6.496 6.496 0 0 1-7.348-8.956l.588-1.34l4.156 4.156a1.023 1.023 0 0 0 1.414 0a.999.999 0 0 0 0-1.414l-4.156-4.157l1.34-.588a6.497 6.497 0 0 1 8.956 7.349l4.128 4.128A3.5 3.5 0 0 1 28.5 32m-6.03-7.409l4.97 4.97a1.535 1.535 0 0 0 2.12 0a1.499 1.499 0 0 0 0-2.121l-4.969-4.97l.188-.583A4.496 4.496 0 0 0 20.5 16q-.126 0-.25.007l1.872 1.872a3 3 0 0 1 0 4.242a3.072 3.072 0 0 1-4.243 0l-1.872-1.872Q16 20.374 16 20.5a4.497 4.497 0 0 0 5.888 4.28Z"
                ></path>
                <path
                  fill="black"
                  d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h7v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
                ></path>
              </svg>
              <p>3 Recipes Added</p>
            </div>
            <div className="cards-content-desc">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "18px", width: "18px" }}
              >
                <path
                  d="M7.08535 3C7.29127 2.4174 7.84689 2 8.5 2H11.5C12.1531 2 12.7087 2.4174 12.9146 3H14.5C15.3284 3 16 3.67157 16 4.5V9.20703C15.6777 9.11588 15.3434 9.05337 15 9.02242V4.5C15 4.22386 14.7761 4 14.5 4H12.9146C12.7087 4.5826 12.1531 5 11.5 5H8.5C7.84689 5 7.29127 4.5826 7.08535 4H5.5C5.22386 4 5 4.22386 5 4.5V16.5C5 16.7761 5.22386 17 5.5 17H9.59971C9.78261 17.3578 10.0035 17.6929 10.2572 18H5.5C4.67157 18 4 17.3284 4 16.5V4.5C4 3.67157 4.67157 3 5.5 3H7.08535ZM8.5 3C8.22386 3 8 3.22386 8 3.5C8 3.77614 8.22386 4 8.5 4H11.5C11.7761 4 12 3.77614 12 3.5C12 3.22386 11.7761 3 11.5 3H8.5ZM19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM14.5 12C14.2239 12 14 12.2239 14 12.5V14.5C14 14.7761 14.2239 15 14.5 15C14.7761 15 15 14.7761 15 14.5V12.5C15 12.2239 14.7761 12 14.5 12ZM14.5 17.125C14.8452 17.125 15.125 16.8452 15.125 16.5C15.125 16.1548 14.8452 15.875 14.5 15.875C14.1548 15.875 13.875 16.1548 13.875 16.5C13.875 16.8452 14.1548 17.125 14.5 17.125Z"
                  fill="#212121"
                />
              </svg>
              <p>today, 04:45pm: Unidentified face detected</p>
            </div>
            <div className="cards-content-desc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
                ></path>
              </svg>
              <p>Coimbatore branch</p>
            </div>
            <div className="cards-footer-icons">
              <div
                style={{ backgroundColor: "#00DB4ADE", fontSize: "12px" }}
                className="btn"
              >
                Active
              </div>
              <div className="icons-right">
                <RiDeleteBin6Line
                  style={{ color: "#ED1C24", fontSize: "18px" }}
                  className="icons-right-icon"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="icons-right-icon"
                >
                  <path
                    fill="#2f2f2f"
                    d="M18 9c0-1.103-.897-2-2-2h-1.434l-2.418-4.029A2.008 2.008 0 0 0 10.434 2H5v2h5.434l1.8 3H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3l4 2v-7l-4 2zm-1.998 9H4V9h12l.001 4H16v1l.001.001z"
                  ></path>
                  <path fill="#2f2f2f" d="M6 14h6v2H6z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="icons-right-icon"
                >
                  <path
                    fill="#2f2f2f"
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-right-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="clipboard"
          >
            <path
              fill="#222222"
              d="M13.986 4a2.25 2.25 0 0 0-2.236-2h-3.5a2.25 2.25 0 0 0-2.236 2H4.25A2.25 2.25 0 0 0 2 6.25v13.5A2.25 2.25 0 0 0 4.25 22h8.56a6.518 6.518 0 0 1-1.078-1.5H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v4.826a6.554 6.554 0 0 1 1.5-.057V6.25A2.25 2.25 0 0 0 15.75 4zm.009.096L14 4.25c0-.052-.002-.103-.005-.154M8.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5m3.707 10.604a6.535 6.535 0 0 1 2.147-2.147l.926-.927a.75.75 0 1 0-1.06-1.06L9 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"
            ></path>
          </svg>
          <h1>Recipe Management</h1>
          <p>Manage</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
