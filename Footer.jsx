// import logoImage from './snapvisa-logo.png'; // Replace with your logo path
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icons

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
          {/* <LogoImage src={logoImage} alt="SnapVisa Logo" /> */}
          <Tagline>Your Fast Track to U.S Visa Appointments</Tagline>
        </LogoSection>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <faEnvelope />
            </ContactIcon>
            <a href="mailto:hello@snapvisa.in" style={{ textDecoration: 'none', color: 'inherit' }}>hello@snapvisa.in</a>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <faWhatsapp />
            </ContactIcon>
            <a href="tel:+916387739110" style={{ textDecoration: 'none', color: 'inherit' }}>+91 6387739110</a>
          </ContactItem>
        </ContactInfo>
      </ContentWrapper>
      <SocialLinks>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <faFacebook />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <faTwitter />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <faInstagram />
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