function check()
{
    var Word = document.getElementById("Word").value;//this tells JS where to pull the word on the HTML
    var splitWord = Word.split("");//this splits the word
    var reverse = splitWord.reverse();//this turns the word backwards
    var joinWord = reverse.join(""); //this puts the word back together

    if (Word == joinWord)//this is the first parameter
    {
        document.getElementById("palindrome").innerHTML = "You Got it!!!"//this is what you get if it's a palindrome
    }
    else//this is the second parameter
    {
        document.getElementById("palindrome").innerHTML = "You're Wrong. . . Try Again"//this is what you get if it's not a palindrome
    }


}


























// I don't know if you just didn't see my comment in canvas when I submitted 
// assignment 2.1 the second time but based off of your last comment I
// would assume not so, the code may have been very similar but it's not 
// like I copied and pasted your code, I did type it all out and I changed
// four parameters of what constituted a win or loss, on top of this your 
// slot for the sum of both die was not working while mine was.