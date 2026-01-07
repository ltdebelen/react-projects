import { useState } from 'react';
import { employees as initialEmployees } from './data/employees';
import './App.css';
import CompanyLogo from './components/CompanyLogo';
import EmployeeDirectory from './components/EmployeeDirectory';
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
import { FeatureList } from './mapping/FeatureList';
import { FormatPrices } from './mapping/FormatPrices';
import { FruitList } from './mapping/FruitList';
import { FullNames } from './mapping/FullNames';
import { ListRendering } from './mapping/ListRendering';
import { NavigationMenu } from './mapping/NavigationMenu';
import { ProductList } from './mapping/ProductList';
import { RankedList } from './mapping/RankedList';
import { RenderFromData } from './mapping/RenderFromData';
import { RenderObjects } from './mapping/RenderObjects';
import { TeamDirectory } from './mapping/TeamDirectory';
import { CartTotal } from './reduce/CartTotal';
import { CountItems } from './reduce/CountItems';
import { CountOccurences } from './reduce/CountOccurences';
import { GroupUsers } from './reduce/GroupUsers';
import { LookUp } from './reduce/LookUp';
import { Stats } from './reduce/Stats';
import { SumNumbers } from './reduce/SumNumbers';
import { SumPrices } from './reduce/SumPrices';

function App() {
  const [employeeList, setEmployeeList] = useState(initialEmployees);

  const filterEmployeeList = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.length > 0) {
      const filteredEmployees = initialEmployees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm)
      );
      setEmployeeList(filteredEmployees);
    } else {
      setEmployeeList(initialEmployees);
    }
  };

  return (
    <>
      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4 m-10'>
        <h1 className='text-black text-3xl font-bold mb-6'>
          Project - Employee Directory
        </h1>
        <input
          name='search'
          type='text'
          placeholder='Search employees...'
          className='border border-gray-300 rounded px-4 py-2 mb-4'
          onChange={filterEmployeeList}
        />
        <EmployeeDirectory employees={employeeList} />
      </div>

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
        <TeamDirectory />
        <NavigationMenu />
        <ProductList />
        <FeatureList />
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
