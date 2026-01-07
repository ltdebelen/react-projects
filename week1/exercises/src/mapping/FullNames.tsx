import ProblemCard from '../components/ProblemCard';

export const FullNames = () => {
  const people = [
    { firstName: 'Taylor', lastName: 'Kim' },
    { firstName: 'Jordan', lastName: 'Lee' },
  ];
  return (
    <ProblemCard
      title='Map 10 — Transform shape'
      method='map'
      question='Render full names by combining firstName + lastName.'
      dataPreview={people}
    >
      <div>
        {people.map((person) => (
          <div key={person.firstName + person.lastName}>
            {person.firstName} {person.lastName}
          </div>
        ))}
      </div>
    </ProblemCard>
  );
};
