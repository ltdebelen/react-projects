interface EmployeeCardProps {
  id: string | number;
  name: string;
  position: string;
  bio: string;
  profilePicUrl: string;
  showMoreInfo?: boolean;
  moreInfo: string;
  onToggle: () => void;
}

const EmployeeCard = ({
  id,
  name,
  position,
  bio,
  profilePicUrl,
  showMoreInfo,
  moreInfo,
  onToggle,
}: EmployeeCardProps) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-4' key={id}>
      <img className='w-full' src={`${profilePicUrl}`} alt={name} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{position}</p>
        <p className='text-gray-700 text-base'>{bio}</p>
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer m-4 float-right'
        onClick={onToggle}
      >
        {showMoreInfo ? 'Hide Info' : 'Show More Info'}
      </button>
      {showMoreInfo && (
        <div className='px-6 py-4'>
          <p className='text-gray-700 text-base'>{moreInfo}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
