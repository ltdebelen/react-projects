import './App.css';
import { AdminsOnly } from './filtering/AdminsOnly';

function App() {
  return (
    <>
      <div className='min-h-screen bg-white flex flex-col items-center justify-center'>
        <h1 className='text-black text-3xl font-bold mb-6'>Filter Exercises</h1>
        <AdminsOnly />
      </div>
    </>
  );
}

export default App;
