import { db } from "@/utils/dbConnection";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function addProject() {
  async function handleSubmit(rawFormData) {
    "use server";
    console.log("Saving post to the database...");

    const { projectName, projectDate, url, description } =
      Object.fromEntries(rawFormData);

    const newProject = db.query(
      `INSERT INTO project_blog (entry_title, entry_date, screenshot_url, entry_content) VALUES ($1, $2, $3, $4) RETURNING entry_id`,
      [projectName, projectDate, url, description],
    );

    const newProjectIdWrangle = (await newProject).rows;
    const newProjectId = newProjectIdWrangle[0];
    console.log(newProjectId.entry_id);

    // const newProject = (
    //   await db.query(
    //     `SELECT * FROM project_blog WHERE entry_title = $1, entry_date = $2, screenshot_url = $3, entry_content = $4`,
    //     [projectName, projectDate, url, description],
    //   )
    // ).rows;

    const { sql, tailwind, react, api } = Object.fromEntries(rawFormData);
    console.log(sql);
    console.log(tailwind);
    console.log(react);
    console.log(api);

    db.query(
      `INSERT INTO project_features (sql, tailwind, react, api, entry_id) VALUES ($1,$2,$3,$4,$5)`,
      [sql, tailwind, react, api, newProjectId.entry_id],
    );

    console.log("Post saved!");

    revalidatePath(`/projects`);
    redirect(`/projects`);
  }
  return (
    <>
      <form action={handleSubmit}>
        <label htmlFor="projectName">Project Name: </label>
        <input
          type="text"
          name="projectName"
          placeholder="Provide a name for your project..."
          required
        ></input>

        <label htmlFor="projectDate">Project Date: </label>
        <input
          type="date"
          name="projectDate"
          placeholder="Start or completion date"
          required
        ></input>

        <label htmlFor="url">Project Screenshot</label>
        <input
          type="text"
          name="url"
          placeholder="Please provide a url for the project"
        ></input>
        {/* can I have the user upload an image straight to the bucket, so that I can use the url from there? 
        I would have to ensure that the url is still uploaded with
        I would have to ensure that the database adds in the url: https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/ followed by the name of the image*/}

        <label htmlFor="description">Project Description</label>
        <textarea
          type="text"
          name="description"
          placeholder="Provide a description of the project"
          required
        ></textarea>

        <fieldset className="border-2 border-black m-2">
          <legend className="ml-4">
            Specify What Features The Project Includes:{"  "}
          </legend>
          <input type="checkbox" name="sql"></input>
          <label htmlFor="sql">SQL Database Work</label>

          <input type="checkbox" name="tailwind"></input>
          <label htmlFor="tailwind">Tailwind CSS</label>

          <input type="checkbox" name="react"></input>
          <label htmlFor="react">Built Using React</label>

          <input type="checkbox" name="api"></input>
          <label htmlFor="api">Uses API(s)</label>
        </fieldset>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
