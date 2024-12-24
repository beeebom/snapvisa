const SnapVisaProcedure = () => {
    return (
      <div className="procedure-container">
        <h2 className="procedure-title">Procedure</h2>
        <div className="procedure-steps">
          <div className="step">
            <h1 className="step-number">1</h1>
            <h3 className="step-title">Applicant fills DS-160 and pays the visa fee</h3>
            <p className="step-description">
              The applicant completes the DS-160 form and submits the visa fees. The Snap Visa team is available to assist with any inquiries that may arise.
            </p>
          </div>
          <div className="step">
            <h1 className="step-number">2</h1>
            <h3 className="step-title">Scheduling an Early Appointment</h3>
            <p className="step-description">
              SnapVisa team logs into applicant’s USVisaScheduling account and works round the clock to book appointment dates that align with applicant’s needs.
            </p>
          </div>
          <div className="step">
            <h1 className="step-number">3</h1>
            <h3 className="step-title">SnapVisa Fee Payment</h3>
            <p className="step-description">
              Once the slots are confirmed, the applicant will promptly remit payment to the SnapVisa team!
            </p>
          </div>
        </div>
        <p className="procedure-note">
          *The applicant is required to complete the DS-160 application form and remit the associated visa fees.
        </p>
      </div>
    );
  };
   export default SnapVisaProcedure