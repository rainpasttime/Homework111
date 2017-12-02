module.exports = function getSongs(number){
    if(number<100 && number>1)
    {
        let tem = number.toString();
        let temTwo = (number-1).toString();
        return tem+" bottles of beer on the wall, "+tem+" bottles of beer.\n"+
            "Take one down and pass it around, "+temTwo+" bottles of beer on the wall.";
    }
    else
    {
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
};
