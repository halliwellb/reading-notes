# Text Editors

The one thing to remember is that there's no one "right" editor. You will be using this application **a lot** so choose one that you're comfortable with and work efficiently on.

### (1.) Some features to look for in a text editor (4 suggestions, plus a reminder)

+ Code completion
  + This will offer suggestions of code as you type, might provide closing tags or brackets, etc.
  + **Emmet** is a shorthand language that can speed up your code writing and some text editors have it built in, while others require an extension to be added
+ Syntax Highlighting
  + Syntax highlighting can make finding an error in your code much simpler as elements, copy, and attributes all appear as different colors.
  + This can also make your code more organized and easier to read
+ Variety of themes to pick from
  + Helpful to have options of background color that contrasts well with the text.
  + This can reduce fatigue and eye strain
+ Robust extensions
  + As you get better, extensions can become an important piece of your toolbox.
  + Having a great amount of options from the beginning can save having to change editors midway through.
+ Whatever your personal preferences are above that!
  + Again, there is no one "right" editor!!

### Pre-installed options
  + Windows comes with *Notepad* and Mac comes with *Text Edit*
  + Linux comes with a text editor, but depends on the setup

# The command line

Can be helpful to have multiple terminals open at one time to make work more efficient.
When typing a command, must separate the command with the first command line argument.
After the command has run and the terminal is ready to continue, the prompt will display again (root@Bens_Lenovo)
Commands are stored in a history. After you enter a command and continue to the prompt, you can hit the up and down arrow keys to move between past commands. 
This can be a big time saver for repeat tasks.

## (2.) Commands

+ pwd = Print Working Directory
+ ls = List (with no arguments, ls will list current location)
+ cd = Change Directory (with no arguments, cd will take you to home directory)
+ mkdir = Make Directory
+ touch = Creates a blank file if we refer to a file and it does not exist

  ### File types

    + file.exe = executable file or program
    + file.txt = plain text file
    + file.png, file.jpg, file.gif = image file

## (3.) Explanations of commands and arguments
+ cd projects = **Telling the terminal to take us to directory "projects"**
+ mkdir new-project = **Creating a new directory "new-project"**
+ touch new-project/newfile.md = **Telling the terminal to go to "newfile.md" within "new-project"; if not present, create a new file**
+ cd.. = **With no arguments, cd will take us back to the home directory; with arguments, will take us to the location specified**
+ ls projects/new-project = **We are telling ls to not list our current directory, but rather the contents of the specified directory**
