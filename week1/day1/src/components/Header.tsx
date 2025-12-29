interface HeaderProps {
  links: { name: string; href: string }[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <header>
      {/* Navbar */}
      <nav aria-label='Main navigation'>
        <ul className='flex justify-center items-center space-x-9'>
          <li>
            <a href='#' aria-label='Apple logo'>
              <span className='globalnav-image-compact globalnav-link-image'>
                <svg
                  height='48'
                  viewBox='0 0 17 48'
                  width='17'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path d='m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z'></path>
                </svg>
              </span>
            </a>
          </li>
          {links.map((link) => (
            <li
              key={link.href || link.name}
              className='text-gray-700 hover:text-gray-900 cursor-pointer'
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href='#' aria-label='Search'>
              <span className='globalnav-image-compact'>
                <svg
                  height='48'
                  viewBox='0 0 17 48'
                  width='17'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path d='m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z'></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href='#' aria-label='Bag'>
              <span className='globalnav-image-regular'>
                <svg
                  height='44'
                  viewBox='0 0 14 44'
                  width='14'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path d='m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z'></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
