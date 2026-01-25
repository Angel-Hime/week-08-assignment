export default function HomePage() {
  return (
    <>
      {/* nav on every page */}
      <div className="mt-10 h-100 grid grid-rows-3 items-center">
        <h1 className="row-start-1 row-end-2 text-3xl mt-10">
          Welcome to My Website
        </h1>

        <p className="row-start-2 row-end-3 text-xl mt-10">
          This is a portfolio website in the form of a blog site.
        </p>

        <p className="row-start-3 row-end-4 text-xl mt-10">
          Please feel welcome to peruse each of my entries and leave a comment
          if you wish!
        </p>
      </div>
    </>
  );
}
