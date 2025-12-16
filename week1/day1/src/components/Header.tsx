interface HeaderProps {
  links: { name: string; href: string }[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <header>
          <ul className='flex justify-center items-center space-x-6 p-4 bg-gray-200'>
            {links.map((link, idx) => (
              <li
                key={idx}
                className='text-gray-700 hover:text-gray-900 cursor-pointer'
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Header;
