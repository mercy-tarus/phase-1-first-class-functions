//this the code 

function receivesAFunction(callback)
{
callback();
}



//named function
function returnsANamedFunction() 
{
  return function returnnamedFunction() 
  {
    console.log("mercy is a named function.");
  };
}


// anonymous function
function returnsAnAnonymousFunction() 
{
  return function() {
    console.log("mercy is an anonymous function.");
  };
}



