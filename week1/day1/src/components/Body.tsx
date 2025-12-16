import heroImg from '../assets/hero-iphone.jpg';
import Card from './Card';
import HeroCard from './HeroCard';

interface CardItem {
  headerText: string;
  subText: string;
  buttonText: string;
  imgSrc: string;
}

interface BodyProps {
  cardItems: CardItem[];
}

const Body: React.FC<BodyProps> = ({ cardItems }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      {/* Hero Section */}
      <h1 className='text-5xl font-semibold mt-4 mb-4'>iPhone</h1>
      <p className='text-xl mb-4'>
        Say hello to the latest generation of iPhone.
      </p>
      <div className='flex justify-center items-center p-4'>
        <button className='cursor-pointer rounded-4xl bg-blue-500 px-5 py-2.5 text-lg text-white mr-5'>
          Learn more
        </button>
        <button className='cursor-pointer rounded-4xl bg-white-500 px-5 py-2.5 text-lg text-blue-500 outline outline-2 outline-blue-500'>
          Shop iPhone
        </button>
      </div>
      <img src={heroImg} alt='iPhone' />

      {/* Hero Card */}
      <HeroCard
        headerText='Give something special.'
        subText="Find what they've been waiting for all year."
        buttonText='Shop gifts'
      />

      {/* Products Section */}
      <div className='flex flex-wrap justify-center'>
        {cardItems.map((item, idx) => (
          <div
            key={item.headerText + '-' + idx}
            className='w-full md:w-1/2 flex justify-center'
          >
            <Card
              headerText={item.headerText}
              subText={item.subText}
              buttonText={item.buttonText}
              imgSrc={item.imgSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
