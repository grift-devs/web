const Navbar = () => (
  <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex window-body">
    <p className="fixed lg:px-0 left-0 top-0 flex flex-row w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-700 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:p-1 lg:dark:bg-zinc-800/30">
      <button className="title-bar-text font-mono font-bold">
        0x000000000000000000000000000000000000dead
      </button>
      <button className="title-bar-text font-mono font-bold text-rose-500">
        dextools
      </button>
      <button className="title-bar-text font-mono font-bold text-rose-500">
        etherscan
      </button>
      <button className="title-bar-text font-mono font-bold text-rose-500">
        twitter
      </button>
      <button className="title-bar-text font-mono font-bold text-rose-500">
        telegram
      </button>
    </p>
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href=""
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/2.jpeg"
          alt="logo"
          className="z-12"
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  </div>
);

export default Navbar;
