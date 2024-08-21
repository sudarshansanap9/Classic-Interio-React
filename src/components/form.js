import React from 'react';

const FormComponent = () => {
  return (
    <div>
      {/* Favicon Link */}
      <link rel="icon" type="image/png" href="images/fevicon.png" />

      {/* Embedded Google Form with a unique title */}
      <iframe 
        title="Google Form for Feedback" 
        src="https://docs.google.com/forms/d/e/1FAIpQLSeNY-37WKscphw_rQdbeKhBCt2MvJxdyioTeQ0k5rR-Ua3sJA/viewform?embedded=true" 
        width="100%" 
        height="956" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0">
        Loading…
      </iframe>
    </div>
  );
};

export default FormComponent;
