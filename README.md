# Blog Website – Content Management Guide

This repository contains the source code for the **Golden Cambodia Century (GCC) Blog Website**, a static site built using [Next.js](https://nextjs.org/) and hosted on [Vercel](https://vercel.com/). Blog articles are written in Markdown format and stored locally in the project repository.

To add or update content on the blog, follow the instructions below. Content updates are made by modifying the source code and pushing changes to the connected GitHub repository.

---

## Project Overview

* **Framework:** Next.js (using the App Router)
* **Hosting:** Vercel
* **Content Format:** Markdown (`.md`)
* **Articles Directory:** `/public/articles`
* **Thumbnails Directory:** `/public/thumbnails`
* **Image Assets Directory:** `/public/images/[article-name]/`

---

## How to Add a New Article

### 1. Create a Markdown File

* Navigate to the `/public/articles/` directory.
* Create a new `.md` file.
* The file name must:

  * Use English characters
  * Contain only letters, numbers, and hyphens (`-`)
  * End with `.md`
  * Example: `British-Embassy-Exchange-Event.md`

> Note: The file name is used in image references and routing, so ensure it is simple and consistent.

### 2. Use the Standard Template

Each article must include metadata (frontmatter) at the top, followed by the content written in standard Markdown syntax.

**Example:**

```md
---
title: "柬埔寨下週舉辦勝利日46週年慶典"
subtitle: "Read more about this article."
date: "2025-01-03"
tags: [""]
---

![Image1](/thumbnails/46th-Victory-Day.jpg "Meeting")

*資料圖。人民黨慶祝勝利日。 （圖：洪森臉書）*

（金邊訊）今年1月7日將迎來柬埔寨推翻波爾布特種族滅絕制度46週年，人民黨將在金邊鑽石島隆重舉行慶典，預計吸引超過2萬名黨員參加。
<br/>
金邊市長坤盛透露，為紀念這段歷史性日子，當局將與軍隊密切配合，加強活動期間的治安保障，確保慶典順利進行。
<br/>
...
```

* The `title`, `subtitle`, and `date` fields are required.
* The `tags` field is optional (currently unused but may be useful for future development).
* Use `<br/>` tags to create line breaks if Markdown formatting does not produce the desired layout.

---

## Adding Article Images

### Thumbnails

Each article must include a thumbnail image.

* File format: `.jpg`
* File name: Must match the Markdown file name exactly
* Location: `/public/thumbnails/`

**Example:**

For `British-Embassy-Exchange-Event.md`, the corresponding thumbnail should be:

```
/public/thumbnails/British-Embassy-Exchange-Event.jpg
```

### Article Images

* Optional images used within the article should be placed in:

  ```
  /public/images/[article-name]/
  ```

* Images can be named freely, as long as they are referenced correctly in the Markdown content.

**Example:**

```md
![Exchange Ceremony](/images/British-Embassy-Exchange-Event/ceremony.jpg "Exchange Event")
```

---

## Deployment Process

### Local Development

To preview changes before pushing:

```bash
npm install
npm run dev
```

### Production Build

Always test a production build before pushing to GitHub:

```bash
npm run build
```

Resolve any errors before continuing.

### Deployment

1. Push changes to the GitHub repository.
2. Vercel will automatically redeploy the site using the latest commit.

---

## Environment Variables

The project uses the following environment variable:

```
GCC_URL="https://example.vercel.app"
```

This is defined in `.env.local` and represents the base URL of the website. Update as needed if the domain changes.

---

## Updating Dependencies

To update dependencies in the project:

```bash
npm install       # Install all dependencies
npm update        # Update outdated packages
```

To update a specific package:

```bash
npm install package-name@latest
```

After any update, confirm that the project builds correctly:

```bash
npm run build
```

---

## Content Guidelines

* Follow the structure and formatting of existing articles as a reference.
* Use standard Markdown syntax.
* Maintain consistent naming between files and associated images.
* The title in the frontmatter can be in any language. The file name should be a simplified English version (typically a translation or short form).

---

## Git Instructions

Use the following basic Git commands to manage content updates:

```bash
git pull                    # Get the latest changes
git add .                   # Stage all changes
git commit -m "Add: New article - Victory Day"
git push origin main        # Push to GitHub
```

You may use Git tools like GitHub Desktop or Git integration in VS Code if preferred.

---

## Support

For questions or troubleshooting:

* Review a similar article file for reference
* Verify that thumbnails and images are named and placed correctly
* Check Vercel’s deployment logs via the dashboard if the site does not update after a push
