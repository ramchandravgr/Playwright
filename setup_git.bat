@echo off
echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Committing files...
git commit -m "Initial commit"

echo Renaming branch to main...
git branch -M main

echo Adding remote origin...
git remote add origin https://github.com/ramchandravgr/Playwright.git

echo Pushing to remote...
git push -u origin main

pause
