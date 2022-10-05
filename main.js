


 let id;
   const api_key = "565d5147";
 async function input_fun(q){
     try{  
          //  let inputs = document.querySelector("#inputs").value
          const url = `https://www.omdbapi.com/?s=${q}&apikey=${api_key} `
          let res = await fetch(url);
          let data = await res.json();
          return (data.Search)
         // console.log(data.Search);
 
     }catch(err){
         console.log(err.message)
     }
 }
 
 async function main(){
     let inputs = document.querySelector("#inputs").value;
 
     let catcher = input_fun(inputs);
     let close_promise = await catcher;
      append(close_promise)
 }
 
 function de_bouncing(func,delay){
    if(id){
        clearTimeout(id);
    }
  
   id = setTimeout(function(){
       func();
   },delay)
 
 
 }
 
 
  
 
   //appendig data to showcase display
   let box = document.querySelector("#inputs_container")
 function append(data){
      // if condition for indefined data .
     if(data===undefined){
           return false
         }
          box.innerHTML=""
       data.forEach(function(elem){
            let Title = document.createElement("p");
              Title.innerText=elem.Title
              Title.style.cursor="pointer";
              Title.addEventListener("click",function(){
                  pass_function(elem)
              })
            
             box.append(Title)
                     
 
          });
 
 //console.log(data)
 
 }
 
 
 
 
     let murga_container = document.getElementById("box");
   
     function pass_function(murga){
     murga_container.innerHTML=null;
             let murga_box = document.createElement("div");
             murga_box.setAttribute("id","m_poster");
             let murga_box2 = document.createElement("div");
             murga_box2.setAttribute("id","m_details")
             let m_poster = document.createElement("img");
                 m_poster.src=murga.Poster;
                 let m_name = document.createElement("h1");
                 m_name.innerText=murga.Title;
                 
                 let m_type = document.createElement("p");
                 m_type.innerText=`Type:${murga.Type}`;
 
                 let m_year = document.createElement("p");
                 m_year.innerText = `Year: ${murga.Year}`
 
                 murga_box.append(m_poster,m_name,m_type,m_year);
                 murga_container.append(murga_box);
     
             }
 