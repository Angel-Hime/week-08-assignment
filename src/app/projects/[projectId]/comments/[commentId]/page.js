import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// TODO: Make a comment edit

export default async function editComment({ params }) {
  const { projectId } = await params;
  const { commentId } = await params;
  return (
    <>
      <h1>Edit User Comment</h1>
    </>
  );
}
