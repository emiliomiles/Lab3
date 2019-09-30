var i = 0;
var imgArray = ["DiegoBuzz.JPG", "Colorado.JPG", "Emilio.JPG", "Mango.JPG", "Hooligans.JPG"];

function myFunc1()
{
  i--;
  if(i < 0)
  {
    i = imgArray.length - 1;
  }
  document.getElementById('pic').src = imgArray[i];
}

function myFunc2()
{
  i++
  if(i === imgArray.length)
  {
    i = 0;
  }
  document.getElementById('pic').src = imgArray[i];
}
