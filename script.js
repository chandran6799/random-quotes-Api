const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);
const containerEl = document.createElement("div");
containerEl.classList.add("container");
wrapper.appendChild(containerEl);
const quoteEl = document.createElement("p");
quoteEl.setAttribute("id", "quote");
const authorEl = document.createElement("h3");
authorEl.setAttribute("id", "author");
const btnEl = document.createElement("button");
btnEl.innerText = "Get Quote";
btnEl.setAttribute("id", "btn");

containerEl.append(quoteEl, authorEl, btnEl);

let quote = document.getElementById("quote");
let btn = document.getElementById("btn");
let author = document.getElementById("author");

const url = "https://api.quotable.io/random";
const getQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      quote.innerText = data.content;
      author.innerText = data.author;
    })
    .catch((err) => console.log(err));
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
