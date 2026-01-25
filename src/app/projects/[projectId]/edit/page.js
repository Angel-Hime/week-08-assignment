import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import editCSS from "./editProject.module.css";

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
      {/* form with post content filled as value={content} */}
      <fieldset>
        <legend>Edit Post: {entry.entry_title}</legend>

        <form
          className="grid grid-cols-4 grid-rows-6 h-12/12 overflow-hidden items-center"
          action={handleSubmitEdit}
        >
          {/* link to return to post */}
          <Link className={editCSS.return} href={`/projects/${projectId}`}>
            {" "}
            Return to Post
          </Link>
          <div className="col-start-2 col-span-1 row-start-2 row-span-1 justify-center">
            <label htmlFor="projectName">Project Name: </label>
            <input
              type="text"
              name="projectName"
              defaultValue={entry.entry_title}
              className={editCSS.input}
            ></input>
          </div>

          <div className="col-start-3 col-span-1 row-start-2 row-span-1 justify-center">
            <label htmlFor="projectDate">Project Date:</label>
            <input
              type="date"
              name="projectDate"
              defaultValue={formattedDate}
              className={editCSS.input}
            ></input>
          </div>

          <div className="col-start-1 col-span-1 row-start-3 row-end-6 place-self-center justify-center flex flex-col gap-2">
            <label htmlFor="url">Project Screenshot</label>
            {entry.screenshot_url ? (
              <>
                {" "}
                <input
                  type="url"
                  name="url"
                  defaultValue={entry.screenshot_url}
                  className={editCSS.input}
                />
                <p>Image Provided: </p>
                <Image
                  src={entry.screenshot_url}
                  alt={`submitted image for ${entry.entry_title}`}
                  height={300}
                  width={400}
                />
              </>
            ) : (
              <input
                type="text"
                name="url"
                placeholder="No URL provided, please provide..."
                className={editCSS.input}
                defaultValue={""}
              ></input>
            )}
          </div>
          {/* can I have the user upload an image straight to the bucket, so that I can use the url from there? 
        I would have to ensure that the url is still uploaded with
        I would have to ensure that the database adds in the url: https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/ followed by the name of the image*/}

          <div className="col-start-2 col-span-1 row-start-3 row-span-3 justify-center flex flex-col ">
            <label htmlFor="description">Project Description</label>
            <textarea
              className={`min-h-70 max-h-70 min-w-60 max-w-60 self-center ${editCSS.input}`}
              type="text"
              name="description"
              placeholder="Provide a description of the project"
              defaultValue={entry.entry_content}
            ></textarea>
          </div>

          <fieldset className="col-start-3 col-span-1 row-start-3 row-span-3 justify-center">
            <legend className="ml-4">
              Specify What Features The Project Includes:{"  "}
            </legend>
            <input type="checkbox" name="sql" defaultChecked={entry.sql} />
            <label htmlFor="sql">SQL Database Work</label>

            <input
              type="checkbox"
              name="tailwind"
              defaultChecked={entry.tailwind}
            />
            <label htmlFor="tailwind">Tailwind CSS</label>

            <input type="checkbox" name="react" defaultChecked={entry.react} />
            <label htmlFor="react">Built Using React</label>

            <input type="checkbox" name="api" defaultChecked={entry.api} />
            <label htmlFor="api">Uses API(s)</label>
          </fieldset>
          <button className={editCSS.submit} type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </fieldset>
    </>
  );
}
