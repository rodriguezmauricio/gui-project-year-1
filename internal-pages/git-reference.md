# Git Command Reference
### Neural — gui-project-year-1 · Mauricio & Eamon

---

## Daily use

| Command | What it does |
|---|---|
| `git status` | See which files are changed, staged, or untracked |
| `git add .` | Stage all changed files for the next commit |
| `git add filename.html` | Stage one specific file only |
| `git commit -m "message"` | Save staged changes with a description |
| `git push origin main` | Upload your commits to GitHub |
| `git pull origin main` | Download the latest changes from GitHub |

> **Good habit:** Always run `git pull origin main` before starting any new work session. Prevents the most common merge conflicts.

---

## Branches — one per feature

| Command | What it does |
|---|---|
| `git branch` | List all local branches, highlights current one |
| `git checkout -b feature/home-page` | Create a new branch and switch to it |
| `git checkout main` | Switch back to the main branch |
| `git push -u origin feature/home-page` | Push a new branch to GitHub for the first time |
| `git branch -d feature/home-page` | Delete a branch locally after it's been merged |

> **Rule:** Never commit directly to `main`. Every piece of work gets its own branch. Open a Pull Request on GitHub, the other person reviews it, then merge.

---

## Keeping in sync with each other

| Command | What it does |
|---|---|
| `git pull origin main` | Get the other person's merged changes before starting work |
| `git fetch origin` | Check what's changed on GitHub without applying it yet |
| `git log --oneline` | See recent commit history in a compact list |
| `git diff` | See exactly what lines have changed since last commit |

---

## Fixing mistakes

| Command | What it does |
|---|---|
| `git restore filename.html` | Discard unsaved changes to a file and revert it |
| `git restore --staged filename.html` | Unstage a file without losing your changes |
| `git commit --amend -m "new msg"` | Fix the last commit message before pushing |
| `git stash` | Temporarily shelve changes so you can switch branches |
| `git stash pop` | Bring back the stashed changes |

---

## Config — one-time setup

| Command | What it does |
|---|---|
| `git config user.email "g00485734@atu.ie"` | Set email for this repo only (no `--global` flag) |
| `git config --global user.name "Mauricio Rodriguez"` | Set name globally across all repos |
| `git remote -v` | Show which GitHub repo this folder is connected to |

---

## Progress tracking — commit message convention

Include `[done:N]` in your commit message to automatically tick a step in the guide.

```bash
# Mark one step done
git commit -m "feat: add hero section [done:9]"

# Mark multiple steps at once
git commit -m "feat: render tool cards and add save button [done:10,11]"
```

GitHub Actions picks it up, updates `progress.json`, and both of you see the change next time you open the guide page.

---

## ⚠️ Danger zone — use carefully

| Command | Risk |
|---|---|
| `git reset --hard HEAD` | Wipes all uncommitted changes permanently — cannot be undone |
| `git push --force origin main` | Overwrites GitHub history — dangerous in a shared repo, avoid this |

---

## Typical workflow for a new feature

```bash
# 1. Make sure you have the latest code
git pull origin main

# 2. Create a branch for your feature
git checkout -b feature/home-page

# 3. Write your code, then stage and commit
git add .
git commit -m "feat: add hero section and featured grid [done:9]"

# 4. Push the branch to GitHub
git push -u origin feature/home-page

# 5. On GitHub — open a Pull Request into main
#    The other person reviews it, then you merge

# 6. Back in terminal — switch to main and pull the merge
git checkout main
git pull origin main

# 7. Clean up the branch locally
git branch -d feature/home-page
```
