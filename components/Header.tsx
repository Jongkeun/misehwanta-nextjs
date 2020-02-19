import Link from "next/link";
import { useState } from "react";

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const myFunc = (e: any): void => {
    console.log(e);
    return setIsMobile(!isMobile);
  };
  return (
    <div className={isMobile ? "topnav responsive" : "topnav"} id="myTopnav">
      <Link href="/">
        <a className="active">Index</a>
      </Link>
      <Link href="/home">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <a className="icon" onClick={myFunc}>
        <i className="fa fa-bars"></i>
      </a>
      <style jsx>
        {`
          .topnav {
            overflow: hidden;
            background-color: #333;
          }

          .topnav a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }

          .topnav a:hover {
            background-color: #ddd;
            color: black;
          }

          .topnav a.active {
            background-color: #4caf50;
            color: white;
          }

          .topnav .icon {
            display: none;
          }

          @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {
              display: none;
            }
            .topnav a.icon {
              float: right;
              display: block;
            }
          }

          @media screen and (max-width: 600px) {
            .topnav.responsive {
              position: relative;
            }
            .topnav.responsive .icon {
              position: absolute;
              right: 0;
              top: 0;
            }
            .topnav.responsive a {
              float: none;
              display: block;
              text-align: left;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
