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
    const api=books.docs
    const displyBooks=document.getElementById("disply-book");

    api.forEach(book=>{
            console.log(book)
        //    creating element
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`  <div class="card">
            <img  src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" width="150" height="300px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <h6>Publisher ${book.publisher} ${book.publish_year}</h6>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>`;
        //   Append Child from Div
          displyBooks.appendChild(div);
    });
    // Displying Search Result
    const displySearchResult=document.getElementById("search-results");
    const div=document.createElement("div");
    div.classList.add("h2")
    div.innerHTML=`Ressult Found <h3>${books.numFound}</h3> `;
    displySearchResult.appendChild(div)

}

// cover_i