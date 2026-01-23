export default function addProject() {
  async function handleSubmit() {
    "use server";
  }
  return (
    <>
      <form action={handleSubmit}>
        <label htmlFor="projectName">Project Name: </label>
        <input name="projectName"></input>

        <label htmlFor="projectDate">Project Date: </label>
        <input
          name="projectDate"
          placeholder="Start or completion date"
        ></input>

        <label>Project Screenshot</label>
        <input placeholder="Please provide a url for the project"></input>
        {/* can I have the user upload an image straight to the bucket, so that I can use the url from there? 
        I would have to ensure that the url is still uploaded with
        I would have to ensure that the database adds in the url: https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/ followed by the name of the image*/}

        <label></label>
        <input></input>

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
      </form>
    </>
  );
}
