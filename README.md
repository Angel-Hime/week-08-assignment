# week-08-assignment

# Full Stack Blog Application

__Project Overview__

I used this opportunity to create a portfolio for my projects! This acts just like a blog would and after learning about authentication I hope to update this to prevent other users from editting my posts or adding new ones. Users can comment on posts as well as showing specific posts based on the features each of them have, which I hope to also update with more time.

__Reflection__

Requirements:

🎯 Display all posts on the page, with an option to sort them in ascending or descending order.

    [x] fetch and map
    [x] ascending and descend by date? - sorting with query string.

🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
        Please submit your database schema, as is mentioned in the submission instructions.

    [x] SQL schema and Foreign Key on comments table

🎯 Create a delete button on posts that allows users to delete the cmoment from the database.

    [x] can be a form button that deletes on the action

🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.

    [x] server side form

🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).

    [x] route to post, link for post, dynamic route to individual post which shows comments

🎯 Add a revalidate path when a user creates a post to see it on submission --> you can also redirect them to the posts page.

    [x] revalidate the dynamic post link!
    [x] redirect used to projects list page after a new post is added or a post is editted

Stretch Goals:

🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database.
    Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.

    [x] checkboxes
    [x] The form posts to two tables (project_blog table and project_features)
    [x] entry links to categories by entry_id

🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.

    [x] all tables are updated following the post being editted

🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.

    [x] comments can also be editted 

  
I wanted to do so much with this project but I ran out of time; I think I did a pretty good job on this one, I am pretty proud of it but please let me know of any issues as I am sure there are some!

I struggled on figuring out the form button and splitting the date after sourcing it from the database but after Manny provided a source for the latter, I was able to sort it out. I was also able to figure out how to use form buttons to complete the delete functionality.

I used a very basic wireframe before moving onto developing as I wasn't entirely sure on how best to style this application. The problem I find myself dealing with is taking a long time to figure out what is the best CSS to use to create a solid UI and UX, so whilst I did miss out responsive design on this project, I worked hard to develop a reasonably solid design by the end of the project. Reaching this point in the bootcamp I realised that I truly needed to complete css practice and research and have thankfully improved my design skills since completing the bootcamp.
 
SOURCES AND ATTRIBUTIONS

    The Tech Educators logo is property of Tech Educators Ltd. https://techeducators.co.uk/
    
    The GitHub logo is property of GitHub Inc. https://github.com/
    
    The LinkedIn logo is property of LinkedIn Corporation. https://about.linkedin.com/?trk=homepage-basic_footer-about
    
    Home Logo - Code icons created by juicy_fish - Flaticon - https://www.flaticon.com/free-icons/code
    
    Animated Home Logo - Programming language animated icons created by Freepik - Flaticon - https://www.flaticon.com/free-animated-icons/programming-language
    
    Date and Time Handling: https://www.freecodecamp.org/news/how-to-format-a-date-with-javascript-date-formatting-in-js/
    
    String Manipulation: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
