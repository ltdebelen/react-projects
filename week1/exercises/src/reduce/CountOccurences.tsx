import ProblemCard from '../components/ProblemCard';

export const CountOccurences = () => {
  const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  return (
    <ProblemCard
      title='Reduce 07 — Count occurrences'
      method='reduce'
      question='Use reduce() to count how many times each word appears.'
      dataPreview={words}
    >
      <div>
        {JSON.stringify(
          words.reduce((acc: any, word) => {
            if (acc[word]) {
              acc[word] += 1;
            } else {
              acc[word] = 1;
            }
            return acc;
          }, {}),
          null,
          2
        )}
      </div>
    </ProblemCard>
  );
};
