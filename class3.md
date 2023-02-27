# Revisions and Discussion
The topic we are covering is allowing your computer to communicate with your GitHub file storage. This is an extremely important topic because the ability to store your files on GitHub's servers and your local drive means the likelihood of losing your files almost nill. It also promotes a team's ability to work collaboratively with distance becoming a non-factor.

## Version Control

(1.) *Version Control* allows you to revisit a file at any point that it has been worked on and see changes as they occured. This can be a big time-saver because it allows you to efficiently work through code line-by-line to find bugs or errors without redoing the work entirely.

## Cloning

(2.) *Cloning* is the ability to bring your repository from GitHub's server to your local drive. You can then make changes on your drive and push the changes to GitHub's servers. This strengthens the security in case of drive failiure or server crash.

## Command for tracking and staging files

(3.) The command for *tracking and staging files* is git add (file name). You can also track all files in a repository with git add *. 

After tracking the files, you need to commit the changes made with git commit -m "message here"

## Command to send files back to GitHub

(4.) The command to send changed files back to GitHub is git push origin main. This will send your updates back to the GitHub server and equalize your local drive files and your GitHub server files.