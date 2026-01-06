import ProblemCard from '../components/ProblemCard';

export const EmptyState = () => {
  const items = ['Apple', 'Banana'];
  const searchTerm = 'zzz';

  const filteredItems = items.filter((item) => item === searchTerm);

  console.log('filteredItems', filteredItems);

  return (
    <ProblemCard
      title='Filter 09 — Empty state handling'
      method='filter'
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      <div>
        {filteredItems.length === 0 ? (
          <div>No results found</div>
        ) : (
          filteredItems.map((item) => <div>{item}</div>)
        )}
      </div>
      <div />
    </ProblemCard>
  );
};
