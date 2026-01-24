import { db } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";

export default async function categoriesFilter({ params }) {
  const { categoryName } = await params;
  // console.log(categoryName);

  const projects = (
    await db.query(
      `SELECT project_features.sql, project_features.tailwind, project_features.react, project_features.api, project_blog.* FROM project_features JOIN project_blog ON project_blog.entry_id = project_features.entry_id WHERE project_features.${categoryName} = true`,
    )
  ).rows;
  // console.log(projects);

  return (
    <>
      <section>
        Category: {categoryName[0].toUpperCase() + categoryName.substring(1)}
        {projects.map((project) => (
          <div key={project.entry_id}>
            {" "}
            <h2> {project.entry_title} </h2>
            <Link href={`/projects/${project.entry_id}`}>
              <Image
                src={project.screenshot_url}
                alt={`image showing the web app ${project.entry_title}`}
                width={500}
                height={300}
              />
            </Link>
            <h2>Project: {project.entry_title}</h2>
            <p>{project.entry_date.toLocaleDateString("en-UK")}</p>
          </div>
        ))}
        {/* we need to link the individual project to the project page again */}
      </section>
    </>
  );
}
