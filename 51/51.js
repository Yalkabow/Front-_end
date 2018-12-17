function DeleteSpaces() 
{
    var string = prompt('Введите строку:');
    var newString = string.replace(/\s+/g, ' ').trim();
    alert( newString );
    return;
}

function Last() 
{
    var string = prompt('Введите строку:');
    alert( string.slice(-1) );
    return;
}
