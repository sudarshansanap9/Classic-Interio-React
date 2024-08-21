import React from 'react';

export default function Contact() {
  return (
    <div>
      <div className="m-last">
        <div className="last">
          <div>
            <h1>Your dream home is just a click away</h1>
            <a href="/form">
              <button>GET STARTED</button>
            </a>
          </div>
        </div>
      </div>

      {/* Phone Icon */}
      <div className="phone-icon">
        <a href="tel:+919823646644" target="_blank" rel="noopener noreferrer">
          <img src="images/phone.png" alt="phone" />
        </a>
      </div>

      {/* WhatsApp Icon */}
      <div className="whatsapp-icon">
        <a href="https://wa.me/+919823646644" target="_blank" rel="noopener noreferrer">
          <img src="images/WhatsApp.png" alt="WhatsApp" />
        </a>
      </div>

      {/* Arrow Icon */}
      <div className="arrow-icon">
        <a href="/">
          <img src="images/arrow.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}
