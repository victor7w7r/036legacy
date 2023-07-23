var hoy = new Date();
var horaTxt = hoy.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var fechaTxt= +hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear();

const submitBtnC = document.querySelector('#com-sub');
let nick= document.querySelector('#nick-com');
let email= document.querySelector('#mail-com');
let comm= document.querySelector('#com-com');

document.getElementById('comm-blog').addEventListener('submit',call);

function recaptcha_callback()
{
    submitBtnC.removeAttribute('disabled');
    submitBtnC.style.cursor='pointer';
} 

function reset_all()
{
    document.getElementById('com-sub').disabled = true;
     grecaptcha.reset();
}


function call(e)
{
    e.preventDefault();
}

function validateEmail(email) 
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}  

function slugify(text) 
{
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

var commC;

var ref = new firebase.database().ref(); 
var postRef = ref.child(slugify(window.location.pathname));
 postRef.once('value', function(snapshot) { 
     commC=snapshot.numChildren(); 
    
    switch(commC)
    {
        case 0:
            document.getElementById('total').innerHTML='Sin Comentarios';
            break;
        case 1:
            document.getElementById('total').innerHTML='1 Comentario';
             break;
        default:
            document.getElementById('total').innerHTML=commC+' Comentarios';
             break;
    }
 });

postRef.on("child_added", function(snapshot) {

        
      var newPost = snapshot.val();
      $(".listado").prepend('<li class="single_comment_area">' +
        '<div class="comment-content d-flex">' +
        '<div class="comment-author"> <img src="http://www.gravatar.com/avatar/'+ escapeHtml(newPost.email) + '?s=100&d=retro" alt="author"> </div>' +              
         '<div class="comment-meta">' +                  
        '<p class="post-date">' + escapeHtml(newPost.fecha) +'</p>' +         
        '<h5>' + escapeHtml(newPost.nick) + '</h5>' +
        '<p>'+escapeHtml(newPost.comentario)+'</p>'+'</div></div></li>'
    
    );
});

submitBtnC.addEventListener('click', function(){
    
    let nickInput = nick.value;
    let emailInput = email.value;
    let commInput= comm.value;
    
    if(nickInput==="" && emailInput==="" && commInput==="")
    {
         document.getElementById('error-spa').style.display='block';   
            setTimeout(function(){     
            document.getElementById('error-spa').style.display='none';
            },5000);
        
           reset_all();
    }
    
    
    else if(!validateEmail(emailInput))
    {
           document.getElementById('error-email').style.display='block';   
            setTimeout(function(){     
            document.getElementById('error-email').style.display='none';
            },5000);  
        
         reset_all();
    }
    
    else if(commInput.length < 3)
    {
            document.getElementById('error-type').style.display='block';   
            setTimeout(function(){     
            document.getElementById('error-type').style.display='none';
            },5000);  
        
           reset_all();
   
    }
    else
    {
        
           reset_all();
        postRef.push().set({
            nick: nickInput,
            email: md5(emailInput),
            fecha: fechaTxt.toString(),
            comentario: commInput,
            almacenado: firebase.database.ServerValue.TIMESTAMP
        }); 
        document.getElementById('comm-blog').reset();
        
        document.getElementById('enviado').style.display='block';
         document.getElementById('contacto').reset();
        
        setTimeout(function(){     
            document.getElementById('enviado').style.display='none';
            },5000);
        

        
    }
     
});