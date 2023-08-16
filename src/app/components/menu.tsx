import TokenTable from "./tokentable";

const Menu = () => (
  <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
    <button className="border flex w-full border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/90">
      <a
        href={"#about"}
        className={`flex text-red-500 group h-full rounded-lg items-center justify-center`}
        target={undefined}
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          HOW TO BE A PLAYER
          <span
            className={`inline-block transition-transform ${"rotate-90"} group-hover:translate-x-1 motion-reduce:transform-none`}>
            -&gt;
          </span>
        </h2>
      </a>
    </button>
    <button className="border flex w-full h-full items-center border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/90">
      <TokenTable />
    </button>
    <button className="border flex w-full border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/90">
      <a
        href={
          "https://app.uniswap.org/#/swap?outputCurrency=0x965ad0fc70afc3debb2d63d6f6b9ea3855794a98"
        }
        className={`text-red-500 group rounded-lg flex flex-col w-full h-full items-center justify-center rounded-lg`}
        target={"_blank"}
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          UNISWAP
          <span
            className={`inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}>
            -&gt;
          </span>
        </h2>
      </a>
    </button>
  </div>
);

export default Menu;

export const runtime = "edge";
