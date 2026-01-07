import './App.css';
import CompanyLogo from './components/CompanyLogo';
import FooterComponent from './components/FooterComponent';
import GreetingComponent from './components/GreetingComponent';
import ProfileCard from './components/ProfileCard';
import { AdminsOnly } from './filtering/AdminsOnly';
import { CaseInsensitive } from './filtering/CaseInsensitive';
import { EmptyState } from './filtering/EmptyState';
import { EvensOnly } from './filtering/EvensOnly';
import { LongWordsOnly } from './filtering/LongWordsOnly';
import { MultipleConditions } from './filtering/MultipleConditions';
import { PreFilter } from './filtering/PreFilter';
import { PriceGreaterThan20 } from './filtering/PriceGreaterThan20';
import { SearchSimulation } from './filtering/SearchSimulation';
import { CapitalizeWords, RenderNumbers } from './mapping';
import { ConditionalRender } from './mapping/ConditionalRender';
import { DoubleNumbers } from './mapping/DoubleNumbers';
import { FormatPrices } from './mapping/FormatPrices';
import { FruitList } from './mapping/FruitList';
import { FullNames } from './mapping/FullNames';
import { ListRendering } from './mapping/ListRendering';
import { RankedList } from './mapping/RankedList';
import { RenderFromData } from './mapping/RenderFromData';
import { RenderObjects } from './mapping/RenderObjects';
import { CartTotal } from './reduce/CartTotal';
import { CountItems } from './reduce/CountItems';
import { CountOccurences } from './reduce/CountOccurences';
import { GroupUsers } from './reduce/GroupUsers';
import { LookUp } from './reduce/LookUp';
import { Stats } from './reduce/Stats';
import { SumNumbers } from './reduce/SumNumbers';
import { SumPrices } from './reduce/SumPrices';

function App() {
  return (
    <>
      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4'>
        <h1 className='text-black text-3xl font-bold mb-6'>
          Basic JSX Components - Homework
        </h1>
        <GreetingComponent name='John Doe' />
        <ProfileCard
          name='John Doe'
          profilePicUrl='https://picsum.photos/200/300'
          bio='Software developer and React enthusiast.'
        />
        <CompanyLogo
          logoUrl='https://picsum.photos/50/50'
          altText='Company Logo'
        />
        <FooterComponent year={2026} companyName='Tech Corp' />
      </div>

      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4'>
        <h1 className='text-black text-3xl font-bold mb-6'>Filter Exercises</h1>
        <AdminsOnly />
        <CaseInsensitive />
        <EmptyState />
        <EvensOnly />
        <LongWordsOnly />
        <MultipleConditions />
        <PreFilter />
        <PriceGreaterThan20 />
        <SearchSimulation searchTerm={'React'} />
      </div>

      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4'>
        <h1 className='text-black text-3xl font-bold mb-6'>
          Mapping Exercises
        </h1>
        <CapitalizeWords />
        <ConditionalRender />
        <DoubleNumbers />
        <FormatPrices />
        <FruitList />
        <FullNames />
        <RankedList />
        <RenderFromData />
        <RenderNumbers />
        <RenderObjects />
      </div>

      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4'>
        <h1 className='text-black text-3xl font-bold mb-6'>Mapping Homework</h1>
        <ListRendering />
      </div>

      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4'>
        <h1 className='text-black text-3xl font-bold mb-6'>Reduce Exercises</h1>
        <CartTotal />
        <CountItems />
        <CountOccurences />
        <GroupUsers />
        <LookUp />
        <Stats />
        <SumNumbers />
        <SumPrices />
      </div>
    </>
  );
}

export default App;
