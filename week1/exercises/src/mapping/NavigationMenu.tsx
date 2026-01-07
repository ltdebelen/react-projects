import ProblemCard from '../components/ProblemCard';

export const NavigationMenu = () => {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <ProblemCard
      title='Nav Link'
      method='map'
      question='Render a list of navigation links.'
      dataPreview={links}
    >
      <ul>
        {links.map((link) => (
          <div key={link.title}>
            <a href={link.url}>{link.title}</a>
          </div>
        ))}
      </ul>
    </ProblemCard>
  );
};
