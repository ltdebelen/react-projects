interface HeroCardProps {
  headerText: string;
  subText: string;
  buttonText: string;
}

const HeroCard = ({ headerText, subText, buttonText }: HeroCardProps) => {
  return (
    <div className='card flex flex-col justify-center items-center p-10 m-4 w-full'>
      <h1 className='text-5xl font-semibold mt-4 mb-4'>{headerText}</h1>
      <p className='text-xl mb-4'>{subText}</p>
      <button className='cursor-pointer rounded-4xl bg-blue-500 px-5 py-2.5 text-lg text-white'>
        {buttonText}
      </button>
    </div>
  );
};

export default HeroCard;
