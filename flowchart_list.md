# Problem Solving Starter Kit

## Who is this for?

This starter kit is for students who are new to coding and do not have the experience of problem solving on a regular basis.  The items listed here may appear obvious to those who have experience in maths or another STEM subject, but the goal here is to make that "common sense" or "intuition" as explicit as we can.

## Checklist

* Identify what kind of error you are having, is it 
  * a syntax error - you have used a keyword in the wrong place or is missing, 
  * a semantic error - you have used a keyword in an inappropriate location, 
  * a logical error - the code is not doing what you think it should when run given some condition e.g. an IF loop was not true when expected a while loop did not exit when expected,
  * a build error - a package is missing, or some variable or function cannot be found,
  * a runtime error - the code works but it segmentation faults for some reason or does not do what you expected.

### You are wanting to do a personal project but don't know where to start?

* Look for similar work on Git services like GitHub, GitLabs and Bitbucket
* Look for blogs that talk around the topics
* Break down the problem into smaller tasks and look for examples that do small bits of the problem
* Look for libraries that you can stitch together to get something working.
* Write many smaller 1 file programs that do a small part of the functionality you require and then start to combine them into larger programs.
* Get some advice from the delivery staff or peer

### You are working on self-written code and you are getting red squiggles or its not building...

* Check the language specification document to see if your usage is semantically valid and does not lead to undefined behaviour.
* Use a search engine to look for the syntax of the operation you are trying to use.
* Read the documentation of the function _again_ and check argument types

### You are working on self-written code and its not working...

* Use a search engine to look for the syntax of the operation you are trying to use.
* Read the documentation of the function _again_ and check argument types
* Create a minimal example that does work, make changes one at a time until your error occurs
* Use a debugger to investigate the values being used when the error occurs
* Print out the values of any arguments used before the error occcurs, check the values are what you think they should be.
* Check the age of the documentation you are using, is there a newer version of the documentation or library you are using?
* Try to explain the question to someone else.  By reading it aloud it can help identify parts where you have skipped over or your knowledge is lacking.
* Turn on all warnings and make them report as errors to ensure your code is as correct as it can be.

### You are following an example and it does not work...

* Check the age of the documentation you are using, is there a newer version of the documentation or library you are using?
* Use a search engine to google the error text, removing any specifics to your instance e.g. local filenames or variable names.
* Review an introductory tutorial on the language.
* Check you have copied and pasted correctly
* Watch out for additional new lines being added/removed when pasting code into editor
* Find another example of the functionality you want
* Print out the values of any arguments used before the error occcurs, check the values are what you think they should be.
* Try to explain the question to someone else.  By reading it aloud it can help identify parts where you have skipped over or your knowledge is lacking.
* Write a unit test that calls the buggy code with specific arguments such that you can reproduce the error with certainty.

### You are doing a problem/challenge and it does not pass all the tests...

* Re-read the problem description and identify extreme cases
* Work through your algorithm manually for the simplest inputs you can think of and check the result
* Have you handled the zero length input?
* Are you using values that are too big for the data type? e.g. using float instead of double
* Try to explain the question to someone else.  By reading it aloud it can help identify parts where you have skipped over or your knowledge is lacking.
* Write the code in a local editor rather than the browser and write more unit tests
* Write a unit test that calls the function code with specific arguments such that you can reproduce the error with certainty.
* Try thinking of a different way to approach the problem.

### You are building some code and its missing a package/module/function/variable...

* Are you exporting the symbol from the relevant source file?
* Check you are using the latest version of the module
* Check the documentation you are using for the API is up to date and is for the version of the library you are using
* Google for similar issues with the library you are using.

### You are getting a segmentation fault...

* Use a debugger to investigate the values being used when the error occurs
* Print out the values of any arguments used before the error occcurs, check the values are what you think they should be.
* Check only one thread can read or write the variable at any point in time.

### You are doing a calculation and are getting incorrect results...

* Use brackets to make computational order explicit
* Read documentation on precedence for the language you are working with

### The server is not responding in the way that it should...

* Does the server receive anything at all?  
* Is the client sending what you think it is?  Use netstat, ping, nmap, tcpdump to check socket traffic
* If a web application use the developer tools to monitor network activity
* Does the server receive the information you think it does in the way that you think it does.  For instance, i f you are expected to receive a POST request, does your client call use GET or POST?
