import { useState } from 'react';
import EmployeeCard from './EmployeeCard';

export type Employee = {
  id: string | number;
  name: string;
  position: string;
  bio: string;
  profilePicUrl: string;
  showMoreInfo?: boolean;
  moreInfo: string;
};

interface EmployeeDirectoryProps {
  employees: Employee[];
}

const EmployeeDirectory = ({ employees }: EmployeeDirectoryProps) => {
  const [showMoreInfo, setShowMoreInfo] = useState<{ [id: string]: boolean }>(
    {}
  );

  const handleToggle = (id: string | number) => {
    setShowMoreInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='flex'>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={employee.name}
          position={employee.position}
          bio={employee.bio}
          profilePicUrl={employee.profilePicUrl}
          showMoreInfo={!!showMoreInfo[employee.id]}
          moreInfo={employee.moreInfo}
          onToggle={() => handleToggle(employee.id)}
        />
      ))}
    </div>
  );
};

export default EmployeeDirectory;
