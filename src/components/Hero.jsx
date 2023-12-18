import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full md-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/Arush16101999")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles & Thesis with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
        This is a simple web app that uses the power of OpenAI GPT to summarize
        any article or blog post in a few sentences.
      </h2>
    </header>
  );
};

export default Hero;
