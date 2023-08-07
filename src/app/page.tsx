import Image from "next/image";
import SnowCanvas from "./snowMaker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <SnowCanvas />
      <div className="flex flex-col gap-46 z-10">
        <div>
          <div className="window max-w-6xl">
            <div className="z-10 max-w-5xl w-full items-center justify-center title-bar">
              <p className="text-white title-bar-text">
                A. I. C. C. Artificially Intelligent Counter Culture
              </p>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex window-body">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-700 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:p-1 lg:dark:bg-zinc-800/30">
                <button className="title-bar-text font-mono font-bold">
                  0x000000000000000000000000000000000000dead
                </button>

                <button className="title-bar-text font-mono font-bold">
                  dextools
                </button>
                <button className="title-bar-text font-mono font-bold">
                  etherscan
                </button>
                <button className="title-bar-text font-mono font-bold">
                  twitter
                </button>
                <button className="title-bar-text font-mono font-bold">
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
                    className="dark:invert z-12"
                    width={100}
                    height={24}
                    priority
                  />
                </a>
              </div>
            </div>

            <div className="relative flex place-items-center max-w-5xl">
              <h1 className="font-sans">
                Greetings, <br />
                fellow Internet Explorer!
              </h1>

              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/1953.jpg"
                alt="main"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {MenuButtons.map((d, idx) => (
              <MenuButton key={idx} {...d} />
            ))}
          </div>
        </div>
        <div className="text-rose-500 text-teal-500 text-indigo-500 text-yellow-500"></div>

        <div className="window max-w-6xl mt-44">
          <div className="z-10 max-w-5xl w-full items-center justify-center title-bar">
            <p className="text-white title-bar-text">
              About A. I. C. C. (Artificially Intelligent Counter Culture)
            </p>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex window-body">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
          </div>

          <div className="relative flex place-items-center max-w-5xl">
            <h1 className="font-sans" id="about">
              Who we are
            </h1>

            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/1953.jpg"
              alt="main"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        <div className="window max-w-6xl mt-44">
          <div className="z-10 max-w-5xl w-full items-center justify-center title-bar">
            <p className="text-white title-bar-text">Schizo Guesbook</p>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex window-body">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
          </div>

          <div
            className="relative flex place-items-center max-w-5xl"
            id={"guestbook"}>
            <h1 className="font-sans" id="about">
              Hello, {} what will you leave us?
            </h1>

            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/1953.jpg"
              alt="main"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}

const MenuButtons = [
  {
    linkTo: "#about",
    Title: "About",
    Subtitle: "Read the AICC manifesto.",
    Color: "rose",
  },
  {
    linkTo: "#memes",
    Title: "Meme Archive",
    Subtitle:
      "Explore the ever-growing collection of Milady memes, in one place",
    Color: "teal",
    isExternal: true,
  },
  {
    linkTo: "#guestbook",
    Title: "Schizo Guestbook",
    Subtitle: "Leave us a message!",
    Color: "indigo",
  },
  {
    linkTo: "uniswap",
    Title: "Buy",
    Subtitle: "Support AiCC",
    Color: "yellow",
    isExternal: true,
  },
];

interface MenuButtonProps {
  linkTo: string;
  Title: string;
  Subtitle: string;
  Color: string;
  isExternal?: boolean | undefined;
}

const MenuButton = ({
  linkTo,
  Title,
  Subtitle,
  Color,
  isExternal,
}: MenuButtonProps) => (
  <button className="border border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
    <a
      href={linkTo}
      className={`text-${Color}-500 group rounded-lg`}
      target={isExternal ? "_blank" : undefined}
      rel="noopener noreferrer">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {Title}
        <span
          className={`inline-block transition-transform ${
            isExternal ? null : "rotate-90"
          } group-hover:translate-x-1 motion-reduce:transform-none`}>
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 color`}>{Subtitle}</p>
    </a>
  </button>
);
