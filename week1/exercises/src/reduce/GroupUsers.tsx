import ProblemCard from '../components/ProblemCard';

export const GroupUsers = () => {
  const users = [
    { id: 1, name: 'Ava', role: 'admin' },
    { id: 2, name: 'Noah', role: 'user' },
    { id: 3, name: 'Mia', role: 'user' },
  ];

  const grouped = users.reduce((acc, u) => {
    if (!acc[u.role]) {
      acc[u.role] = [];
    }
    acc[u.role].push(u);
    return acc;
  }, {} as Record<string, typeof users>);

  console.log(grouped);

  return (
    <ProblemCard
      title='Reduce 06 — Group items'
      method='reduce'
      question='Use reduce() to group users by role. (Example: { admin: [...], user: [...] })'
      dataPreview={users}
    >
      <div>{JSON.stringify(grouped, null, 2)}</div>
    </ProblemCard>
  );
};
