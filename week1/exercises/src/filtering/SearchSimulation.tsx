import ProblemCard from '../components/ProblemCard';

export const SearchSimulation = ({ searchTerm }: { searchTerm: string }) => {
  const items = ['React', 'JavaScript', 'TypeScript', 'Node', 'CSS'];
  return (
    <ProblemCard
      title='Filter 08 — Search simulation'
      method='filter'
      question='Filter items that include the searchTerm prop (case-insensitive), then render them.'
      dataPreview={{ items, searchTerm: searchTerm }}
    >
      <ul>
        {items
          .filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((filteredItem) => (
            <li key={filteredItem}>{filteredItem}</li>
          ))}
      </ul>
    </ProblemCard>
  );
};
