function pswrdvisible() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  function repswrdvisible() {
    var y = document.getElementById("re-type-password");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  function analyseData() {

    var glucose = document.getElementById("glucose").value;
    var cholestorol  = document.getElementById("cholestorol").value;
    var pressure = document.getElementById("pressure").value;
    var condition = document.getElementById("condition");
	  var caption = document.getElementById("caption");
	  var img = document.getElementById("img");
    
    if(glucose < 70)
    {
      condition.innerHTML = "Low Sugar";
      caption.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
      img.src = "assets/images/analyse2.jpg";
    }
    else if(70<= glucose <= 100)
    {
     
    }
    else if(101<= glucose < 125)
    {
     
    }
    else if(125<= glucose < 500)
    {
      
    }
    else
    {

    }
  }
