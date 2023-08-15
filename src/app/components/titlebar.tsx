const TitleBar = ({ title }: { title: string }) => (
  <div className="z-10 max-w-6xl w-full items-center justify-center title-bar">
    <p className="text-white title-bar-text">{title}</p>
    <div className="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
);

export default TitleBar;
export const runtime = "edge";
