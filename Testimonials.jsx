// import peopleStars from './people-stars.png'; // Image at the top right
// import passportImage from './passport.png'; // Image at the bottom left
import styled from 'styled-components';
const TestimonialContainer = styled.div`
  font-family: sans-serif; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 20px;
  width: 80%; 
  max-width: 1200px;
  margin-bottom: 20px;
`;

const TestimonialCard = styled.div`
  background-color: #f8f8f8; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const PersonName = styled.h3`
  color: #e91e63; 
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
  position: absolute; 
  top: 20px;
  right: 20px;
  width: 100px; 
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
                {/* <img src={peopleStars} alt="People Stars" style={{ maxWidth: '100%' }} /> */}
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
                {/* <img src={passportImage} alt="Passport" style={{ maxWidth: '100%' }} /> */}
            </ImageContainerBottomLeft>
        </TestimonialContainer>
    );
};

export default Testimonials;
