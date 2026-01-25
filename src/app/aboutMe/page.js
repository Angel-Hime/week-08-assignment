import Image from "next/image";
import Link from "next/link";
import smashingIt from "@/../public/assets/handshake.jpg";
import gitHub from "@/../public/assets/GitHub.png";
import techEd from "@/../public/assets/TechEd.png";

export default function aboutMe() {
  return (
    <>
      <section className="mt-10 h-11/12 grid grid-rows-6 items-center">
        <h1 className="row-start-1 row-end-2 text-3xl mt-10">About Me</h1>

        <p className="row-start-2 row-end-3 text-xl mt-10">
          Hey, I am Annabel; thank you for stopping by and checking out my
          portfolio blog!
        </p>

        <p className="row-start-3 row-end-4 text-xl mt-10">
          I am studying development with Tech Educators, in the Software
          Development 023 group in order to learn new skills and begin my
          endeavour for a new career
        </p>
        <Image
          className="row-start-4 row-end-6 justify-self-center"
          src={smashingIt}
          alt={"just coding things..."}
          height={200}
          width={400}
        />

        <nav className="justify-self-center row-start-6 row-end-7 flex flex-row gap-5">
          {/* nav
      --> link to techEd
        --> to my github 
        --> to my linkdin (when set up)
        
        */}
          <Link
            className="flex flex-row gap-2 "
            href={"https://techeducators.co.uk/"}
          >
            Tech Educators{" "}
            <Image
              src={techEd}
              alt={"Tech Educators Logo"}
              height={50}
              width={50}
            />{" "}
          </Link>

          <Link
            className="flex flex-row gap-2 "
            href={"https://github.com/Angel-Hime"}
          >
            My GitHub Page{" "}
            <Image
              src={gitHub}
              alt={"GitHub Logo"}
              height={50}
              width={50}
            />{" "}
          </Link>
        </nav>
      </section>
    </>
  );
}
