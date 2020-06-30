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
       if(50 < glucose && glucose < 70)
       {
         condition1.innerHTML = "Low Sugar";
         caption1.innerHTML = "Attention ASAP!<br>Seek Medicine!<br>Consume Sugar upon experiencing symptoms of low Blood Sugar<br>Intake of simple sugars with little or no fiber<br>avoid High fat Food<br>Intake of Glucose(tablets,Supplements)<br>Eat peanut, Butter,Crackers, Banana daily";
         img1.src = "assets/images/Lower-blood-sugar.jpg";
         document.getElementById("glucose").value = '';
       }
       else if(70<= glucose && glucose <= 100)
       {
         condition1.innerHTML = "Normal";
         caption1.innerHTML = "You Are Safe Happy Life.But Keep theGood Health Activities!";
         img1.src = "assets/images/normal-sugar.jpg";
       }
       else if(101<= glucose && glucose < 125)
       {
         condition1.innerHTML = "PreDiabetees";
         caption1.innerHTML = "Seek Medicine!<br>Pay Attention to the Health<br>Do Excercices<br>Work to bring Down Blood Sugar<br>limiting carbohidrate intake not fasting<br>Increase H2O intake to maintain hydration,Eating more fiber,Engage in physical Activities";
         img1.src = "assets/images/prediabetees.jpg";
       }
       else if(125<= glucose && glucose < 500)
       {
         condition1.innerHTML = "Diabetees";
         caption1.innerHTML = "Seek Medicine Immediately<br>Meet the Doctor Immediately!<br>Increase H2O intake to maintain hydration,Eating more fiber,Engage in physical Activities";
         img1.src = "assets/images/diabetees.jpg";
       }
    }



    if(cholestorol == '')
    {
      col2.style.opacity = 0.2;
    }
    else
    {
        if(0 < cholestorol && cholestorol < 100)
        {
          condition2.innerHTML = "Optimum";
          caption2.innerHTML = "Seek Medicine<br>Eat heart Healthy Diet<br>Regular Excercise<Dont Smoke<br>Mental Health Evaluation<br>Eat Cholestorol rich food<br>Limit Alchohol!";
          img2.src = "assets/images/higher-cholestorol.jpg";
        }
        else if(100<= cholestorol && cholestorol <= 129)
        {
          condition2.innerHTML = "Fairly Good";
          caption2.innerHTML = "Normal<br>Happy life<br>Keep up the Good Health activities";
          img2.src = "assets/images/higher-cholestorol.jpg";
        }
        else if(130<= cholestorol && cholestorol < 159)
        {
          condition2.innerHTML = "Borderline High";
          caption2.innerHTML = "Drink Much Water<br>Keep up the Good Health activities!";
          img2.src = "assets/images/lower-cholesorol.jpg";
        }
        else if(160<= cholestorol && cholestorol <= 189)
        {
          condition2.innerHTML = "High";
          caption2.innerHTML = "Therapentic life style Changes(TLC,(Diet,Excercise,weight management)<br>Meet doctor !<br>Use drugs that lower cholestorol or reduce absorption";
          img2.src = "assets/images/lower-cholestorol.jpg";
        }
        else if(190<= cholestorol && cholestorol <= 500)
        {
          condition2.innerHTML = "Very High";
          caption2.innerHTML = "Meet doctor Immediately!<br>Therapentic life style Changes(TLC,(Diet,Excercise,weight management)<br>Meet doctor !<br>Use drugs that lower cholestorol or reduce absorption<br>Medications(Bile Acid,Omega 3 fatty acid";
          img2.src = "assets/images/lower-cholestorol.jpg";
        }
    }
   


    if(s_pressure == '' || d_pressure == '')
    {
      col3.style.opacity = 0.2;
    } 
    else
    { 
       if(50<= s_pressure && s_pressure < 120 && 50<= d_pressure && d_pressure <= 80)
       {
         condition3.innerHTML = "Normal";
         caption3.innerHTML = "Normal Condition!<br>Keep the good health activities";
         img3.src = "assets/images/higher-blood-p.jpeg";
       }
       else if(120<= s_pressure && s_pressure <= 129 && 50<= d_pressure && d_pressure <= 80)
       {
         condition3.innerHTML = "Elevated";
         caption3.innerHTML = "Eat heart healthy diet with less salt!<br>Getting regular physical activity 30-60min/day<br>Limit Alchohol";
         img3.src = "assets/images/higher-blood-p.jpeg";
       }
       else if(130<= s_pressure && s_pressure <= 139 || 80<= d_pressure && d_pressure <= 89)
       {
         condition3.innerHTML = "High Blood Pressure(Stage 1)";
         caption3.innerHTML = "Excercise(30-60min/day)<br>Meet doctor Immediately!<Follow Dash Diet(fruits/vegetables/low-fat products<br>reduce salt intake<br>lose excess weight";
         img3.src = "assets/images/lower-blood-p2.jpg";
       }
       else if(140<= s_pressure && s_pressure <= 180 || 90<= d_pressure && d_pressure <= 120)
       {
         condition3.innerHTML = "High Blood Pressure(Stage 2)";
         caption3.innerHTML = "Excercise(30-60min/day)<br>Meet doctor Immediately!<Follow Dash Diet(fruits/vegetables/low-fat products<br>reduce salt intake<br>lose excess weight<br>Reduce salt intake<br>Prevent Nicotine<br>";
         img3.src = "assets/images/lower-blood-p.jpg";
       }
       else if(180< s_pressure && s_pressure <= 300 || 120<= d_pressure && d_pressure <= 300)
       {
         condition3.innerHTML = "High Blood Pressure(Stage 3)";
         caption3.innerHTML = "Meet the doctor immediatetly!<br>Lose Excess weight<br>Prevent Nicotine<br>Limit Stress";
         img3.src = "assets/images/Foods-to-Lower-Blood-Pressure.jpg";
       }
    }
}

