import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
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

  const products = [
    {
      name: '',
    },
  ];

  return (
    <>
      <Header links={links} />
      <Body />
      <Footer />
    </>
  );
}

export default App;
