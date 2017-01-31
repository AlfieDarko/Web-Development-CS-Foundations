var authorContainer = document.getElementById("divforAuthor");
var quoteContainer = document.getElementById("divforQuote");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() 
{
    
    document.getElementById("divforAuthor").innerHTML = "";
    document.getElementById("divforQuote").innerHTML = "";

    
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "http://quotes.stormconsultancy.co.uk/random.json");
    
    ourRequest.onload = function() 
    {
        
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
    };
    
    
    ourRequest.onerror = function () 
    {
        console.log("Connection error");
    };
    
    ourRequest.send();
});

function renderHTML(data) 
    {
    var htmlAuthorString = "";
    var htmlQuoteString = "";   
    
        htmlQuoteString += "<p><strong>" + data.quote  + ".</strong></p>";
        htmlAuthorString += "<p><strong>" + data.author  + ".</strong></p>";
        authorContainer.insertAdjacentHTML("beforeend", htmlAuthorString);
        quoteContainer.insertAdjacentHTML("beforeend", htmlQuoteString);

    }
