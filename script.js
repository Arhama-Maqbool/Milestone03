var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n<h2><b>Resume \n                                                     </b></h2>\n<h3>personal Information </h3>\n<P><b>NAME:".concat(name, "</P>\n<P><B>EMAIL:").concat(email, "</P>\n<P><B>PHONE:").concat(phone, "</P>\n\n<H3>EDUCATION</H3>\n<P>").concat(education, "</P>\n\n<H3>EXPERIENCE</H3>\n<P>").concat(experience, "</P>\n\n<H3>SKILLS</H3>\n<P>").concat(skills, "</P>\n\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.style.display = 'block';
        form.style.display = "none";
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('THE RESUME DISPLAY ELEMENT IS MISSING.');
    }
});
