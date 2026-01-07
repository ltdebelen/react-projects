import ProblemCard from '../components/ProblemCard';

export const ProductList = () => {
  const items = [
    { title: 'item1', price: '$10.00', url: 'https://picsum.photos/50/50' },
    { title: 'item2', price: '$15.00', url: 'https://picsum.photos/50/50' },
    { title: 'item3', price: '$20.00', url: 'https://picsum.photos/50/50' },
  ];

  return (
    <ProblemCard
      title='Map products'
      method='map'
      question='Render a list of products.'
      dataPreview={items}
    >
      <ul>
        {items.map((item) => (
          <div key={item.title}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </ul>
    </ProblemCard>
  );
};
