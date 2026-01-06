import './App.css';
import { AdminsOnly } from './filtering/AdminsOnly';
import { CaseInsensitive } from './filtering/CaseInsensitive';
import { EmptyState } from './filtering/EmptyState';
import { EvensOnly } from './filtering/EvensOnly';
import { LongWordsOnly } from './filtering/LongWordsOnly';
import { MultipleConditions } from './filtering/MultipleConditions';

function App() {
  return (
    <>
      <div className='min-h-screen bg-white flex flex-col items-center justify-center gap-4'>
        <h1 className='text-black text-3xl font-bold mb-6'>Filter Exercises</h1>
        <AdminsOnly />
        <CaseInsensitive />
        <EmptyState />
        <EvensOnly />
        <LongWordsOnly />
        <MultipleConditions />
      </div>
    </>
  );
}

export default App;
