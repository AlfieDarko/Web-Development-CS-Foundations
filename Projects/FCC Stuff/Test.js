function truncateString(str, num) {
    // Clear out that junk in your trunk
    // if str.length > num then return shortened string with "..."  so str.length = num - 3? + "..."
    //if num is <= 3, dont trim 
    var strSL;
    if (str.length > num && num <= 3) {
        strSL = str.slice(0, -num) + "...";
        return strSL;
    }
    else if (str.length > num) {
        strSL = str.slice(0, num - 3) + "...";
        return strSL;
    }
    else {
        return str;
    }
    return strSL;
}
truncateString("A-", 1);

function truncateString(str, num) {
    // Clear out that junk in your trunk
    // if str.length > num then return shortened string with "..."  so str.length = num - 3? + "..."
    //if num is <= 3, dont trim 
    var strSL;
    if (str.length > num && num < 3 && str.length < 5) {
        strSL = str.slice(0, -num) + "...";
        return strSL;
    }
    else if (str.length > num) {
        strSL = str.slice(0, num - str.length) + "...";
        return strSL;
    }
    else {
        return str;
    }
    return strSL;
}
truncateString("Absolutely Longer", 2);


function truncateString(str, num) {
    // Clear out that junk in your trunk
    // if str.length > num then return shortened string with "..."  so str.length = num - 3? + "..."
    //if num is <= 3, dont trim 
    var strSL;
    if (str.length > num) {
        strSL = str.slice(0, num - str.length) + "...";
        if (strSL > num) {
            strSL = strSL.slice(0, num - str.length) + "...";
            return strSL;
        }
        return strSL;
    }
    else return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);