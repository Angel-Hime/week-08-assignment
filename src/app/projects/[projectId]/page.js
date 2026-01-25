// TODO: Render the chosen post individually and the comments related to it
//- Individual Post Content
//- Comments Form
//- Render list of all comments for this specific post
//- add a delete button to each comment
// ? You can organise this page in the way that works for you (components, separating concerns, having all code in here...)

import { db } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import projectCSS from "./project.module.css";

export default async function dynamicProjectPage({ params, searchParams }) {
  const { projectId } = await params;
  // console.log(projectId);

  const projectQuery = (
    await db.query(`SELECT * FROM project_blog WHERE entry_id = $1`, [
      projectId,
    ])
  ).rows;
  // console.log(projectQuery);
  const entry = projectQuery[0];
  // console.log(entry);
  // another fetch for the specific post
  console.log(entry.entry_date.toLocaleDateString());

  const comments = (
    await db.query(`SELECT * FROM entry_comments WHERE entry_id = $1`, [
      projectId,
    ])
  ).rows;
  console.log(comments);
  // a fetch for the comments listed in the below

  // New comment form
  async function handleSavePostForm(formData) {
    "use server";
    console.log("Saving comment to the database...");

    const title = formData.get("username");
    const content = formData.get("content");

    db.query(
      `INSERT INTO entry_comments (username, comment, entry_id) VALUES ($1, $2, $3)`,
      [title, content, projectId],
    );
    console.log("Comment saved!");

    revalidatePath(`${entry.entry_id}`);
  }

  async function handleDelete(formData) {
    "use server";
    const commentId = formData.get("comment_id");
    console.log(commentId);

    console.log(`deleting post...`);

    db.query(`DELETE FROM entry_comments WHERE comment_id = $1`, [commentId]);
    console.log("post deleted");
    revalidatePath(`${projectId}`);
  }

  // const queryString = await searchParams;
  // if (queryString.sort === "desc") {
  //   comments.sort((a, b) => {
  //     return b.comment_date
  //       .toLocaleDateString("en-CA")
  //       .localeCompare(a.comment_date.toLocaleDateString("en-CA"));
  //   });
  // } else if (queryString.sort === "asc") {
  //   comments.sort((a, b) => {
  //     return a.comment_date
  //       .toLocaleDateString("en-CA")
  //       .localeCompare(b.comment_date.toLocaleDateString("en-CA"));
  //   });
  // }

  return (
    <>
      <section className="grid grid-cols-4 grid-rows-6 m-10 h-9/12 overflow-hidden items-center">
        <div className="row-start-1 col-start-1 row-end-4 col-end-3 justify-self-center self-center">
          {entry.screenshot_url ? (
            <Image
              src={entry.screenshot_url}
              alt={`image showing the web app ${entry.entry_title}`}
              width={700}
              height={300}
            />
          ) : (
            <h2>
              {" "}
              Image not provide, click edit to update project: &quot;
              {entry.entry_title}&quot;
            </h2>
          )}
        </div>

        <main className="row-start-4 row-end-7 col-start-1 col-end-3 self-baseline-last justify-self-center flex flex-col items-center overflow-scroll h-11/12">
          <p className="self-start ">Project Title: </p>
          <p>{entry.entry_title}</p>
          <p className="self-start ">Completion Date:</p>
          <p>{entry.entry_date.toLocaleDateString()}</p>
          <p className="self-start ">Project Requirements & Stretch Goals:</p>
          <p className="mb-5 ">{entry.entry_content}</p>

          <Link
            className={projectCSS.links}
            href={`/projects/${entry.entry_id}/edit`}
          >
            Edit Post
          </Link>
        </main>

        {/* comments section */}
        <fieldset className="row-start-1 row-end-4 col-start-3 col-end-5 flex flex-col overflow-scroll h-10/12">
          <legend>User Comments:</legend>
          {/* sorting buttons */}
          {/* <Link href={`${projectId}?sort=asc`}> Sort Ascending </Link> -{" "}
      <Link href={`${projectId}?sort=desc`}> Sort Descending </Link> */}
          {comments.map((comment) => (
            <div
              className="flex flex-col gap-2 items-center"
              key={comment.comment_id}
            >
              <p>
                {comment.username} -{" "}
                {comment.comment_date.toLocaleString("en-UK")}{" "}
              </p>
              <p>&quot;{comment.comment}&quot;</p>

              <form action={handleDelete}>
                <input
                  name="comment_id"
                  defaultValue={comment.comment_id}
                  type="hidden"
                />
                <button className={projectCSS.links} type="submit">
                  Delete Comment
                </button>
              </form>
              <Link
                className={projectCSS.links}
                href={`${projectId}/comments/${comment.comment_id}/edit-comment`}
              >
                Edit Comment
              </Link>
            </div>
          ))}
        </fieldset>

        {/* comments form */}
        <section className="row-start-4 row-end-7 col-start-3 col-end-5 self-center overflow-scroll mt-10 mb-10">
          <form action={handleSavePostForm}>
            <fieldset className="flex flex-col items-center  gap-2">
              <legend>Leave A Comment:</legend>
              <label className="" htmlFor="username">
                Name
              </label>
              <input
                className={projectCSS.input}
                type="text"
                name="username"
                placeholder="Enter your name..."
                required
              />

              <label className="" htmlFor="content">
                Post Content
              </label>
              <textarea
                className={`  ${projectCSS.input} overflow-scroll max-h-20 min-h-20`}
                type="text"
                name="content"
                rows="5"
                cols="75"
                placeholder="Enter your comment here..."
                required
              />
              {/* below needs to be a radio so that I can categorise comments too */}
              {/* <label className="bg-gray-100 text-gray-950" htmlFor="category_id">
              Category
            </label>
            <select
              className="bg-gray-500"
              type="number"
              name="category_id"
              required
              defaultValue={"Select Random..."}
            >
              <option value={"Select Random..."} disabled>
                Select...
              </option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
            </select> */}
              <button className={projectCSS.links} type="submit">
                submit
              </button>
            </fieldset>
          </form>
        </section>
      </section>
    </>
  );
}
