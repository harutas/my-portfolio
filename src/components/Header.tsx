import Link from 'next/link';

const Header = () => {
  const navLinkPath = [
    {
      linkPath: '/',
      navText: 'Home',
    },
    {
      linkPath: '/works',
      navText: 'Works',
    },
  ];

  const navLink = navLinkPath.map((link) => {
    return (
      <Link
        key={link.linkPath}
        href={link.linkPath}
        className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
      >
        {link.navText}
      </Link>
    );
  });

  return (
    <div className='bg-white lg:pb-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <header className='flex items-center justify-end py-4 md:py-8'>
          {/* <!-- nav - start --> */}
          <nav className='hidden gap-12 lg:flex'>{navLink}</nav>
          {/* <!-- nav - end --> */}

          <button
            type='button'
            className='inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
            Menu
          </button>
          {/* <!-- buttons - end --> */}
        </header>
      </div>
    </div>
  );
};

export default Header;