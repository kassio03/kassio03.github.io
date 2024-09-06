import QuoteLeft from '../../assets/svg/quoteLeft.svg?react';
import QuoteRight from '../../assets/svg/quoteRight.svg?react';

interface QuoteProps {
  text: string;
}
const Quote = ({ text }: QuoteProps) => {
  return (
    <div>
      <QuoteLeft className="fill-solidSeason" />
      <p>
        {text}
        <QuoteRight className="mb-1 inline-block fill-solidSeason" />
      </p>
    </div>
  );
};

export default Quote;
