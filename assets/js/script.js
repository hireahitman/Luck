
var btf = [
  'No Clicks Needed – Monitor devices remotely with zero physical interaction.',
  'Instant Access – View calls, messages, locations, and more in real time.',
  'Completely Invisible – Operates silently with no detectable footprint.',
  'Compatible Across Devices – Supports Android, iOS, and desktop systems effortlessly.',
  'Monitor, Safeguard, and Stay Updated – All without lifting a finger!'
];

           var btfI = 0;
           setInterval(function(){
               btfI++;
               if(btfI >= btf.length){
                   btfI = 0;
               }
               document.getElementById("btfd").style.animation = `btf 0.5s forwards`;
               setTimeout(()=>{
                  document.getElementById("btfd").style.animation = `none`;
                   document.getElementById("btfd").textContent = btf[btfI];
               },100);
               
           },5000);
           
           document.getElementById("mobile-menu-btn").onclick = function(){
              if(document.getElementById("menu-nav").style.display == "" || document.getElementById("menu-nav").style.display == "none"){
                  document.getElementById("menu-nav").style.display = "block";
        
                
              }else{
                 document.getElementById("menu-nav").style.display = "none";
             
                  
              }
           }

           var si = document.getElementsByClassName("service-image"), tu = document.getElementsByClassName('testimony-user');
           for(let i = 0; i < si.length; i++){
               if(si[i].getAttribute("image-data")){
               si[i].style.backgroundImage = `url(${si[i].getAttribute("image-data")})`;
               }
           }
            for (let i = 0; i < tu.length; i++) {

                tu[i].style.backgroundImage = `url('${tu[i].getAttribute('data')}')`;
            }

            window.onload = function(){
                const a = document.createElement("a"),b = document.createElement("div"), c = document.createElement("div");
                a.href="https://api.whatsapp.com/send?phone=+14166194474&text=I+need+Spy+service.";
                b.style.cssText =  `
    position: fixed;
    left: 30px;
    bottom: 30px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-image: url('assets/images/whatsapp-btn.jpg');
    background-position: center;
    background-size: cover;
    z-index: 100000;`;
      c.textContent = 'Need help? click here.';
      c.style.cssText = `
      position:fixed;
      padding:10px;
      border-radius:10px 10px 10px 0;
      background:#00ff0089;
      bottom:90px;
      left:30px;
      font-size:10px;
      color:#fff;
     z-index: 100012;
      `;
      a.appendChild(b);
      a.appendChild(c);
      document.body.appendChild(a);
      document.getElementById("loading").style.display = "none";
     }