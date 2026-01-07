export const TeamDirectory = () => {
  const users = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Product Manager' },
  ];

  return (
    <>
      {users.map((user) => (
        <div className='border p-2 m-2' key={user.id}>
          {user.name} - {user.role}
        </div>
      ))}
    </>
  );
};
