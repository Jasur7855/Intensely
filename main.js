// Accardion Start
let btn= document.getElementsByClassName('acardion_button');
let text= document.getElementsByClassName('acardion_text');
let icon = document.getElementsByClassName('icon1');

for( let i=0;i<btn.length;i++){
    btn[i].onclick= function(){
        btn[i].classList.toggle('color');
        text[i].classList.toggle('show');
        
       

        for(let j=0;j<btn.length;j++){
            if(j==i){
                
            }
            else{
                text[j].classList.remove('show');
            }
        }
    }

}
// Accardion End

// Statistic start
let value =document.querySelectorAll('.numbers')
let betwen = 3000;
value.forEach((value)=>{
    let startValue = 0;
    let endValue = value.getAttribute('data-val');
    let result = setInterval(function(){
        startValue +=1;
        value.textContent = startValue

        if(startValue == endValue){
            clearInterval(result);
        }
    })

})  
// Statistic End

// login Start

document.getElementById('login-btn').onclick = function (){
    document.getElementById('login_reg').style.display='block'
}
document.getElementById('close').onclick = ()=>document.getElementById('login_reg').style.display='none'