interface CardProps {
  title: string;
  paragraph: string;
}

const Card = ({ title, paragraph }: CardProps) => {
  return (
    <div className="m-2 max-w-[300px] overflow-hidden rounded-[16px]">
      <h1 className="flex h-[34px] items-center justify-center bg-solidSeason">{title}</h1>
      <p className="min-h-[95px] bg-solidSecondary px-6 py-3">{paragraph}</p>
    </div>
  );
};

export default Card;
