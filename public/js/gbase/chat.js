
  var firebaseConfig = {
    apiKey: "AIzaSyAhHnNu2V_5XKpbN5hHWRvwvec4EPoVs3I",
    authDomain: "creative-studios-ba43c.firebaseapp.com",
    databaseURL: "https://creative-studios-ba43c.firebaseio.com",
    projectId: "creative-studios-ba43c",
    storageBucket: "creative-studios-ba43c.appspot.com",
    messagingSenderId: "709408357560",
    appId: "1:709408357560:web:95751758e6bf2df804884d",
    measurementId: "G-LM2WRHCJLS"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var submitBtn = document.querySelector('#chat-submit');
var nombreTxt= document.querySelector('#chat-nombre');
var mensajeTxt= document.querySelector('#chat-texto');
var chatBox= document.getElementById('chat-content');

var hoy = new Date();
var horaTxt = hoy.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var fechaTxt= +hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear();

document.getElementById('chatbox').addEventListener('submit',llamada);

function llamada(e)
{
    e.preventDefault();
}

setInterval(loop, 1000);

function loop()
{
        firebase.database().ref('chatBox').on('value',function(snapshot){
            var html='';

             snapshot.forEach(function(e){
                 var element= e.val();
                 var nombreGet= element.nombre;
                var mensageGet= element.mensaje;
                 var horaGet=element.hora;
                var fechaGet= element.fecha;
                 html+='<div class="chatbox__body__message chatbox__body__message--left"><div class="chatbox_timing"><ul><li id="fecha"><i class="fa fa-calendar"></i>'+fechaGet+'</li><li id="hora"><i class="fa fa-clock-o"></i>'+horaGet+'</li></ul></div><div class="clearfix"></div><div class="ul_section_full"><li><strong>'+nombreGet+'</strong></li><li>'+mensageGet+'</li></ul><div class="clearfix"></div><ul class="ul_msg2"></ul></div></div>';
             });
              chatBox.innerHTML=html;
         });
}

submitBtn.addEventListener('click', function(){
    var hora=horaTxt.toString();
    var fecha=fechaTxt.toString();
    var nombre=nombreTxt.value;
     var mensaje=mensajeTxt.value; 
    
    if(nombre==="")
    {
        alert("ERROR: Pon un nombre/mensaje de texto");
    }
    else if(mensaje==="")
    {
       alert("ERROR: Pon un nombre/mensaje de texto");
    }
    else
    {
            var scroll = document.querySelector('#chat-content');
           var html='<div class="chatbox__body__message chatbox__body__message--left"><div class="chatbox_timing"><ul><li id="fecha"><i class="fa fa-calendar"></i>'+fecha+'</li><li id="hora"><i class="fa fa-clock-o"></i>'+hora+'</li></ul></div><div class="clearfix"></div><div class="ul_section_full"><li><strong>'+nombre+'</strong></li><li>'+mensaje+'</li></ul><div class="clearfix"></div><ul class="ul_msg2"></ul></div></div>';
            chatBox.innerHTML+=html;
            mensajeTxt.value=''; 
            firebase.database().ref('chatBox').push({
                nombre: nombre,
                mensaje: mensaje,
                hora: hora,
                fecha: fecha

            });
                        scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight;    
         firebase.database().ref('chatBox').on('value',function(snapshot){
            var html='';

             snapshot.forEach(function(e){
                 var element= e.val();
                 var nombreGet= element.nombre;
                var mensageGet= element.mensaje;
                 var horaGet=element.hora;
                var fechaGet= element.fecha;
                 html+='<div class="chatbox__body__message chatbox__body__message--left"><div class="chatbox_timing"><ul><li id="fecha"><i class="fa fa-calendar"></i>'+fechaGet+'</li><li id="hora"><i class="fa fa-clock-o"></i>'+horaGet+'</li></ul></div><div class="clearfix"></div><div class="ul_section_full"><li><strong>'+nombreGet+'</strong></li><li>'+mensageGet+'</li></ul><div class="clearfix"></div><ul class="ul_msg2"></ul></div></div>';
               
                   
                 
             });
              chatBox.innerHTML=html;
              scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight;
         });
    }
});