function change()
{
  var rBorder = document.getElementById("red").value;
  var gBorder = document.getElementById("green").value;
  var bBorder = document.getElementById("blue").value;
  var wBorder = document.getElementById("width").value;
  var rBack = document.getElementById("bred").value;
  var gBack = document.getElementById("bgreen").value;
  var bBack = document.getElementById("bblue").value;
  var dummy = document.getElementById("dummy");

  if (isNaN(rBorder) || rBorder == '' || rBorder < 0 || rBorder > 255)
  {
    rBorder = 0;
  } else rBorder = parseInt(document.getElementById("red").value);

  if (isNaN(gBorder) || gBorder == '' || gBorder < 0 || gBorder > 255)
  {
    gBorder = 0;
  } else gBorder = parseInt(document.getElementById("green").value);

  if (isNaN(bBorder) || bBorder == '' || bBorder < 0 || bBorder > 255)
  {
    bBorder = 0;
  } else bBorder = parseInt(document.getElementById("blue").value);

  if (isNaN(wBorder) || wBorder == '' || wBorder < 0)
  {
    wBorder = 0;
  } else wBorder = parseInt(document.getElementById("width").value);

  if (isNaN(rBack) || rBack == '' || rBack < 0 || rBack > 255)
  {
    rBack = 0;
  } else rBack = parseInt(document.getElementById("bred").value);

  if (isNaN(gBack) || gBack == '' || gBack < 0 || gBack > 255)
  {
    gBack = 0;
  } else gBack = parseInt(document.getElementById("bgreen").value);

  if (isNaN(bBack) || bBack == '' || bBack < 0 || bBack > 255)
  {
    bBack = 0;
  } else bBack = parseInt(document.getElementById("bblue").value);

  dummy.style.borderStyle = "solid";
  dummy.style.borderWidth = wBorder+"px";
  dummy.style.borderColor = "rgb(" + rBorder + "," + gBorder + "," + bBorder + ")";
  dummy.style.backgroundColor = "rgb(" + rBack + "," + gBack + "," + bBack + ")";
}
