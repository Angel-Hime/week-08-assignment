import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteComment({ params }) {
  const { projectId } = await params;
  const { commentId } = await params;
  console.log(projectId);

  async function handleDelete() {
    "use server";
    console.log(`deleting post...`);

    db.query(`DELETE FROM entry_comments WHERE comment_id = $1`, [commentId]);
    console.log("post deleted");
    revalidatePath(`projects/${projectId}`);
    redirect(`projects/${projectId}`);
  }

  handleDelete();
}
