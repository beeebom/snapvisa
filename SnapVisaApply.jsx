const SnapVisaApply = () => {
    return (
      <div className="apply-container">
        <h2 className="apply-title">Apply</h2>
        <div className="apply-guidelines">
          <h3>Service Guidelines:</h3>
          <ol>
            <li>SnapVisa team will require access to your USVisaScheduling account to book an appointment slot.</li>
            <li>We try our best to accommodate location and date preferences but can’t guarantee adherence to them.</li>
          </ol>
        </div>
        <div className="apply-form">
          <h3>Get yourself early appointments!</h3>
          <form>
            <label>Name *</label>
            <input type="text" placeholder="Your answer" required />
  
            <label>Phone number *</label>
            <input type="text" placeholder="We kindly request your WhatsApp number for efficient communication." required />
  
            <label>Current stage of your application *</label>
            <input type="text" placeholder="Your answer" required />
  
            {/* Add more form fields as necessary */}
  
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  export default SnapVisaApply