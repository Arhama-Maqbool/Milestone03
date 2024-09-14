const form=document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement=document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit',(event:Event)=>{
        event.preventDefault();

const name=(document.getElementById('name') as HTMLInputElement).value 
const email=(document.getElementById('email') as HTMLInputElement).value
const phone=(document.getElementById('phone') as HTMLInputElement).value
const education=(document.getElementById('education') as HTMLInputElement).value
const experience=(document.getElementById('experience') as HTMLInputElement).value
const skills=(document.getElementById('skills') as HTMLInputElement).value      

const resumeHTML= `
<h2><b>Resume 
                                                     </b></h2>
<h3>personal Information </h3>
<P><b>NAME:${name}</P>
<P><B>EMAIL:${email}</P>
<P><B>PHONE:${phone}</P>

<H3>EDUCATION</H3>
<P>${education}</P>

<H3>EXPERIENCE</H3>
<P>${experience}</P>

<H3>SKILLS</H3>
<P>${skills}</P>

`;
if(resumeDisplayElement){
    resumeDisplayElement.style.display = 'block'
    form.style.display = "none"
    resumeDisplayElement.innerHTML=resumeHTML;

}else{
    console.error('THE RESUME DISPLAY ELEMENT IS MISSING.');
}

});

