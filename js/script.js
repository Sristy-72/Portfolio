var role=["c.s student"," web developer","coder"]
let role_text=document.getElementById("role");
let i=0,j=0;
let interval2;
const myfun=()=>{
let curr_role=role[i];
role_text.innerHTML=curr_role;
            i++;
            if(i==role.length)
            i=0;
     
}
setInterval(()=>{myfun();},1000);

const letters = document.getElementsByClassName("logo-letter")
letters[0].style.transform = 'rotate(5deg)';
letters[1].style.transform = 'translateY(-5px)';
letters[2].style.transform = 'translateY(2px)';
letters[4].style.transform = 'translateY(5px)';
letters[5].style.transform = 'rotate(5deg)';

const handleForm = (e)=>{
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input');
  
    let allInputsFilled = true;
  
    inputs.forEach((input) => {
      const value = input.value.trim();
      
      if (value === '') {
        allInputsFilled = false;
        return;
      }
    });
  
    if (allInputsFilled) {
      
        alert('Form submitted successfully');
    } else {
    //   alert('Please fill in all the required fields');
    }
}