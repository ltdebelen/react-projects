import ProblemCard from '../components/ProblemCard';

export const FeatureList = () => {
  const items = [
    {
      id: 1,
      title: 'Laptop',
      features: ['16GB RAM', '512GB SSD', 'Intel i7 Processor'],
    },
    {
      id: 2,
      title: 'Smartphone',
      features: ['128GB Storage', '6GB RAM', 'OLED Display'],
    },
    {
      id: 3,
      title: 'Headphones',
      features: ['Noise Cancelling', 'Bluetooth 5.0', '20 Hours Battery Life'],
    },
  ];

  return (
    <ProblemCard
      title='Map products and display its features'
      method='map'
      question='Render a list of products with its features'
      dataPreview={items}
    >
      <ul>
        {items.map((item) => (
          <div key={item.id} className='mt-5'>
            <p>{item.title}</p>
            <ul>
              {item.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </ProblemCard>
  );
};
