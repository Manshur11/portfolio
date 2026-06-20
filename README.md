# Portfolio — Starter

This is a simple responsive portfolio starter built for Manshur11.

How to use
1. Replace placeholder text in `index.html` (bio, project links, and email).
2. Edit/add project cards in the Projects section.
3. Replace avatar by placing an image at `avatar.png` and swapping the `src` in `index.html`.

Local preview
- Open `index.html` in a browser for a quick preview.
- Or run a static server (recommended):
  - Python 3: `python -m http.server 8000` then open http://localhost:8000

Deploy to GitHub Pages
1. Create a repo on GitHub named e.g. `manshur-portfolio` (or whatever you like).
2. Commit these files and push to the repository's default branch (usually `main`):
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repository Settings → Pages, set the source to "Deploy from a branch" → `main` (root) and save. The site will be published at `https://<your-username>.github.io/<your-repo>/` (or if using a repo named `<your-username>.github.io`, it will publish at `https://<your-username>.github.io/`).

If you'd like, I can push these files to an existing repo and enable GitHub Pages for you — give me the repo name (owner/repo) and confirm you want me to create the files there.
