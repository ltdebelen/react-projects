import heroImg from '../assets/hero-iphone.jpg';
import airpodsImg from '../assets/airpods.jpg';
import appleWatchImg from '../assets/apple-watch.jpg';
import ipadImg from '../assets/ipad.jpg';
import macbookImg from '../assets/macbook.jpg';
import Card from './Card';
import HeroCard from './HeroCard';

const Body = () => {
  // Card items data
  const cardItems = [
    {
      headerText: 'AirPods',
      subText: "The world's best in-ear Active Noise Cancellation.",
      buttonText: 'Learn more',
      imgSrc: airpodsImg,
    },
    {
      headerText: 'Apple Watch',
      subText: 'The ultimate way to watch your health.',
      buttonText: 'Learn more',
      imgSrc: appleWatchImg,
    },
    {
      headerText: 'iPad',
      subText:
        'Now with the speed of the A16 chip and double the starting storage.',
      buttonText: 'Learn more',
      imgSrc: ipadImg,
    },
    {
      headerText: 'MacBook',
      subText: 'Sky blue color. Sky high performance with M4.',
      buttonText: 'Learn more',
      imgSrc: macbookImg,
    },
  ];

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
        {cardItems.map((item) => (
          <div
            key={item.headerText}
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
