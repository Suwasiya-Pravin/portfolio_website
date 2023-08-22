let mobile = document.getElementById("mobile");
let bar = document.getElementById("mobile").firstElementChild;
let content = document.querySelector(".content");
mobile.addEventListener("click", () => {
  content.style.top = "30vh";
  if (bar.classList.contains("fa-bars")) {
    bar.classList.remove("fa-bars");
    bar.classList.add("fa-times");
    content.style.top = "8vh";
  } else {
    bar.classList.add("fa-bars");
    bar.classList.remove("fa-times");
    content.style.top = "-100vh";
  }
});
// skills section
let url = [
  'https://facebookloginpage.pravinsuwasiya.repl.co/',
  'https://hiretalentbyteschool.pravinsuwasiya.repl.co/',
  'https://aboutusbyteschool.pravinsuwasiya.repl.co/',
  'https://aboutusbluelearn.pravinsuwasiya.repl.co/',
  'https://brocodesignup.pravinsuwasiya.repl.co/',
  'https://restaurantwebsite.pravinsuwasiya.repl.co',
  'https://homeclonebluelearn.pravinsuwasiya.repl.co/',
  'https://hiretalentclonebluelearn.pravinsuwasiya.repl.co/',
  'https://todolistpage.pravinsuwasiya.repl.co/',
];
let HeadingOfCard = [
  "Facebook Login Page",
  "hire talent - byteschool",
  "about us - byteschool",
  "about us clone - bluelearn",
  "sign up page - brocode",
  "restorant website",
  "home page clone - bluelearn",
  "hire talent clone - bluelearn",
  "todo list app",
];
let CardContainer = document.querySelector(".main");
console.log(CardContainer);
for (let i = 0; i < url.length; i++) {
  CardContainer.innerHTML += `
                <div class="card"  data-aos="zoom-out-up"
                data-aos-delay="300"
                data-aos-duration="700">
                <img src="img/cards/${i+1}.png" alt="${HeadingOfCard[i]}" />
                <div class="card-content">
                  <h2>${HeadingOfCard[i]}</h2>
                  <button onclick='window.location.href="${url[i]}";' class="m-btn">See Website</button>
                </div>
              </div>
    
    `;
}
