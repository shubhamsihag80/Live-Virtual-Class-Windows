var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}
function myFunction() {
    location.reload();
 }
 function func1(){
  alert("Welcome!");
 }
 function func2(){
  alert("Thanks!");
 }
 function myFunct(){
  var myWindow = window.open("", "MsgWindow", "top=400, left=700,width=400,height=300");
  myWindow.document.write("<p style='color: red; background:yellow;'>Welcome to the Live Virtual Class.</br> I am 400px wide and 300px tall!</p>");
 }

 function keyfun(){
   if(from2.txt1.value==""){
     alert("value is empty");
   }
 }
 function fuun(){
   alert("This field is for office use only!");
   document.getElementById('pp1').focus();
 }

 function myFunnn(x){
  x.style.background="yellow";
}
 function validate(){
   var eng = parseInt(document.forms["form2"]["t1"].value,10);
   var gk = parseInt(document.forms["form2"]["t2"].value,10);
   var math = parseInt(document.forms["form2"]["t3"].value,10);
   var total = eng+gk+math;
   var per = total/3;
   var hm;
   if(eng>gk && eng>math)
   {
     hm = eng;
   }
   else if(gk>math)
   {
    hm=gk;
   }
   else
   {
     hm=math;
   }
   document.getElementById("tm").value = total;
   document.getElementById("per").value = per;
   document.getElementById("hm").value = hm;
 }
 function validate123(){
  //var ans=form2.text12.value;
  var ans=document.forms["form2"]["text12"].value;
  var x;
  if(ans=="Taurus")
  {
    x="Taurus is the second astrological sign in the present zodiac. It spans from 30° to 60° of the zodiac. This sign belongs to the Earth element or triplicity, and has a feminine or negative polarity, as well as a Fixed modality, quality, or quadruplicity. It is a Venus-ruled sign like Libra.";
  }
  else if(ans =="Leo")
  {
    x="Leo, is the fifth astrological sign of the zodiac. It corresponds to the constellation Leo and comes after Cancer and before Virgo. The traditional Western zodiac associates Leo with the period between July 23 and August 22, and the sign spans the 120th to 150th degree of celestial longitude.";
  }
  else if(ans=="Scorpio")
  {
    x="Scorpio is the eighth astrological sign in the Zodiac, originating from the constellation of Scorpius. It spans 210°–240° ecliptic longitude. Under the tropical zodiac, the Sun transits this sign on average from October 23 to November 22.";
  }
  else
  {
    x="Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. These revolutionary thinkers fervently support “power to the people,” aspiring to change the world through radical social progress.";
  }
  document.getElementById("text15").value = x;
}

function result(){
  var q1 = formquiz.rad1.value;
  var q2 = formquiz.rad.value;
  if(q1=="" || q2=="")
    alert('Please attempt each question');
  else
  {
    var marks=0;
  if(q1=="csp")
    marks+=2;
  if(q2=="cdp1")
    marks+=2;

  var myWindow1 = window.open("", "MsgWindow1", "top=500, left=700,width=300,height=200");
  myWindow1.document.write("<p style='color: red; background:yellow;'>Your Score is : </p>"+marks);
  location.reload();
  }
}
function feedback()
{
  var fback = document.formfeed;
  var i,count=0,txt="";
  for (i = 0; i < fback.length; i++) {
    if (fback[i].checked) {
      count++;
    }
  }
  if(count>=3)
  {
    for (i = 0; i < fback.length; i++) {
      if (fback[i].checked) {
        txt= txt + fback[i].value + ", "
      }
    }
    document.getElementById("order").value =txt;
  }
  else
    alert("Select atleast 3 options");
}

function redirect() {
  var searchitem = document.getElementById("search");
  var searchurl = document.getElementById("webs").value;
  var url = "https://"+ searchurl + "/search?q=" + searchitem.value;
  window.open(url,"");
}

function geek() {
  var doc = prompt("Please enter your name");
  if (doc != null) {
      document.getElementById("g").innerHTML = "Welcome  " + doc;
  }
}

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters))
     {
      document.getElementById("para2").innerHTML="";
      return true;
     }
   else
     {
      document.getElementById("para2").innerHTML="Invalid Input. Alphabets Only!";
      return false;
     }
  }

  function allLetter1(inputtxt1)
    {
     var letters = /^[A-Za-z]+$/;
     if(inputtxt1.match(letters))
       {
        document.getElementById("para1").innerHTML="";
        return true;
       }
     else
       {
        document.getElementById("para1").innerHTML="Invalid Input. Alphabets Only!";
        return false;
       }
    }
