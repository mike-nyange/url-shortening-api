const inputField = document.getElementById("url-shortener-form");

//const respCard = document.getElementById("responses");

const shortenerButton = document.getElementById("url-shortener-button");

// const responsecard = `<p class="url" id="original_link"></p>
// <div class="short-url">
//   <p class="shortened-urls" id="full_short_link"></p>
//   <button class="btn">Copy</button>`;

//   const originalLink = document.getElementById("original_link")
//   const fullShortLink = document.getElementById("full_short_link")

// const fullShortLinkContent = fullShortLink.innerText;

// CREATING THE RESPONSE CARDS

function createResponseCard(){
  //container
  const responseContainer = document.createElement("div");
  responseContainer.classList.add("responses");
  //original link
  const originalLink = document.createElement("p");
  originalLink.className = "url"

  const shortUrl = document.createElement("div");
  shortUrl.className = "shorturl"
  const shortenedUrl = document.createElement("p");
  shortenedUrl.className = "shortened-url"
  const copyButton = document.createElement("button").classList.add("copy-btn")
  shortUrl.appendChild(shortenedUrl);
  shortUrl.appendChild(copyButton);

  responseContainer.appendChild(originalLink);
  responseContainer.appendChild(shortUrl);
  responseContainer.style.display = "flex"

  return responseContainer


}


const shrtcode = async () => {
    
};


shortenerButton.addEventListener("click", async () =>{
  const requestUrl = `https://api.shrtco.de/v2/shorten?url=${inputField.value}`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    
    const responses = document.createElement("div");
    let links
    

    try{
        if (!data.ok) {
            
        }else{
          console.log(data.result.full_short_link)
          // respCard.style.display = "flex";
          // originalLink.textContent = data.result.original_link
          // fullShortLink.textContent = data.result.full_short_link
          createResponseCard()
          


          if (localStorage.getItem('links') === null) {
            links = []
          }else {
            links = JSON.parse(localStorage.getItem('links'))
          }
          links.push(data.result.code)
          localStorage.setItem('links', JSON.stringify(links))
        }
    }catch(err){
      console.log(err)
    }

    const copyButton = document.getElementById("copy-btn");

  copyButton.addEventListener("click", async () => {
    copyButton.className = "copied-btn";
    copyButton.textContent = "Copied!"
    await navigator.clipboard.writeText(fullShortLinkContent).then(() => {
      console.log("Copied to clipboard")
    })
    setTimeout(() => {
      copyButton.className = "copy-btn";
      copyButton.textContent = "Copy"
    }, 4000)
  })
});

