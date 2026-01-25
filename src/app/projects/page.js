import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/dbConnection";
import projectCSS from "./projects.module.css";
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
        .toLocaleString("en-CA")
        .localeCompare(a.entry_date.toLocaleString("en-CA"));
    });
  } else if (queryString.sort === "asc") {
    entries.sort((a, b) => {
      return a.entry_date
        .toLocaleString("en-CA")
        .localeCompare(b.entry_date.toLocaleString("en-CA"));
    });
  }

  return (
    <>
      {/* nav on every page */}
      <section className="grid grid-cols-5 m-10 h-9/12 items-center-safe">
        <aside
          id="aside"
          className="justify-self-center col-start-1 col-end-2 w-10/12 flex flex-col items-center-safe  overflow-x-hidden h-150"
        >
          <fieldset className="flex flex-col gap-3 items-center w-11/12">
            {/* sorting buttons */}
            <legend className="ml-3"> Sort By Date </legend>
            <Link className={projectCSS.asideLinks} href="/projects?sort=asc">
              {" "}
              Sort Ascending{" "}
            </Link>
            <Link className={projectCSS.asideLinks} href="/projects?sort=desc">
              {" "}
              Sort Descending{" "}
            </Link>
          </fieldset>

          <fieldset className="flex flex-col gap-3 items-center w-11/12 ">
            <legend className="ml-3">Filter By Features</legend>
            <Link
              className={projectCSS.asideLinks}
              href={"/projects/categories/sql"}
            >
              Projects Featuring: SQL
            </Link>
            <Link
              className={projectCSS.asideLinks}
              href={"/projects/categories/tailwind"}
            >
              Projects Featuring: Tailwind CSS
            </Link>
            <Link
              className={projectCSS.asideLinks}
              href={"/projects/categories/react"}
            >
              Projects Featuring: REACT
            </Link>
            <Link
              className={projectCSS.asideLinks}
              href={"/projects/categories/api"}
            >
              Projects Featuring: API(s)
            </Link>
          </fieldset>

          <Link className={projectCSS.asideLinks} href="/projects/addProject">
            {" "}
            Add New Project{" "}
          </Link>
        </aside>
        <section className={projectCSS.mainFeature}>
          {entries.map((entry) => (
            <div key={entry.entry_id}>
              <Link href={`projects/${entry.entry_id}`}>
                {entry.screenshot_url ? (
                  <Image
                    className={projectCSS.imageDiv}
                    src={entry.screenshot_url}
                    alt={`image showing the web app ${entry.entry_title}`}
                    width={1000}
                    height={500}
                  />
                ) : (
                  <h2>
                    {" "}
                    Image not provide, click here to navigate to project{" "}
                    {entry.entry_title}
                  </h2>
                )}
                <h2>
                  Project: {entry.entry_title} -{" "}
                  {entry.entry_date.toLocaleDateString("en-UK")}
                </h2>
                <p></p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
