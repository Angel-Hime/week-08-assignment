import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function editPost({ params }) {
  // get the post id
  const { projectId } = await params;
  // fetch the data for the post
  const projectQuery = (
    await db.query(
      `SELECT project_blog.*, project_features.sql, project_features.tailwind, project_features.react, project_features.api FROM project_blog JOIN project_features ON project_blog.entry_id = project_features.entry_id WHERE project_blog.entry_id = $1`,
      [projectId],
    )
  ).rows;
  //   console.log(projectQuery);
  const entry = projectQuery[0];
  console.log(entry);

  // PUT route for updating the post
  async function handleSubmitEdit(rawFormData) {
    "use server";
    console.log(rawFormData);

    console.log("Updating post...");

    const { projectName, projectDate, url, description } =
      Object.fromEntries(rawFormData);

    const newProject = db.query(
      `UPDATE project_blog SET entry_title = $1, entry_date = $2, screenshot_url = $3, entry_content = $4 WHERE entry_id = $5`,
      [projectName, projectDate, url, description, projectId],
    );

    const { sql, tailwind, react, api } = Object.fromEntries(rawFormData);
    console.log(sql);
    console.log(tailwind);
    console.log(react);
    console.log(api);

    db.query(
      `UPDATE project_features SET sql = $1, tailwind = $2, react = $3, api = $4 WHERE entry_id = $5`,
      [sql, tailwind, react, api, projectId],
    );

    console.log("Post updated!");

    revalidatePath(`/projects/${projectId}`);
    redirect(`/projects/${projectId}`);
  }
  //   console.log("date: ");
  //   console.log(entry.entry_date);
  const formattedDate = entry.entry_date.toISOString().split("T")[0];
  //   console.log("formatted date: ");
  //   console.log(formattedDate);

  return (
    <>
      <h1>Edit Post: {projectId}</h1>
      <section>
        {/* form with post content filled as value={content} */}
        <form action={handleSubmitEdit}>
          <label htmlFor="projectName">Project Name: </label>
          <input
            type="text"
            name="projectName"
            defaultValue={entry.entry_title}
          ></input>

          <label htmlFor="projectDate">Project Date:</label>
          <input
            type="date"
            name="projectDate"
            defaultValue={formattedDate}
          ></input>

          <label htmlFor="url">Project Screenshot</label>
          {entry.screenshot_url ? (
            <>
              {" "}
              <input
                type="url"
                name="url"
                defaultValue={entry.screenshot_url}
              ></input>
              <div>
                <p>Image Provided: </p>
                <Image
                  src={entry.screenshot_url}
                  alt={`submitted image for ${entry.entry_title}`}
                  height={600}
                  width={600}
                />
              </div>
            </>
          ) : (
            <input
              type="text"
              name="url"
              placeholder="No URL provided, please provide..."
              defaultValue={" "}
            ></input>
          )}
          {/* can I have the user upload an image straight to the bucket, so that I can use the url from there? 
        I would have to ensure that the url is still uploaded with
        I would have to ensure that the database adds in the url: https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/ followed by the name of the image*/}

          <label htmlFor="description">Project Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Provide a description of the project"
            defaultValue={entry.entry_content}
          ></textarea>

          <fieldset className="border-2 border-black m-2">
            <legend className="ml-4">
              Specify What Features The Project Includes:{"  "}
            </legend>
            <input
              type="checkbox"
              name="sql"
              defaultChecked={entry.sql}
            ></input>
            <label htmlFor="sql">SQL Database Work</label>

            <input
              type="checkbox"
              name="tailwind"
              defaultChecked={entry.tailwind}
            ></input>
            <label htmlFor="tailwind">Tailwind CSS</label>

            <input
              type="checkbox"
              name="react"
              defaultChecked={entry.react}
            ></input>
            <label htmlFor="react">Built Using React</label>

            <input
              type="checkbox"
              name="api"
              defaultChecked={entry.api}
            ></input>
            <label htmlFor="api">Uses API(s)</label>
          </fieldset>
          <button type="submit"> Submit </button>
        </form>
      </section>
    </>
  );
}
