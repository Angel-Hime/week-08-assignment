import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import editCSS from "@/app/projects/[projectId]/edit/editProject.module.css";
// TODO: Make a comment edit

export default async function editComment({ params }) {
  const { projectId } = await params;
  const { commentId } = await params;

  const commentQuery = (
    await db.query(
      `SELECT * FROM entry_comments WHERE entry_id = $1 AND comment_id = $2`,
      [projectId, commentId],
    )
  ).rows;
  const comment = commentQuery[0];
  console.log(comment);

  async function handleEditCommentForm(rawFormData) {
    "use server";
    // Edit comment form

    console.log("Updating comment and saving to the database...");

    const { username, content } = Object.fromEntries(rawFormData);
    db.query(
      `UPDATE entry_comments SET username = $1, comment = $2, entry_id = $3 WHERE comment_id = $4`,
      [username, content, projectId, commentId],
    );
    console.log("Comment updated!");

    revalidatePath(`/projects/${projectId}`);
    redirect(`/projects/${projectId}`);
  }
  return (
    <>
      <fieldset className="grid justify-self-start">
        <legend>Edit User Comment:</legend>
        <Link className={editCSS.return} href={`/projects/${projectId}`}>
          {" "}
          Return to Post
        </Link>
        <form action={handleEditCommentForm}>
          <label htmlFor="username">Name</label>
          <input
            className={editCSS.input}
            type="text"
            name="username"
            defaultValue={comment.username}
            required
          />

          <label htmlFor="content">Post Content</label>
          <textarea
            className={`${editCSS.input}`}
            type="text"
            name="content"
            rows="10"
            cols="30"
            defaultValue={comment.comment}
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
          <button type="submit">submit</button>
        </form>
      </fieldset>
    </>
  );
}
