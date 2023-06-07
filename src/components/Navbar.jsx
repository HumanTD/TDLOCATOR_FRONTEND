import React from 'react';

const navbarElements = 'my-2 mx-16 px-4 py-2 hover:text-zinc-400 no-underline ';

const navbarText = `text-md leading-loose text-white bg-black md:text-zinc-800 md:bg-inherit md:font-semibold no-underline`;
const Navbar = () => {
  const navbarHoverStyles = `
    hover:text-zinc-500 
    `;
  return (
    <>
      <div className="flex justify-center p-5 no-underline">
        <a
          className="text-2xl font-bold no-underline hover:text-zinc-500 md:text-3xl md:text-red-600 "
          href="/"
        >
          TD LOCATOR
        </a>
      </div>

      <nav className={` flex justify-center  ${navbarText}  `}>
        <a className={`${navbarElements} ${navbarHoverStyles}`} href="/">
          About
        </a>
        <a className={`${navbarElements} ${navbarHoverStyles}`} href="/project">
          Project
        </a>
        <a className={`${navbarElements} ${navbarHoverStyles}`} href="/resume">
          Resume
        </a>
      </nav>
    </>
  );
};

export default Navbar;
