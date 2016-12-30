//Modules

function User() 
{
    var username, password;
    
    function doLogin(user,pw) 
    {
        username = user;
        password = pw;
        //do the rest of the login work
    }


var publicAPI = 
    {
    login: doLogin
    };

return publicAPI;
}



// create a 'User' module instance
var fred = User();

fred.login( "fred", "12Battery34!");