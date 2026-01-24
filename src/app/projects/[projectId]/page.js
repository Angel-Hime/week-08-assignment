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
import { redirect } from "next/navigation";

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
      {/* main image
    content */}
      <h2>{entry.entry_title}</h2>
      {entry.screenshot_url ? (
        <Image
          src={entry.screenshot_url}
          alt={`image showing the web app ${entry.entry_title}`}
          width={500}
          height={300}
        />
      ) : (
        <h2>
          {" "}
          Image not provide, click here to navigate to project{" "}
          {entry.entry_title}
        </h2>
      )}
      <p>{entry.entry_content}</p>
      <p>{entry.entry_date.toLocaleDateString()}</p>
      <Link href={`/projects/${entry.entry_id}/edit`}>Edit Post</Link>
      {/* sorting buttons */}
      {/* <Link href={`${projectId}?sort=asc`}> Sort Ascending </Link> -{" "}
      <Link href={`${projectId}?sort=desc`}> Sort Descending </Link> */}
      <section>
        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <p>Comment ID: {comment.comment_id}</p>
            <p>{comment.username}</p>

            <p>Date: {comment.comment_date.toLocaleString("en-UK")} </p>
            <p>{comment.comment}</p>
            {/* <Link href={`/projects/${projectId}/${comment.comment_id}`}>
              Delete
            </Link> */}
            <form action={handleDelete}>
              <input
                name="comment_id"
                defaultValue={comment.comment_id}
              ></input>
              <button type="submit">Delete</button>
            </form>
          </div>
        ))}
      </section>
      {/* comments form */}
      <section>
        <form
          action={handleSavePostForm}
          className="bg-gray-50 p-10 flex flex-col gap-2"
        >
          <fieldset>
            <legend>Leave A Comment:</legend>
            <label className="bg-gray-100 text-gray-950" htmlFor="username">
              Name
            </label>
            <input className="bg-gray-500" type="text" name="username" />

            <label className="bg-gray-100 text-gray-950" htmlFor="content">
              Post Content
            </label>
            <textarea
              className="bg-gray-500"
              type="text"
              name="content"
              rows="10"
              cols="30"
              placeholder="Enter your comment here..."
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
            <button
              className="bg-gray-300 text-gray-950 hover:bg-violet-400"
              type="submit"
            >
              submit
            </button>
          </fieldset>
        </form>
      </section>
    </>
  );
}
