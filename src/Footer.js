import React from "react";
// import footerImg from "./img/logo (1).png";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100"  }}
    >

      <div
        className="copyright" 
        style={{ color: "#c6c9d8", fontSize: "20px", opacity: "0.75" ,position:'center'  }}
       >
        <a href="https://portfolio009.herokuapp.com/">made by Abhishek patil</a>
      </div>
    </div>
  );
}

export default Footer;
