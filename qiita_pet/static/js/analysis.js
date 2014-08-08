function displaySelected() {
  var linktext = document.getElementById("shselected");
  var seldiv = document.getElementById("selected");
  var sampdiv = document.getElementById("availstudies");
  var buttondiv = document.getElementById("seperator");
  if(seldiv.style.display == "none") {
    sampdiv.style.bottom = "30%";
    sampdiv.style.height='60%';
    buttondiv.style.bottom = "25%";
    seldiv.style.height = "25%";
    seldiv.style.display = "";
    linktext.innerHTML = "Hide selected samples";
  }
  else {
    sampdiv.style.bottom = "";
    sampdiv.style.height='90%';
    buttondiv.style.bottom = "0px";
    seldiv.style.height = "0px";
    seldiv.style.display = "none";
    linktext.innerHTML = "Show selected samples";
  }
} 

function select_category(category, study) {
  if(study != '') { 
    $('.'+study+'.'+category).each(function() {this.checked = true;});
  }
  else { 
    $('.'+category).each(function() {this.checked = true;});
  }
}

function select_deselect(study, select) {
  if(select == true) { 
    $('.'+study).each(function() {this.checked = true;});
  }
  else { 
    $('.'+study).each(function() {this.checked = false;});
  }
}

function enable_study_datatype(id) {
  document.getElementById(id).disabled=false;
}

function pre_submit(action) {
  document.getElementById('action').value = action;
  if(action == 'continue') {document.getElementById('results-form').action = '/analysis/3'}
}