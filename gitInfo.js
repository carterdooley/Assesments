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

let gitDefinition = 'A terminal used to create, grab, and send files and folders to repositories online.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'A website to store your repositories, and shows all versions of commits of a project that you send to your repositories.'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = new Object()
init.desciption = 'A command that allows you to creat a repository for github inside of a local folder.'
init.code = 'git init (after cd into the local folder you would like to initialize)'

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = new Object()
clone.description = 'A command that allows you to pull a repository from github into your local files.'
clone.code = 'git clone (http link) (after using cd to get to the destiniation desired).'

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = new Object()
status.description = 'A command which allows you to see if the file or folder is in the destination that you desire, and to show if it is ready to sync to GitHub.'
status.code = 'git status'
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = new Object()
add.descritption = 'A command in which grabs the specific files you are preparing to commit to GitHub'
add.code = 'git add (file name or "." for all'

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = new Object()
commit.description = 'This command prepares the files that you grabbed using the "add" command to be sent to the repository with a comment for the changes being made'
commit.code = 'git commit "This is where the comment goes"'

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = new Object()
push.description = 'This command is for making the final saved commit be sent to GitHub and store inside your repository'
push.code = 'git push'