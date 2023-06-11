var regid=document.getElementById("registrationid");
var cname=document.getElementById("cname");
var appointment=document.getElementById("appointment");
var faculty=document.getElementById("faculty");
var date=document.getElementById("date");
var time=document.getElementById("time");


window.onload = function() {
	const myUrl = new URL(window.location.toLocaleString());
	var get_regid = localStorage.getItem('regid');
	var get_date = localStorage.getItem('date');
	var get_name = localStorage.getItem('name');
	var get_time = localStorage.getItem('time');
	var get_appointment = localStorage.getItem('appointment');
	var get_faculty = localStorage.getItem('faculty');
	regid.innerText="Registration Id: "+get_regid;
	cname.innerText="NAME: "+get_name;
	appointment.innerText="Appointment: "+get_appointment;
	faculty.innerText="Faculty: "+get_faculty;
	date.innerText="Date: "+get_date;
	time.innerText="Time: "+get_time;

}