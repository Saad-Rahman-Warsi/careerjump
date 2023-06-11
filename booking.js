var submit=document.getElementById("bookingbutton");
var date=document.getElementById("date");
var firstname=document.getElementById("FirstName"); 
var lastname=document.getElementById("LastName");
var time=document.getElementById("time");
var faculty=document.getElementById("faculty");
var appointment=document.getElementsByName("choice2");
var regid=Math.floor(Math.random() * 999999999);

submit.addEventListener('click',function()
	{
        localStorage.setItem('regid', regid);
		localStorage.setItem('date', date.value);
		localStorage.setItem('name',firstname.value+" "+lastname.value);
		localStorage.setItem('time',time.options[time.selectedIndex].text);
		for (i = 0; i < appointment.length; i++) {
                if (appointment[i].checked)
                {
                
                    localStorage.setItem('appointment',appointment[i].value);
                }
            }
		localStorage.setItem('faculty',faculty.options[faculty.selectedIndex].text);
        window.location.href = 'bookingconfirmed.html';
	});