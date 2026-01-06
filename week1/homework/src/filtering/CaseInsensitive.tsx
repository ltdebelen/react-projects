import ProblemCard from '../components/ProblemCard';

export const CaseInsensitive = () => {
  const names = ['Ava', 'liam', 'Noah', 'MIA', 'Zoe'];
  return (
    <ProblemCard
      title='Filter 05 — Case-insensitive filtering'
      method='filter'
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={names}
    >
      <ul>
        {names
          .filter((name) => name.toLowerCase().includes('a'))
          .map((filteredName) => (
            <li key={filteredName}>{filteredName}</li>
          ))}
      </ul>
    </ProblemCard>
  );
};
