let search=document.getElementById('valeur');
let medecine=document.querySelector('.medecine')
console.log(medecine)



let  list= { "doc":
    [{ "code" : "AG1","name":"Augmentin" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=A054.html","path":"./images/1.jpg"  },
    { "code" : "AX2","name":"AMOXICILLIN " ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=A053.html","path":"./images/2.jpeg"  },
    { "code" : "LB2","name":"Labetalol" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=L001.html ","path":"./images/3.jpg"  },
    { "code" : "SBS","name":"Sodium Bicarbonate" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=S018.html" ,"path":"./images/4.webp"   },
    { "code" : "SF12","name":"CEFTAZIDIME" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=C047.html" ,"path":"./images/5.png"   },
    { "code" : "ACV","name":"acycloguanosine" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=A012.html" , "path":"./images/6.jpg"  },
    { "code" : "OMEP","name":"Omeprazole" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=O009.html","path":"./images/7.jpg"  },
    { "code" : "CL11","name":"Cloxacillin " ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=C104.html","path":"./images/8.jpg"  },
    { "code" : "MeR4","name":"MEROPENEM" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=M033.html" ,"path":"./images/9.jpg"},
    { "code" : "FAc","name":"Folic acide" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=F037.html" ,"path":"./images/10.jpg" },
    { "code" : "CRil","name":"Captopril" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=C018.html" ,"path":"./images/11.jpg" },
    { "code" : "APin","name":"Amlodipine" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=A049.html" ,"path":"./images/12.jpg" },
    { "code" : "CC11","name":"Calcium carbonate " ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=C007.html" ,"path":"./images/13.png" },
    { "code" : "AMH7","name":"AMITRIPTYLINE" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=A047.html" ,"path":"./images/14.jpg" },
    { "code" : "PRDD","name":"PRAMIPEXOLE DIHYDROCHLORIDE" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=P066.html" ,"path":"./images/15.jpg" },
    { "code" : "ATCA","name":"ATORVASTATIN CALCIUM" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=A080.html","path":"./images/16.jpg" },
    { "code" : "PIP21","name":"PIPERACILLIN" ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=P052.html" ,"path":"./images/17.png" },
    { "code" : "CES2","name":"CEFTRIAXONE SODIUM " ,"url": "http://www.robholland.com/Nursing/Drug_Guide/data/monographs/monoframe.html?vfile=C050.html" ,"path":"./images/18.png"},

    

]};


function filter(){
    
list.doc.map(  e=> {
    if(search.value.toUpperCase()==e.code.toUpperCase()){
        
    
        let med=`  
        <div class="item">
        <div   class="item1" >
        <h1> <span> Name </span> : ${e.name} </h1>
        <h2>  <span> Code  </span>: ${e.code} </h2>
        <h2> <a href="${e.url}"  target="_blank" >  more info </a> </h2> 
        </div> 
        <img   src=${e.path} alt="med"  />
        </div>`
        medecine.innerHTML=med
        console.log(medecine)
    }
   else{
       med=null
   }
    
    
})
}