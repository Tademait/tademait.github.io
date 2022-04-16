var work_div = document.getElementById("cv-work");
var school_bg = document.getElementById("opt1");
school_bg.classList.add("chosen-cv");
work_div.hidden = true;

function show_school() {
    var school_div = document.getElementById("cv-school");
    var work_div = document.getElementById("cv-work");
    var school_bg = document.getElementById("opt1");
    var work_bg = document.getElementById("opt2");
    school_div.hidden = false;
    work_div.hidden = true;
    school_bg.classList.add("chosen-cv");
    work_bg.classList.remove("chosen-cv");
}
  

function show_work() {
    var school_div = document.getElementById("cv-school");
    var work_div = document.getElementById("cv-work");
    var school_bg = document.getElementById("opt1");
    var work_bg = document.getElementById("opt2");
    school_div.hidden = true;
    work_div.hidden = false;
    work_bg.classList.add("chosen-cv");
    school_bg.classList.remove("chosen-cv");
    }