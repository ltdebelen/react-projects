import './App.css';
import CompanyLogo from './components/CompanyLogo';
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
          profilePicUrl='https://example.com/profile.jpg'
          bio='Software developer and React enthusiast.'
        />
        <CompanyLogo logoUrl='/logo.png' altText='Company Logo' />
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
    </>
  );
}

export default App;
