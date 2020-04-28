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
    var s_pressure = document.getElementById("s_pressure").value;
    var d_pressure = document.getElementById("d_pressure").value;
    var condition1 = document.getElementById("condition1");
	  var caption1 = document.getElementById("caption1");
    var img1 = document.getElementById("img1");
    var condition2 = document.getElementById("condition2");
	  var caption2 = document.getElementById("caption2");
    var img2 = document.getElementById("img2");
    var condition3 = document.getElementById("condition3");
	  var caption3 = document.getElementById("caption3");
    var img3 = document.getElementById("img3");
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    var col3 = document.getElementById("col3");
    var content = document.getElementById("content");


    
    if(glucose == '')
    {
       col1.style.opacity = 0.2;
    }
    else
    {
       if(500<glucose || glucose<50)
       {
         swal("Error!","Enter a Valid Glucose Value","error");
         col1.style.opacity = 0.2;
       }
       else if(50 < glucose && glucose < 70)
       {
         condition1.innerHTML = "Low Sugar";
         caption1.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img1.src = "assets/images/Lower-blood-sugar.jpg";
       }
       else if(70<= glucose && glucose <= 100)
       {
         condition1.innerHTML = "Normal";
         caption1.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img1.src = "assets/images/normal-sugar.jpg";
       }
       else if(101<= glucose && glucose < 125)
       {
         condition1.innerHTML = "PreDiabetees";
         caption1.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img1.src = "assets/images/prediabetees.jpg";
       }
       else if(125<= glucose && glucose < 500)
       {
         condition1.innerHTML = "Diabetees";
         caption1.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img1.src = "assets/images/diabetees.jpg";
       }
    }



    if(cholestorol == '')
    {
      col2.style.opacity = 0.2;
    }
    else
    {
        if(500<cholestorol || cholestorol<0)
        {
          swal("Error!","Enter a Valid Cholestorol Value","error");
          col2.style.opacity = 0.2;
        }
        else if(0 < cholestorol && cholestorol < 100)
        {
          condition2.innerHTML = "Optimum";
          caption2.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
          img2.src = "assets/images/higher-cholestorol.jpg";
        }
        else if(100<= cholestorol && cholestorol <= 129)
        {
          condition2.innerHTML = "Fairly Good";
          caption2.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
          img2.src = "assets/images/higher-cholestorol.jpg";
        }
        else if(130<= cholestorol && cholestorol < 159)
        {
          condition2.innerHTML = "Borderline High";
          caption2.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
          img2.src = "assets/images/lower-cholesorol.jpg";
        }
        else if(160<= cholestorol && cholestorol <= 189)
        {
          condition2.innerHTML = "High";
          caption2.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
          img2.src = "assets/images/lower-cholestorol.jpg";
        }
        else if(190<= cholestorol && cholestorol <= 500)
        {
          condition2.innerHTML = "Very High";
          caption2.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
          img2.src = "assets/images/lower-cholestorol.jpg";
        }
    }
   


    if(s_pressure == '' || d_pressure == '')
    {
      col3.style.opacity = 0.2;
    } 
    else
    { 
       if((300 < s_pressure || s_pressure < 50) || (300 < d_pressure || d_pressure < 50))
       {
         swal("Error!","Enter a Valid Pressure Values","error");
         col3.style.opacity = 0.2;
       }
       else if(50<= s_pressure && s_pressure < 120 && 50<= d_pressure && d_pressure <= 80)
       {
         condition3.innerHTML = "Normal";
         caption3.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img3.src = "assets/images/higher-blood-p.jpeg";
       }
       else if(120<= s_pressure && s_pressure <= 129 && 50<= d_pressure && d_pressure <= 80)
       {
         condition3.innerHTML = "Elevated";
         caption3.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img3.src = "assets/images/higher-blood-p.jpeg";
       }
       else if(130<= s_pressure && s_pressure <= 139 || 80<= d_pressure && d_pressure <= 89)
       {
         condition3.innerHTML = "High Blood Pressure(Stage 1)";
         caption3.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img3.src = "assets/images/lower-blood-p2.jpg";
       }
       else if(140<= s_pressure && s_pressure <= 180 || 90<= d_pressure && d_pressure <= 120)
       {
         condition3.innerHTML = "High Blood Pressure(Stage 2)";
         caption3.innerHTML = "Drink Much Water<br>Meet doctor Immediately!";
         img3.src = "assets/images/lower-blood-p.jpg";
       }
       else if(180< s_pressure && s_pressure <= 300 || 120<= d_pressure && d_pressure <= 300)
       {
         condition3.innerHTML = "High Blood Pressure(Stage 3)";
         caption3.innerHTML = "Meet the doctor immediatetly!<br>Meet doctor Immediately!";
         img3.src = "assets/images/Foods-to-Lower-Blood-Pressure.jpg";
       }
    }
}


function analyseData_Clear_Values()
  {
    glucose.value = '';
    cholestorol.value = '';
    d_pressure.value = '';
    s_pressure.value = '';
    location.reload();
}

