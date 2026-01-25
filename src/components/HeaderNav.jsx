import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/../public/assets/programming-language.gif";

export default function HeaderNav() {
  return (
    // nav grid
    // --> image left
    // --> h1 center
    // --> page links right
    <header className="headerNav">
      {/* Image link for home page */}
      <Link className="homeLink" href={"/"}>
        <Image
          src={HomeImage}
          alt={"Navigate to the home page"}
          height={100}
          width={100}
        />
      </Link>
      <h1>MY ASSIGNMENT PORTFOLIO BLOG</h1>
      <nav>
        {/* Link for Blog page */}
        <Link href={"/projects"}>Projects</Link>
        {/* Link for About */}
        <Link href={"/aboutMe"}>About Me</Link>
      </nav>
    </header>
  );
}
