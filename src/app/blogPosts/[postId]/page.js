// TODO: Render the chosen post individually and the comments related to it
//- Individual Post Content
//- Comments Form
//- Render list of all comments for this specific post
//- add a delete button to each comment
// ? You can organise this page in the way that works for you (components, separating concerns, having all code in here...)

import Image from "next/image";
import Link from "next/link";

export default async function dynamicPost({ params }) {
  const { postId } = params;
  console.log(postId);
  // another fetch for the specific post
  //   query.rows[0]

  // a fetch for the comments listed in the below
  return (
    <>
      {/* main image
    content */}

      {/* Comments section 
        --> each with delete button 
              --> can be link 
              --> can be a form button that deletes on the action
      */}
      {/* comments form */}
    </>
  );
}
