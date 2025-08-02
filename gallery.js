
    let imgs= document.querySelectorAll(".main img");
    let body= document.querySelector("body");
    let outer= document.querySelector(".outerContainer");
    let nature= document.querySelectorAll(".nature");
    let birds= document.querySelectorAll(".birds");
    let nat= document.querySelector(".nat");
    let bds = document.querySelector(".bds")
    let para= document.querySelector("p");
    
    para.addEventListener("click",()=>{
        catI=0;
        arr=[];
    for (n of nature){
            n.classList.remove("clickAt");
        }; 
    for (b of birds){
            b.classList.remove("clickAt");
        };
    })

    let Nature= document.querySelectorAll(".nature img");
    let Birds= document.querySelectorAll(".birds img");


    let catI=0;
        let cat='';
    bds.addEventListener("click", category);
    nat.addEventListener("click", category);

   
    let arr=[];//////for storing img while jumping to dif img/////
    let currentImg=[];
   
   
for(img of imgs){      
    img.addEventListener("click",clickImg);
    }


    let Img= document.createElement("img");
    

    function clickImg(){

        outer.style.opacity= 0.6;
        currentImg.push(this.src);

        this.classList.add("click");
        let div= document.createElement("div");

        body.append(div);
        div.classList.add("create");
        /////////////////////////  cross /////////
        let del= document.createElement("button");
        div.append(del);
        del.classList.add("del");

        del.addEventListener("click",()=>{
            outer.style.opacity= 1;
            div.remove();
            currentImg=[];
        }); 
        ///////////////////// prev and next btn ///////////////
        
        let btn = document.createElement("button");
        div.append(btn);
        btn.classList.add("btn");
        

        let btn2 = document.createElement("button");
        div.append(btn2);
        btn2.classList.add("btn2");

        /////////////////////// change img//////////
        div.append(Img); 
        Img.classList.add("Img");
        console.dir(Img);       
        Img.src= this.src;
        ////////////////////////////////
        btn.addEventListener("click",change);
        btn2.addEventListener("click",change);
}


///////////////////////////////////////////////////////////////////////////////////////
function change(event){
    //// img which display on clicking//////
    if(catI==0){
for(imgC of imgs){
     arr.push(imgC.src);
    }
}
console.log(arr.length);

    let i=0;
    let last =arr.length;

 while(arr!=[]){
    if(currentImg == arr[i]){
    let x=i;
    if(event.target.className=="btn"){
/////////////////////////prev ////////////////
    if(currentImg!=arr[0]){
    Img.src=arr[x-1];
    currentImg=arr[x-1];
        }
        else{
/////////// jump to last img /////
    let y=last;
    Img.src=arr[y-1];
    currentImg=arr[y-1];
        }
    break;
   }
   ///////////////// next /////////
    else{
    if(currentImg!=arr[last-1]){
    Img.src=arr[x+1];
    currentImg=arr[x+1];
        }
        else{
    /////////jump to 1st img/////////
    let y=0;
    Img.src=arr[y];
    currentImg=arr[y];
        }
    break; 
    }
   }
     i++;
 }      
}

function category(){
   
      cat=this.innerText;
      console.log(cat);
       if( cat=="Nature"){
        arr=[];
        for(b of birds){
            b.classList.add("clickAt");
        };
        for (n of nature){
            n.classList.remove("clickAt");
         
        };

        
        for(i of Nature){
   arr.push(i.src);
         }
         

         }

    else{
          arr=[]
        for(n of nature){
            n.classList.add("clickAt");
        };
        for (b of birds){
            b.classList.remove("clickAt");
              
        };
       
  for(i of Birds){
    arr.push(i.src);
    
}
    }
   catI=1;
}

// function cI(){
// cat=1;

// for(i of birds){
//     arr.push(i.src);
// }

// for(i of nature){
//     arr.push(i.src);
// }

// }
