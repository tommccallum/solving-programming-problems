const flowChart = [
    {
    "prompt:": "You have a programming problem and you don't know what to do next.",
    "options": [ "I am following an example", "This is my own code"]
    },
    {
        "title": "I am following an example",
        "prompt": "Is this example using the latest version of the documentation?",
        "options": [ "Yes", "No", "I don't know"]
    },
    {
        "title": "Yes",
        "prompt": "Are you using an appropriate version of the library?",
        "options": [ "Yes", "No", "I don't know"]
    },
    {
        "title": "Yes",
        "prompt": "Have you searched using the error text?",
        "options": [ "Yes", "No"]
    },
    {
        "title": "Yes",
        "prompt": "Is there another example from a different source that works for you?",
        "options": [ "Yes", "No"]
    },
    {
        "title": "This is my own code",
        "prompt": "what has changed since your last working version?",
        "options": ["Nothing, that I know of.", "1 line", "A large chunk of code"]
    },
    {
        "answer": "Read the documentation of the function again and check argument types"
    },
    {
        "answer": "Find another example of the functionality you want"
    },
    {
        "answer": "Create a minimal example that does work, make changes one at a time until your error occurs"
    },
    {
        "answer": "Use a debugger to investigate the values being used when the error occurs"
    },
    {
        "answer": "Use a search engine to look for the syntax of the operation you are trying to use."
    },
    {
        "answer": "Review an introductory tutorial on the language."
    },
    {
        "answer": "Print out the values of any arguments used before the error occcurs, check the values are what you think they should be."
    },
    {
        "answer": "Check the language specification document to see if your usage is semantically valid and does not lead to undefined behaviour."
    },
    {
        "answer": "Check only one thread can read or write the variable at any point in time."
    },
    {
        "answer": "Check the age of the documentation you are using, is there a newer version of the documentation or library you are using?"
    },
    {
        "answer": "Use a search engine to google the error text, removing any specifics to your instance e.g. local filenames or variable names."
    },
    {
        "answer": "Try to explain the question to someone else.  By reading it aloud it can help identify parts where you have skipped over or your knowledge is lacking."
    },
    {
        "answer": "Read the code aloud. This can often lead to finding misunderstandings in the code as you have to take your time processing the code you have written."
    },
    {
        "answer": "Write a unit test that calls the buggy code with specific arguments such that you can reproduce the error with certainty."
    },
    {
        "answer": "Does the server receive the information you think it does in the way that you think it does.  For instance, if you are expected to receive a POST request, does your client call use GET or POST?"
    }
]