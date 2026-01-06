import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import { cardItems, links } from './data/data';

const App = () => {
  return (
    <>
      <Header links={links} />
      <Body cardItems={cardItems} />
      <Footer />
    </>
  );
};

export default App;
