import ProblemCard from '../components/ProblemCard';

export const ListRendering = () => {
  const words = ['eat', 'sleep', 'repeat'];

  return (
    <ProblemCard
      title='List Rendering — Basic list rendering'
      method='map'
      question='Render each word with the first letter capitalized.'
      dataPreview={words}
    >
      <ul>
        {words.map((word) => (
          <div key={word}>{word}</div>
        ))}
      </ul>
    </ProblemCard>
  );
};
