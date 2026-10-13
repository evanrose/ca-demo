# Connective Agency Site Build

Upon installation of WordPress as well as Advanced Custom Fields Pro and the Classic Editor plugins, create custom post types of Work (or Case Studies) and, optionally, News. News may use the built in Post post type.

## ca-2026 theme

Create the files:

1. index.php (containing only an opening `<?php` tag)
2. functions.php
3. 404.php
4. header.php
5. page.php
6. single.php
7. style.css (containing theme metadata)

## wp-admin

In the Work post type add the Industry and Work Types (Brand + Website, etc) as taxonomies and populate with content. Add fields for choosing these taxonomies and featured image rollover state. Use Title and Content fields for the project title and case study content. The case study links will link to the project permalink.

## ca-2026 theme

Create a template file for case studies called `single-work.php`.

## ca-demo/index.html

Copy everything from `<!doctype html>` to `</header>` and add to `header.php`.

## wp-admin

1. Create an Options page for the website and add fields to it for logos, a custom menu (optional), office address, email address, social images and links, etc.
2. Create top-nav menu under Appearance > Menus or build a custom menu.
3. Create a page called Home, title it home, and add hero content to The Content field, or add this content to the options page.

## ca-2026

In `header.php`, get this content and display it on the page. Write necessary code to enqueue CSS and JavaScript files in `functions.php`.

## ca-demo/index.html

Repeat the necessary steps above for footer.php, copying from `<footer...` to `</html>`.

## wp-admin

In Advanced Custom Fields, create a Flexible Content field group containing groups for Team, Work, and News and attach it to Home.

**Team** should contain a content editor box.

**Work** should contain a Work post type multi-chooser or repeater.

**News** can contain a News post type multi-chooser or repeater unless the desire is to show the last x number of posts in which case there need be no fields.

## ca-2026 theme

Create a `parts` directory and create `team.php`, `work.php`, and `news.php` within it. Add code to `page-work.php` to get all fields and to include the Template Parts based on the names the of Flexible Content rows.

## ca-demo/index.html

Copy the entire `sections` to their corresponding `parts` .php files. Write code to accept the arguments from the `get_template_part()` function within `page-home.php`.

Copy the `assets` directory to the theme and update paths in the theme `.php`.

**Do not modify files in assets/css**

Run `sass --watch assets/scss:assets/css` within the theme directory and modify files in `assets/scss`. Update paths in `assets/scss` files accordingly.

## ca-2026 theme

In `parts/work.php` take care to alternate the `project-0` and `project-1` class names as well as the `order-first` and `order-last` class names while looping over projects.

## wp-admin

Create Capability, Company, and Privacy Policy pages and link to them appropriately. They will use the `page.php` by default. To create custom pages for them, create and name theme files like `page-branding-messaging.php`, `page-careers.php`, etc.
