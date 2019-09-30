function myFunc()
{
  var input1 = document.getElementById("pass1").value;
  var input2 = document.getElementById("pass2").value;
  var output;
  if(input1 === input2)
  {
    if(input1.length < 8)
    {
      output = "Password is too short. Must be at least 8 characters.";
      document.getElementById("confirm").innerHTML = output;
    }
    else
    {
      output = "Password accepted.";
      document.getElementById("confirm").innerHTML = output;
    }
  }
  else
  {
    output = "Passwords do not match.";
    document.getElementById("confirm").innerHTML = output;
  }
}
