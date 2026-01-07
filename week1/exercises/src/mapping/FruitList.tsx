import ProblemCard from '../components/ProblemCard';

/**
 * map, filter, reduce
 * array.method(() => )
 */

export const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    <ProblemCard
      title='Map 01 — Render a list of strings'
      method='map'
      question='Render each fruit inside an <li>.'
      dataPreview={fruits}
    >
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit + index}>{fruit}</li>
        ))}
      </ul>
    </ProblemCard>
  );
};
