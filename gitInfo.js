/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "Git is a program that helps with version control. It allows you to track changes to code and to view that history."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'GitHub is essenially a cloud version of Git. You are able to access it online and sent your git commits to it or create ones entirely on github. It make sit easier to share projects with other developers'


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = 'Git Init creates a repository inside the folder you initilize it in. A repository is a code project so git init is initializing a new code project.'


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

const gitCloneDefinition = 'git clone copies a repo to a new repo. This allows to to work on it seperately without messing up the main file'


//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = 'git status allows you to see through the command line what is happening inside your repo. It shows which files have or havent been added to be committed. It also shows how many changes have been made since your last commit'


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = 'Git add is how to tell git to start tracking files'

const gitAddCode = 'git add .'


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCloneDefinition = 'git commit happens after you have added the file to be tracking. Committing it is what actually creates that save or snapshot of that file so you can log each change and see the history.'

const gitCommitCode = 'git commit -m "initial commit"'


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = 'Git push is how we move the file to github. Using the URL for the repository that exists in github will let our computer know to send that last commit up.'