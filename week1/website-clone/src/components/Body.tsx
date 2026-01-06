import heroImg from '../assets/hero-iphone.jpg';
import Card from './Card';
import HeroCard from './HeroCard';

interface CardItem {
  headerText: string;
  subText: string;
  buttonText: string;
  buttonHref?: string;
  imgSrc: string;
}

interface BodyProps {
  cardItems: CardItem[];
}

const Body: React.FC<BodyProps> = ({ cardItems }) => {
  return (
    <div>
      <section
        className='flex items-center flex-col bg-cover bg-center w-full h-[700px]'
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label='Hero section'
      >
        {/* Hero Section */}
        <div className='p-5 flex items-center flex-col'>
          <h1 className='text-5xl font-semibold mt-4 mb-4'>iPhone</h1>
          <p className='text-[28px]'>
            Say hello to the latest generation of iPhone.
          </p>
        </div>
        <div
          className='flex justify-center items-center'
          aria-label='Hero actions'
        >
          <a
            href='#'
            className='cursor-pointer rounded-4xl bg-blue-500 px-5 py-2.5 text-lg text-white mr-5 inline-block text-center'
            role='button'
          >
            Learn more
          </a>
          <a
            href='#'
            className='cursor-pointer rounded-4xl bg-white-500 px-5 py-2.5 text-lg text-blue-500 outline outline-2 outline-blue-500 inline-block text-center'
            role='button'
          >
            Shop iPhone
          </a>
        </div>
      </section>

      {/* Hero Card */}
      <section aria-label='Gift promotion'>
        <HeroCard
          headerText='Give something special.'
          subText="Find what they've been waiting for all year."
          buttonText='Shop gifts'
          buttonHref='#'
        />
      </section>

      {/* Products Section */}
      <section
        aria-label='Product cards'
        className='flex flex-wrap justify-center'
      >
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
              buttonHref={item.buttonHref}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Body;
