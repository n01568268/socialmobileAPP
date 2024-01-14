import LogoS from "./assets/LogoS";
import React, { useState } from "react";
import "./styles.scss";

export default function Footer() {
  const [isAboutPopupOpen, setAboutPopupOpen] = useState(false);

  const handleAboutClick = () => {
    setAboutPopupOpen(true);
  };

  const handleCloseAboutPopup = () => {
    setAboutPopupOpen(false);
  };

  return (
    <div className="Footer">
      <div className="FooterContent">
        <LogoS />
        <div className="FooterLinks">
          <a href="#">Home</a>
          <a onClick={handleAboutClick}>About</a>
          <a href="mailto:contact@example.com">Contact</a>
        </div>
      </div>
      {isAboutPopupOpen && (
        <div className="Popup">
          <div className="PopupContent">
            <h2>About Us</h2>
            <p>
              Epic bring you closer to the people and things you love. <br />
              Epic is a free photo and video sharing app available on iPhone and
              Android. <br /> People can upload photos or videos to our service
              and share them with their ..
            </p>
            <button className="CloseButton" onClick={handleCloseAboutPopup}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="FooterInfo">
        <div>Email: contact@epic.com</div>
        <div>Phone: +1 234-567-890</div>
        <div>Address: 123 Main Street, Toronto, Ontario, Canada</div>
      </div>
    </div>
  );
}
