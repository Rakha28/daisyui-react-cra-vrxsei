import React, { useState, useEffect, useRef } from 'react';
import { Container, Logo, Main, RightSide, MenuButton, MenuOptions, VerticalMenu, Buttons, SearchInput, AvatarMenu } from './styles';

function Navbar() {
  const menuRef = useRef();
  const profileMenuRef = useRef();
  const searchRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener('mousedown', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    if (opacity === 0 && window.scrollY > 10) {
      setOpacity(1);
    } else if (opacity === 1 && window.scrollY < 10) {
      setOpacity(0);
    }
  }

  function handleClick(event) {
    if (showMenu && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
    if (showProfileMenu && !profileMenuRef.current.contains(event.target)) {
      setShowProfileMenu(false);
    }
    if (showSearch && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  }

  function toggleProfileMenu() {
    setShowProfileMenu(prevShowProfileMenu => !prevShowProfileMenu);
  }

  function handleSearchClick() {
    setShowSearch(true);
  }

  return (
    <Container opacity={opacity}>
      <Main>
        <div ref={menuRef}>
          <MenuButton onClick={() => setShowMenu(!showMenu)}>
            <i className="text-white fa fa-bars" style={{ fontSize: 'max(2rem, 2vw)' }} />
          </MenuButton>
          <MenuOptions hide={!showMenu}>
            <section>
              <a href="/">Account</a>
              <a href="/">Help Center</a>
              <a href="/">Sign out</a>
            </section>
          </MenuOptions>
        </div>
        <Logo to="/" title="AnimeHub">
          <span style={{ color: '#e50914', fontSize: '2rem', fontWeight: 'bold', marginLeft: '1rem' }}>
            ANIMEHUB
          </span>
        </Logo>
        <VerticalMenu>
          <a href="/">Home</a>
          <a href="/">My List</a>
        </VerticalMenu>
      </Main>
      <RightSide>
        {!showSearch && (
          <div className="relative" ref={searchRef}>
            <button className="btn btn-ghost btn-circle" onClick={handleSearchClick}>
              <i className="fa fa-search text-white" style={{ fontSize: '1.5rem' }} />
            </button>
          </div>
        )}
        {showSearch && (
          <SearchInput
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onBlur={() => setShowSearch(false)}
            autoFocus
          />
        )}
        <Buttons>
          <div ref={profileMenuRef} className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar" onClick={toggleProfileMenu}>
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile" />
              </div>
            </label>
            {showProfileMenu && (
              <AvatarMenu className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="/" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </AvatarMenu>
            )}
          </div>
        </Buttons>
      </RightSide>
    </Container>
  );
}

export default Navbar;
