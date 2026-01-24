import { db } from "@/utils/dbConnection";

export default async function editPost({ params }) {
  // get the post id
  const { projectId } = await params;
  // fetch the data for the post
  const projectQuery = (
    await db.query(`SELECT * FROM project_blog WHERE entry_id = $1`, [
      projectId,
    ])
  ).rows;
  //   console.log(projectQuery);
  const entry = projectQuery[0];
  console.log(entry);
  console.log(entry.entry_date.toLocaleDateString());

  // PUT route for updating the post
  async function handleSubmitEdit(rawFormData) {
    "use server";
    console.log(rawFormData);
  }

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
            placeholder="Provide a name for your project..."
            defaultValue={entry.entry_title}
          ></input>

          <label htmlFor="projectDate">Project Date: </label>
          <input
            type="date"
            name="projectDate"
            placeholder="Start or completion date"
            defaultValue={entry.entry_date.toLocaleDateString("en-US")}
          ></input>

          <label htmlFor="url">Project Screenshot</label>
          {entry.entry_url ? (
            <input
              type="text"
              name="url"
              placeholder="Please provide a url for the project"
              defaultValue={entry.entry_url}
            ></input>
          ) : (
            <input
              type="text"
              name="url"
              placeholder="Please provide a url for the project"
              defaultValue={"No URL provided"}
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
      </section>
    </>
  );
}
