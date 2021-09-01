//geting Element by id 
const InputsItems=()=>{
     // geting user input Value
    const InputBook=document.getElementById("input-books");
    const InputBookValue=InputBook.value;
    InputBook.value="";
    // geting the Api
      
    const url=(`http://openlibrary.org/search.json?q=${InputBookValue}`);
        fetch(url)
    .then(res=>res.json())
    .then(data=>displayBooksList(data));
    
};

// Displying Books in the Windows
const displayBooksList=(books)=>{
    const api=books.docs;
    const displyBooks=document.getElementById("disply-book");
    displyBooks.textContent='';

    api.forEach(book=>{
            console.log(book)
        //    creating new element
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`  <div class="card">
            <img  src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" width="150" height="300px" class="card-img-top" alt="...">
            <div class="card-body">
              <h2 class="card-title">${book.title}</h2>
               <h3>${book.author_name}</h3>
              <h4>Publisher ${book.publisher} </h4>
                <p>${book.contributor}</p>
              <p >${book.publish_date}</p>
              <h5> Language ${book.language}</h5>
            </div>
          </div>`;
        //   Append Child from Div
          displyBooks.appendChild(div);
    });
    // Displying Search Result
    const showResult=books.numFound
        if(showResult===0){
          const displySearchResult=document.getElementById("search-results");
          // clear Data
              displySearchResult.textContent="";
          const div=document.createElement("div");
          div.classList.add("h2")
          div.innerHTML=`Ressult Not Found <h3>${showResult}</h3> `;
          displySearchResult.appendChild(div)
        }else{
          const displySearchResult=document.getElementById("search-results");
          // clear Data
          displySearchResult.textContent="";
          const div=document.createElement("div");
          div.classList.add("h2")
          div.innerHTML=`Ressult Found <h3>${showResult}</h3> `;
          displySearchResult.appendChild(div)
        };
   

};

// cover_i