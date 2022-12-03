// const inputField = document.getElementById("url-shortener-form");

// //const respCard = document.getElementById("responses");

// const shortenerButton = document.getElementById("url-shortener-button");

// // const responsecard = `<p class="url" id="original_link"></p>
//<div class="short-url">
// //   <p class="shortened-urls" id="full_short_link"></p>
// //   <button class="btn">Copy</button>`;

// //   const originalLink = document.getElementById("original_link")
// //   const fullShortLink = document.getElementById("full_short_link")

// // const fullShortLinkContent = fullShortLink.innerText;

// // CREATING THE RESPONSE CARDS

// function createResponseCard(){
//   //container
//   const responseContainer = document.createElement("div");
//   responseContainer.classList.add("responses");
//   //original link
//   const originalLink = document.createElement("p");
//   originalLink.className = "url"

//   const shortUrl = document.createElement("div");
//   shortUrl.className = "shorturl"
//   const shortenedUrl = document.createElement("p");
//   shortenedUrl.className = "shortened-url"
//   const copyButton = document.createElement("button").classList.add("copy-btn")
//   shortUrl.appendChild(shortenedUrl);
//   shortUrl.appendChild(copyButton);

//   responseContainer.appendChild(originalLink);
//   responseContainer.appendChild(shortUrl);
//   responseContainer.style.display = "flex"

//   return responseContainer


// }


// const shrtcode = async () => {
    
// };


// shortenerButton.addEventListener("click", async (event) =>{
//   event.preventDefault()
//   const requestUrl = `https://api.shrtco.de/v2/shorten?url=${inputField.value}`;
//     const response = await fetch(requestUrl);
//     const data = await response.json();
    
//     const responses = document.createElement("div");
//     let links
    

//     try{
//         if (!data.ok) {
            
//         }else{
//           console.log(data.result.full_short_link)
//           // respCard.style.display = "flex";
//           // originalLink.textContent = data.result.original_link
//           // fullShortLink.textContent = data.result.full_short_link
//           createResponseCard()
          


//           if (localStorage.getItem('links') === null) {
//             links = []
//           }else {
//             links = JSON.parse(localStorage.getItem('links'))
//           }
//           links.push(data.result.code)
//           localStorage.setItem('links', JSON.stringify(links))
//         }
//     }catch(err){
//       console.log(err)
//     }

//     const copyButton = document.getElementById("copy-btn");

//   copyButton.addEventListener("click", async () => {
//     copyButton.className = "copied-btn";
//     copyButton.textContent = "Copied!"
//     await navigator.clipboard.writeText(fullShortLinkContent).then(() => {
//       console.log("Copied to clipboard")
//     })
//     setTimeout(() => {
//       copyButton.className = "copy-btn";
//       copyButton.textContent = "Copy"
//     }, 4000)
//   })
// });
const shortenerButton = document.getElementById("url-shortener-button");
const inputField = document.getElementById("url-shortener-form"); 
const responseContainer = document.getElementById("response-container")
const errorText = document.getElementById("error-text")
const showcaseButton = document.getElementById("showcase-btn")

showcaseButton.addEventListener("click", () =>{
  const urlSection = document.getElementById("url-section");
  urlSection.scrollIntoView({
    behavior: "smooth",
  });
})


shortenerButton.addEventListener("click", async (e) => {
  e.preventDefault()
  //testing button.....
  //shortenerButton.style.backgroundColor = "red"
  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${inputField.value}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  try{
    if (!data.ok){
      //testing promise
      //console.log(data)
      inputField.classList.add("error-input")
      errorText.className = "error-text"
      errorText.innerText = "Please enter a valid link"
      setTimeout(() => {
        inputField.classList.remove("error-input")
        errorText.className = "error"
      }, 4000)
    }else{
      console.log(data)
      // const responseContainer = document.createElement("div")
      // responseContainer.innerHTML = `<p class="url" id="original_link">${data.result.original_link}</p>
      // <div class="short-url">
      //   <p class="shortened-urls" id="full_short_link">${data.result.full_short_link}</p>
      //  <button class="btn">Copy</button>
      //  </div>`;
      //  responseContainer.className = "responses"
      //  responseSection.appendChild(responseContainer);
      const responseSection = document.createElement("div")
      responseSection.innerHTML = `<p class="url" id="original_link">${data.result.original_link}</p>
        <div class="short-url">
          <p class="shortened-urls" id="full_short_link">${data.result.full_short_link}</p>
          <button class="copy-btn" id = "copy-btn">Copy</button>
        </div>`;
      responseSection.classList.add("responses")

      responseContainer.appendChild(responseSection)
      
      
    }
  }catch{}
})



responseContainer.addEventListener("click", async (e) => {
  if(e.target.classList.contains('copy-btn')){
    e.target.className = "copied-btn";
    e.target.innerText = `Copied!`
    setTimeout(() => {
      e.target.className = "copy-btn"
      e.target.innerText = `Copy`
     }, 4000);
     
     const hidden = document.getElementById("hidden")
     shortenedUrl = document.getElementById("full_short_link").innerHTML
     //hidden.value = shortenedUrl
     //hidden.select()
     //hidden.setSelectionRange(1,999)
     navigator.clipboard.writeText(shortenedUrl)
     .then(() => {
      console.log("copied to clipboard")
     })
  }
})

//Hamburger Menu

const hamburgerMenu = document.getElementById("hamburger-menu")
const mobileMenu = document.getElementById("mobile-menu")


hamburgerMenu.addEventListener("click", () =>{
  mobileMenu.classList.add("mobile-menu")
})



