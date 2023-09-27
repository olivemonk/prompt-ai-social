import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />{" "}
        <sapn className="orange_gradient text-center">AI-Powered Prompts</sapn>
      </h1>
      <p className="desc text-center">
        Promtopia is a open source AI prompting tool for modern world to
        discover, creata and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
