function getfile(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status == "200"){
        callback(xhr.responseText);
      }
    };
  xhr.send();
  }
  getfile("data.json",function(text) {
    var data = JSON.parse(text);
    console.log(data);
    details(data.basics);
    extraact(data.ExtracircularActivites);
    career(data.Careerobjective);
    education(data.education);
    skills(data.skills);
    achievements(data.achievements);
    console.log(data);
  });
 
 var child = document.querySelector(".childone");
 function details(det){
   var img = document.createElement("img");
   img.src = det.image;
   child.appendChild(img);
   var name = document.createElement("h3");
   name.textContent = det.name;
   child.appendChild(name);
   var phoneno = document.createElement("h4");
   phoneno.textContent = det.phoneno;
   child.appendChild(phoneno);
   var mail = document.createElement("a");
   mail.href = "mailto:smileysmiley.143@gmail.com"
   mail.textContent = det.email;
   child.appendChild(mail);
   var address = document.createElement("h4");
   address.textContent = "Address:";
   child.appendChild(address);
   var address = document.createElement("hr");
   child.appendChild(address);
   var address = document.createElement("p");
   address.textContent = det.address;
   child.appendChild(address);
 }
 function extraact(ex){
  var ext = document.createElement("h4");
  ext.textContent ="ExtraCirrcular Activites:";
  child.appendChild(ext);
  var hr = document.createElement("hr");
  child.appendChild(hr);
  for(i=0;i<ex.length;i++){
    var extr= document.createElement("ul");
    var extr1 = document.createElement("li");
    extr1.textContent = ex[i].data;
    extr.appendChild(extr1);
    child.appendChild(extr);
  }
  }
 var child2 = document.querySelector(".childtwo");
 function career(careerinfo){
   var address = document.createElement("h2");
   address.textContent = "Career Objective";
   child2.appendChild(address);
   var address = document.createElement("hr");
   child2.appendChild(address);
   var add = document.createElement("p");
   add.textContent = careerinfo.info;
   child2.appendChild(add);
 }
 function education(edu){
   var ed = document.createElement("h2");
   ed.textContent = "Education Qualifications";
   child2.appendChild(ed);
   var hr = document.createElement("hr");
   child2.appendChild(hr);
   var edudata=document.createElement("table");
   edudata.border="1";
   child2.appendChild(edudata);
   tabdata="";
  

   for(i=0;i<edu.length;i++){
    //  var deg = document.createElement("h3");
    //  deg.textContent = edu[i].degree;
    //  child2.appendChild(deg);
    //  var eduul = document.createElement("ul");
    //  var eduli = document.createElement("li");
    //  eduli.textContent = edu[i].institute;
    //  eduul.appendChild(eduli);
    //  child2.appendChild(eduul);
    //  var eduul = document.createElement("ul");
    //  var eduli2 = document.createElement("li");
    //  eduli2.textContent = edu[i].data;
    //  eduul.appendChild(eduli2);
    //  child2.appendChild(eduul);
    
    tabdata+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].duration+"</td><td>"+edu[i].percentage+"</td></tr>";
   }
   edudata.innerHTML=tabdata;

 }
 function skills(tech){
   var tec = document.createElement("h2");
   tec.textContent = "Technical Skills";
   child2.appendChild(tec);
   var hr = document.createElement("hr");
   child2.appendChild(hr);
   var skilldata = document.createElement("table");
   skilldata.border = "1";
   child2.appendChild(skilldata);
   tabledata="";
   for(i=0;i<tech.length;i++){
     tabledata+="<tr><td>"+tech[i].title+"</td><td>"+tech[i].data+"</td></tr>";
   }
   skilldata.innerHTML = tabledata;
   }
 function achievements(ac){
   var ach = document.createElement("h2");
   ach.textContent ="Achievements";
   child2.appendChild(ach);
   var hr = document.createElement("hr");
   child2.appendChild(hr);
   for(i=0;i<ac.length;i++){
     var ache = document.createElement("ul");
     var ache1 = document.createElement("li");
     ache1.textContent = ac[i].data;
     ache.appendChild(ache1);
     child2.appendChild(ache);
   }
 }