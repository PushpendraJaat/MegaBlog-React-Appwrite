import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: '/login',
      active: !authStatus
    },
    {
      name: "Signup",
      slug: '/signup',
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: "Add Post",
      slug: '/add-post',
      active: authStatus
    }
  ];

  return (
    <header className='py-3 shadow bg-customdarkblue z-10'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <div className='md:m-2 m-auto hover:shadow-lg'>
            <Link to='/'>
              <Logo style={{ width: '150px' }} />
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className='sm:hidden text-white focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Items */}
          <ul
            className={`flex-col sm:flex-row sm:flex sm:items-center sm:ml-auto absolute sm:static top-16 left-0 w-full sm:w-auto bg-customdarkblue sm:bg-transparent ${
              isMenuOpen ? 'flex' : 'hidden'
            }`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setIsMenuOpen(false); // Close menu after navigating
                      }}
                      className='inline-block px-4 py-2 mx-3 duration-200 hover:cursor-pointer hover:bg-blue-100 rounded-full hover:text-customdarkblue text-white sm:text-inherit'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
