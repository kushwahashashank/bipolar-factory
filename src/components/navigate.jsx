import React from "react";
import Link from "next/link";

const Navigate = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          positon: "sticky",
          top: "0",
          padding: "20px",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Link
          style={{
            padding: "10px",
            marginLeft: "15px",
            marginRight: "15px",
            border: "1px solid #e1dcdc",
            backgroundColor: "#e1dcdc",
            color: "black",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          href="/"
        >
          Pages
        </Link>
        <Link
          style={{
            padding: "10px",
            marginLeft: "15px",
            marginRight: "15px",
            border: "1px solid #e1dcdc",
            backgroundColor: "#e1dcdc",
            color: "black",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          href="/charts"
        >
          Charts
        </Link>
        <Link
          style={{
            padding: "10px",
            marginLeft: "15px",
            marginRight: "15px",
            border: "1px solid #e1dcdc",
            backgroundColor: "#e1dcdc",
            color: "black",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          href="/cards"
        >
          Cards
        </Link>
        <Link
          style={{
            padding: "10px",
            marginLeft: "15px",
            marginRight: "15px",
            border: "1px solid #e1dcdc",
            backgroundColor: "#e1dcdc",
            color: "black",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          href="/form"
        >
          Form
        </Link>
        <Link
          style={{
            padding: "10px",
            marginLeft: "15px",
            marginRight: "15px",
            border: "1px solid #e1dcdc",
            backgroundColor: "#e1dcdc",
            color: "black",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          href="/tables"
        >
          Tables
        </Link>
      </div>
    </>
  );
};

export default Navigate;
