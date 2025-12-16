import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import airpodsImg from './assets/airpods.jpg';
import appleWatchImg from './assets/apple-watch.jpg';
import ipadImg from './assets/ipad.jpg';
import macbookImg from './assets/macbook.jpg';

const App = () => {
  const links = [
    {
      name: 'Store',
      href: '#Store',
    },
    { name: 'Mac', href: '#Mac' },
    { name: 'iPad', href: '#iPad' },
    { name: 'iPhone', href: '#iPhone' },
    { name: 'Watch', href: '#Watch' },
    { name: 'Vision', href: '#Vision' },
    { name: 'AirPods', href: '#AirPods' },
    { name: 'TV & Home', href: '#TVHome' },
    { name: 'Entertainment', href: '#Entertainment' },
    { name: 'Accessories', href: '#Accessories' },
    { name: 'Support', href: '#Support' },
  ];

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
    <>
      <Header links={links} />
      <Body cardItems={cardItems} />
      <Footer />
    </>
  );
};

export default App;
