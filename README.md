DESCRIPTION

<!--  -->

REFLECTION

<!--  -->

REQUIREMENTS AND GOALS

    🎯 Display all posts on the page, with an option to sort them in ascending or descending order.

    	- fetch and map

    	- ascending and descend by date? - sorting with query string.
    		--> conditional rendering on arrows?

    🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
        Please submit your database schema, as is mentioned in the submission instructions.

    	- SQL schema and Foreign Key on comments table

    🎯 Create a delete button on posts that allows users to delete the cmoment from the database.

    	- client side button using async params for specification of which comment

    	- can be a link to change the params

    	- can be a form button that deletes on the action

    🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.

    	- server side form

    🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).

    	- route to post, link for post, dynamic route to individual post which shows comments

    🎯 Add a revalidate path when a user creates a post to see it on submission --> you can also redirect them to the posts page.

    	- revalidate the dynamic post link!!!
    		--> you don't need to redirect after use comments
    		--> you can show the user that the thing has been posted

    	- REDIRECT IS NOT A REQUIREMENT!
    		--> redirect to post link if I do a 'add post' only


    FORM TO ADD BLOG POSTS


    🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database.
    Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.

    	- checkbox
    	- need to make

    	- links to categories by id?



    🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.

    	-

    🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.

    	-

SOURCES AND ATTRIBUTIONS

The Tech Educators logo is property of Tech Educators Ltd. https://techeducators.co.uk/

The GitHub logo is property of GitHub Inc. https://github.com/

The LinkedIn logo is property of LinkedIn Corporation. https://about.linkedin.com/?trk=homepage-basic_footer-about
