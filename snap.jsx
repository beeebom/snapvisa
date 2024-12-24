import React from 'react';
import './App.css'; 

const SnapVisaOffer = () => {
  return (
    <div className="snapvisa-container">
      <div className="snapvisa-content">
        <img src="/path/to/snapvisa-logo.png" alt="SnapVisa Logo" className="logo" />
        <h2>BEATING THE CLOCK FOR YOUR U.S. VISA</h2>
        <h1>B1/B2 APPOINTMENTS IN 30 DAYS!</h1>
        <p>
          Waiting months/years for a visa slot? Not with Snap Visa. No more endless monitoring and sleepless nights.
          Our relentless team works 24/7 to deliver results, period.
        </p>
        <button className="cta-button">BOOK YOUR SLOT @ <span className="original-price">₹25,999</span> ₹14,999/-*</button>
        <p className="note">*Does not include visa fee. Limited time offer.</p>
      </div>
      <div className="snapvisa-image">
        <img src="/path/to/passport-camera-map.png" alt="Passport, Camera, and Map" />
      </div>
    </div>
  );
};

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

const App = () => {
  return (
    <div>
      <SnapVisaOffer />
      <SnapVisaProcedure />
      <SnapVisaApply />
    </div>
  );
};


import peopleStars from './people-stars.png'; // Image at the top right
import passportImage from './passport.png'; // Image at the bottom left

const TestimonialContainer = styled.div`
  font-family: sans-serif; // Or your preferred font
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; // Center horizontally
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns
  grid-gap: 20px;
  width: 80%; // Occupy most of the width
  max-width: 1200px;
  margin-bottom: 20px;
`;

const TestimonialCard = styled.div`
  background-color: #f8f8f8; // Light gray background
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const PersonName = styled.h3`
  color: #e91e63; // Pinkish color
  margin-bottom: 5px;
`;

const PersonTitle = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

const TestimonialText = styled.p`
  line-height: 1.4;
`;

const ImageContainerTopRight = styled.div`
  position: absolute; /* or fixed */
  top: 20px;
  right: 20px;
  width: 100px; /* Adjust as needed */
`;

const ImageContainerBottomLeft = styled.div`
    width: 200px;
    margin-top: 20px;
`;

const Testimonials = () => {
    const testimonialsData = [
        { name: "Divyang", title: "- Business Owner", text: "Snap Visa restored my control over my travel plans just when I needed it most. I have successfully secured my appointments for next week." },
        { name: "Mujtaba", title: "- Chartered Accountant", text: "Early US visa unlocked visa-on-arrival for a lot of other countries. Snap Visa secured slot in hometown itself next month." },
        { name: "Shubham", title: "- Mechanical Engineer", text: "I received a last-minute invitation to a business conference, and I managed to obtain my visa in just 25 days, well ahead of the conference dates." },
        { name: "Pranav", title: "- Software Engineer", text: "Snap Visa rescheduled my conflicting dates to consecutive slots in New Delhi, just a month later. They saved my trip and my brother's exam schedule." },
    ];

    return (
        <TestimonialContainer>
            <ImageContainerTopRight>
                <img src={peopleStars} alt="People Stars" style={{ maxWidth: '100%' }} />
            </ImageContainerTopRight>
            <Title>What are people saying about us?</Title>
            <TestimonialsGrid>
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index}>
                        <PersonName>{testimonial.name}</PersonName>
                        <PersonTitle>{testimonial.title}</PersonTitle>
                        <TestimonialText>{testimonial.text}</TestimonialText>
                    </TestimonialCard>
                ))}
            </TestimonialsGrid>
            <ImageContainerBottomLeft>
                <img src={passportImage} alt="Passport" style={{ maxWidth: '100%' }} />
            </ImageContainerBottomLeft>
        </TestimonialContainer>
    );
};

export default Testimonials;
import questionMarkImage from './question-mark.png';

const FAQContainer = styled.div`
  font-family: sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: left;
  width: 80%;
  max-width: 1200px;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Three columns
  grid-gap: 20px;
  width: 80%;
  max-width: 1200px;
`;

const FAQCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Question = styled.h3`
  color: #e91e63; // Pinkish color
  margin-bottom: 10px;
`;

const Answer = styled.p`
  line-height: 1.4;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
`;

const FAQs = () => {
  const faqData = [
    {
      question: 'Is SnapVisa associated with US embassy?',
      answer:
        'No. Snap Visa operates as an independent entity and has no affiliations with the U.S. Embassy whatsoever.',
    },
    {
      question: 'How does SnapVisa secure early appointments?',
      answer:
        'Our team monitors slots 24/7 to promptly book any cancelled or newly released dates for our clients.',
    },
    {
      question: 'Can the SnapVisa team operate without account access?',
      answer:
        'Early slots are in high demand and disappear quickly, making it hard to secure appointments without account access.',
    },
    {
      question: 'Does SnapVisa promise US Visa approval?',
      answer:
        'No. We provide early appointments and application assistance, but these services do not ensure visa approval.',
    },
    {
      question: 'Am I promised dates meeting my preferences?',
      answer:
        'We strive to accommodate location and date preferences but cannot guarantee them due to availability constraints.',
    },
    {
      question: 'Why trust SnapVisa?',
      answer:
        "We take pride in turning visa uncertainty into absolute confidence. With SnapVisa, your U.S. travel plans aren't a matter of 'if', but 'when'.",
    },
  ];

  return (
    <FAQContainer>
        <ImageContainer>
            <img src={questionMarkImage} alt="Question Mark" style={{ maxWidth: '100%' }} />
        </ImageContainer>
      <Title>FAQs</Title>
      <FAQGrid>
        {faqData.map((faq, index) => (
          <FAQCard key={index}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FAQCard>
        ))}
      </FAQGrid>
    </FAQContainer>
  );
};

export default FAQs;
import logoImage from './snapvisa-logo.png'; // Replace with your logo path

const FooterContainer = styled.footer`
  background-color: #fff; // White background
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  max-width: 1200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

const LogoImage = styled.img`
  max-width: 200px;
  margin-bottom: 10px;
`;

const Tagline = styled.p`
  font-size: 0.9em;
  color: #555;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ContactIcon = styled.div`
  margin-right: 10px;
  color: #558b2f; // Green color
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  color: #000;
  font-size: 1.2em;
  text-decoration: none;

  &:hover {
    color: #558b2f; // Green on hover
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLink = styled.a`
  margin: 0 15px;
  color: #00796b; // Teal color
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LogoSection>
          <LogoImage src={logoImage} alt="SnapVisa Logo" />
          <Tagline>Your Fast Track to U.S Visa Appointments</Tagline>
        </LogoSection>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <a href="mailto:hello@snapvisa.in" style={{ textDecoration: 'none', color: 'inherit' }}>hello@snapvisa.in</a>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaWhatsapp />
            </ContactIcon>
            <a href="tel:+916387739110" style={{ textDecoration: 'none', color: 'inherit' }}>+91 6387739110</a>
          </ContactItem>
        </ContactInfo>
      </ContentWrapper>
      <SocialLinks>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
      </SocialLinks>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Procedure</NavLink>
        <NavLink href="#">Apply</NavLink>
        <NavLink href="#">Reviews</NavLink>
        <NavLink href="#">FAQs</NavLink>
      </NavLinks>
    </FooterContainer>
  );
};

export default Footer;