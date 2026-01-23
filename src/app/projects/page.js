import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/dbConnection";

// TODO: Render a list of all posts

export default async function projectsPage({ searchParams }) {
  const queryString = await searchParams;
  // getting data from db

  const entries = (await db.query(`SELECT * FROM project_blog`)).rows;
  // figure how to handle the date type

  console.log(entries);
  if (queryString.sort === "desc") {
    entries.sort((a, b) => {
      return b.entry_date
        .toLocaleString("en-UK")
        .localeCompare(a.entry_date.toLocaleString("en-UK"));
    });
  } else if (queryString.sort === "asc") {
    entries.sort((a, b) => {
      return a.entry_date
        .toLocaleString("en-UK")
        .localeCompare(b.entry_date.toLocaleString("en-UK"));
    });
  }

  return (
    <>
      {/* nav on every page */}
      <aside>
        <Link href="/projects/addProject"> Add New Project </Link>
        {/* sorting buttons */}
        <Link href="/projects?sort=asc"> Sort Ascending </Link> -{" "}
        <Link href="/projects?sort=desc"> Sort Descending </Link>
      </aside>
      <section>
        {entries.map((entry) => (
          <div key={entry.entry_id}>
            <Link href={`projects/${entry.entry_id}`}>
              <Image
                src={entry.screenshot_url}
                alt={`image showing the web app ${entry.entry_title}`}
                width={500}
                height={300}
              />
            </Link>
            <h2>Project: {entry.entry_title}</h2>
            <p>{entry.entry_date.toLocaleDateString("en-UK")}</p>
          </div>
        ))}
      </section>
    </>
  );
}
