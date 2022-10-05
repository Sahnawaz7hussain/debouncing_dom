
 const api_key = "2e221cd1fe8da10e01bc49f8d8d2091b";
 async function get_data(){
    try{
    let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
    let res = await fetch(url);
    let data = await res.json();
   // console.log(data.results)
   append(data.results)

    }catch(err){
        console.log(err.message);
    }

   }  

 get_data()

  function append(data){
   let trending_container = document.querySelector("#trending_container");
   

   data.forEach(function(elem){
            
      let trending_box = document.createElement("div");
        trending_box.setAttribute("id","trending_box")
       let poster = document.createElement("img");
       
       poster.src="https://image.tmdb.org/t/p/w500" +elem.poster_path;

       let Title = document.createElement("h3");
       Title.innerText = elem.title;

       let release_date = document.createElement("p");
       release_date.innerText = `Release Date: ${elem.release_date}`

       let type = document.createElement("h5");
       type.innerText=`Type: ${elem.media_type}`;
       trending_box.append(poster,Title,release_date,type);
       trending_container.append(trending_box)
      // console.log(Title);
      
   });
    //  console.log(data)
  }

