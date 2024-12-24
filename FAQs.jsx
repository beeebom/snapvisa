// import questionMarkImage from './question-mark.png';
import styled from 'styled-components';
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
            {/* <img src={questionMarkImage} alt="Question Mark" style={{ maxWidth: '100%' }} /> */}
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
