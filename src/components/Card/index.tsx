interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  paragraph: string;
}

const Card = ({ title, paragraph, className }: CardProps) => {
  return (
    <div className={`h-full overflow-hidden rounded-[16px] ${className}`}>
      <h2 className="flex h-[34px] items-center justify-center bg-solidSeason text-sm text-white min-[425px]:text-base">
        {title}
      </h2>
      <p className="h-full min-h-[95px] bg-solidSecondary px-4 py-2 text-center text-xs min-[425px]:px-6 min-[425px]:py-3 min-[425px]:text-sm">
        {paragraph}
      </p>
    </div>
  );
};

export default Card;