function validate_glucose_Data()
{
    var glucose = document.getElementById("glucose").value;

    if(500<glucose || glucose<50)
    {
      swal("Error!","Enter a Valid Glucose Value","error");
      document.getElementById("glucose").value = '';
    }
}
function validate_cholestorol_Data()
{
  var cholestorol  = document.getElementById("cholestorol").value;

  if(500<cholestorol || cholestorol<0)
  {
    swal("Error!","Enter a Valid Cholestorol Value","error");
    document.getElementById("cholestorol").value = '';
  }
}
function validate_s_pressure_Data()
{
  var s_pressure = document.getElementById("s_pressure").value;

  if((300 < s_pressure || s_pressure < 50))
  {
    swal("Error!","Enter a Valid Systolic Pressure Values","error");
    document.getElementById("s_pressure").value = '';
  }
}
function validate_d_pressure_Data()
{
  var d_pressure = document.getElementById("d_pressure").value;

  if((300 < d_pressure || d_pressure < 50)){
    swal("Error!","Enter a Valid Diastolic Pressure Values","error");
    document.getElementById("d_pressure").value = '';
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

  function validateDetails() {

    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var date = new Date(document.getElementById("birthday").value);
    var today = new Date();

    var timeDiff = Math.abs(today.getTime() - date.getTime());
    var age = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;

      if (age < 18) {
        swal("Error!","You should be atleast 18 years old to donate Blood...!!!","error");
        document.getElementById("birthday").value = '';    
      }
      else if (0 < weight && weight < 50)
      {
        swal("Error!","Weight Should be minimum 50kg...!!!","error");
        document.getElementById("weight").value = '';    
      }
      else if (0 < height && height < 140){
        swal("Error!","Height Should be minimum 140cm...!!!","error");
        document.getElementById("height").value = '';    
      }

  }

  function validateUpdateDetails() {

    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

      if (0 < weight && weight < 50)
      {
        swal("Error!","Weight Should be minimum 50kg...!!!","error");
        document.getElementById("weight").value = '';    
      }
      else if (0 < height && height < 140){
        swal("Error!","Height Should be minimum 140cm...!!!","error");
        document.getElementById("height").value = '';    
      }

  }




