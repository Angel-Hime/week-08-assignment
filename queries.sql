CREATE TABLE IF NOT EXISTS project_blog(
  entry_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  entry_title VARCHAR(100),
  entry_date DATE,
  screenshot_url TEXT,
  entry_content TEXT
);


INSERT INTO project_blog (entry_title, entry_date, screenshot_url, entry_content) VALUES ('Week 01: Build Out the Website', '2025-11-22', 'https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-01.png', '
    🎯 Ensure each section of the webpage is wrapped in the correct semantic tags, ensuring that includes a <header>, <nav>, and <footer>.
    🎯 Implement CSS absolute positioning to overlay text on an image or another element.
    🎯 Utilise CSS Flexbox to create a flexible and responsive layout, particularly in the <nav> element.
    🎯 Ensure all image elements (<img>) and background images are correctly implemented with accurate file paths.

    🏹 Create a “back to top” button.
    🏹 Implement smooth scrolling for internal links to improve user experience.
    🏹 Implement a hover effect on buttons to make them more interactive.
    🏹 Create a basic footer with social media icons that link to social media pages.
    🏹 Add a background music track that plays automatically when the website loads.
' ),
('Week 02: Build an Accessible Image Gallery', '2025-11-28', 'https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-02.png','🎯 Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).
    🎯 Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned).
    🎯 Ensure all images have appropriate alt text attributes for accessibility.
    🎯 Correctly use event handlers to switch images based on user interactions.

    🏹 Use ‘srcset’ to specify which image will be used based on the size of the screen for optimal viewing experience.
    🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.
    🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.'),
('Week 03: Build a Cookie Clicker Game', '2025-12-05', 'https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-03.png', ' 🎯 Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count.
    🎯 Ensure that functions are used effectively to keep code organised and reusable.
    🎯 Implement event listeners to handle user interactions.
    🎯 Use local storage to save and restore the cookie count and relevant game information.
    🎯 Use setInterval to increment the cookie count and manage the game state each second.
        Managing the game state includes saving progress and updating the DOM.

    🏹 Consolidate upgrade management by managing all upgrades in a single function.
    🏹 Improve UX with animations, sound effects, or other visual effects.
    🏹 Fantastic use of README to provide important information such as a description of the project, how to deploy and other app information.
    🏹 Implement error handling using try/catch.
    🏹 Create a menu for users to adjust game options like sound effects or display preferences.'),
('Week 04: Build a Full-Stack Guestbook', '2025-12-11', 'https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-04.png', ' 🎯 Ensure your HTML form is working and submitting data into the database as expected.
    🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
    🎯 Create a working GET API route in your server.
    🎯 Create a working POST API route in your client.
    🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

    🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
    🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
    🏹 Add a delete button to each message and a DELETE route in the server.
    🏹 Create an option for users to like others’ posts.'),
('Week 05 Project: Design and Build a Full Stack Application', '2025-12-18', 'https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-05.png', 'A group task to create a full stack application with personal requirements and stretch goals. This was a task set in order to learn and develop teamworking skills in a software development scenario'),
('Week 06: Build an Accessible Gallery using React', '2026-01-10','https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-06.png', '
    🎯 Implement the useState hook to manage gallery state (e.g. selected image).
    🎯 Use useEffect for initial fetching of images from an external API.
    🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
    🎯 Use the .map() function to render an array of images dynamically
    🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
    🎯 Ensure all images have meaningful alt text.
    🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

    🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.
    🏹 Set up an Unsplash application that you can fetch from your React app.
    🏹 Use .env to hide your API keys and tokens from the code.
    🏹 Style the application excellently, using grid or flex and positioning.

' ),
('Week 07: Build a Database Driven Full Stack React & Express App', '2026-01-18', 'https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-07.png', '
    🎯 Create a client using React.
    🎯 Use Express to create your server, using both GET and POST endpoints.
    🎯 Build a React form for users to create posts.
    🎯 Create multiple pages using React Router.
    🎯 Design a database schema, and seed the database with some realistic data.
    🎯 Use SQL to retrieve posts from the database in your Express server.
    🎯 Display all posts using .map().
    🎯 Use an interval and useEffect() to poll your database.


    🏹 Create dynamic pages using react-router.
    🏹 Use react-router to create a dedicated route for the categories
        For example, /posts/:categoryName.
    🏹 Allow users to delete posts.
    🏹 Add ‘like’ functionality on posts.
    🏹 Create additional SQL queries to show filtered posts.

'),
('Week 08: Build a Blog with a Comments Form', '2026-01-22', 'https://khdjybgvbyycjwrbvmtq.supabase.co/storage/v1/object/public/assignment%20blog/week-8-assignment/assignment-8.png', '
    🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
    🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
        Please submit your database schema, as is mentioned in the submission instructions.
    🎯 Create a delete button on posts that allows users to delete the post from the database.
    🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
    🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
    🎯 Add a redirect when a user creates a post to redirect them to the posts page.

    🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.
    🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
    🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.
')
  
  CREATE TABLE IF NOT EXISTS project_features(
  features_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  sql BOOLEAN,
  tailwind BOOLEAN,
  react BOOLEAN,
  api BOOLEAN,
  entry_id INT REFERENCES project_blog(entry_id)
)

INSERT INTO project_features (sql, tailwind, react, api, entry_id) VALUES (false, false, false, false, 1),
(false, false, false, false, 2),
(false, false, false, false, 3),
(true, false, false, true, 4),
(true, false, false, true, 5),
(false, true, true, true, 6),
(true, true, true, true, 7)

CREATE TABLE IF NOT EXISTS entry_comments(
  comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(40),
  comment TEXT,
  comment_date TIMESTAMP DEFAULT current_timestamp,
  entry_id INT REFERENCES project_blog(entry_id)
);

INSERT INTO entry_comments (username, comment, entry_id) VALUES ('Bob', 'Great project!', 1),
('That One Guy', 'This is good', 2),
('Chloe', 'Oh this looks cool', 3),
('Fleur', 'I like this one!', 4),
('Craig', 'Good work!', 5),
('Helder', 'This is impressive', 6),
('Tomas', 'Oh wow!', 7),
('Annabel', 'I really like this assignment! ☺️', 8)
