import Image from "next/image";
import Link from "next/link";
import HomeImage from "@/../public/assets/programming-language.gif";

export default function HeaderNav() {
  return (
    // nav grid
    // --> image left
    // --> h1 center
    // --> page links right
    <nav>
      {/* Image link for home page */}
      <Link href={"/"}>
        <Image
          src={HomeImage}
          alt={"Navigate to the home page"}
          height={100}
          width={100}
        />
      </Link>
      <h1>My Assignment Portfolio Blog</h1>

      {/* Link for Blog page */}
      <Link href={"/projects"}>Projects</Link>
      {/* Link for About */}
      <Link href={"/aboutMe"}>About Me</Link>
    </nav>
  );
}
