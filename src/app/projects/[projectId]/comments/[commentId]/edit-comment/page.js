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
      <fieldset className="grid grid-rows-3 grid-cols-2 justify-self-start h-11/12 w-screen">
        <legend>Edit User Comment:</legend>
        <Link className={editCSS.return} href={`/projects/${projectId}`}>
          {" "}
          Return to Post
        </Link>
        <form
          action={handleEditCommentForm}
          className="col-start-1 col-span-2 row-start-2 row-span-2 grid grid-cols-3"
        >
          <label
            className="col-start-1 col-span-2 row-start-1 row-span-1 items-center"
            htmlFor="username"
          >
            Name
          </label>
          <input
            className={`col-start-1 col-span-2 row-start-2 row-span-1 ${editCSS.input} mt-30 mb-30 ml-50 mr-50`}
            type="text"
            name="username"
            defaultValue={comment.username}
            required
          />

          <label
            className="col-start-3 col-span-2 row-start-1 row-span-1"
            htmlFor="content"
          >
            Post Content
          </label>
          <textarea
            className={`col-start-3 col-span-2 row-start-2 row-span-1 ${editCSS.input} ml-30 mr-30 mt-10 mb-10`}
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
          <button className={editCSS.submit} type="submit">
            submit
          </button>
        </form>
      </fieldset>
    </>
  );
}
