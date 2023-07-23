var firestore=firebase.firestore();
const db=firestore.collection("datosContacto");

let submitBtnC = document.querySelector('#submit-contact');
let nick= document.querySelector('#nick');
let email= document.querySelector('#email');
let mensaje= document.querySelector('#mensaje');

carga();

function recaptcha_callback()
{
    submitBtnC.removeAttribute('disabled');
    submitBtnC.addatri
    submitBtnC.style.cursor='pointer';
} 


function validateEmail(email) 
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}  

 function carga() 
{
    var element = document.getElementById('submit-contact');
    element.onclick = validar;
}

function validar(event) 
{

    var nickInput = nick.value;
    var emailInput = email.value;
     var mensajeInput= mensaje.value;
    
      event.preventDefault();
      if ((nickInput==="")  && (emailInput==="")  && (mensajeInput==="")) 
      {  
          document.getElementById('error-spa').style.display='block';   
      
          setTimeout(function(){
              document.getElementById('error-spa').style.display='none';
          },5000);
          
         document.getElementById('submit-contact').disabled = true;
        grecaptcha.reset();
      } 
        
    else if(!validateEmail(emailInput))
    {
        document.getElementById('error-email').style.display='block';   
        
        setTimeout(function(){
            document.getElementById('error-email').style.display='none';
        },5000);  
                 document.getElementById('submit-contact').disabled = true;
         grecaptcha.reset();
    }
    
    else if(mensajeInput < 70)
    {
        document.getElementById('error-type').style.display='block';  
        
        setTimeout(function(){
            document.getElementById('error-type').style.display='none';
        },5000);  
                 document.getElementById('submit-contact').disabled = true;
          grecaptcha.reset();
    }
    else 
    {

        database();
    }
}

function database()
{
    let nickInput = nick.value;
    let emailInput = email.value;
    let mensajeInput= mensaje.value;
    
        db.doc().set({
        
            nick: nickInput,
            email: emailInput,
            mensaje: mensajeInput
        })                                                     
        .then(function(){
                     document.getElementById('enviado').style.display='block';
        setTimeout(function(){     
         document.getElementById('enviado').style.display='none';
            },5000);
            
        })
        .catch(function(error){
           console.log(error);
        });
    
        grecaptcha.reset();
        document.getElementById('submit-contact').disabled = true;
        nick.value= "";
        email.value= "";
        mensaje.value= "";
}

        

                
