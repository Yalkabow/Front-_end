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

function reverseString() 
{
    var string = prompt('Введите строку:');
    var newString = "";
    
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    
    alert( newString );
    return;
}

function WithoutLast() 
{
  var string = prompt('Введите строку:');
  var lastChar = (string.slice(0, -1));
  alert( lastChar );
  return;
}

Last();
WithoutLast();
reverseString();
DeleteSpaces();