const cookieBox = document.querySelector(".wrapper");
const cookieBoxThanks = document.querySelector(".wrapper2");
const acceptBtn = cookieBox.querySelector(".button_links button");
acceptBtn.onclick = () => {
  //   console.log("Button is clicked");
  //setting cookie for 1 week, after 1 week, cookie will be expired automatically
  document.cookie = "CookieBy=coderNitesh; max-age=" + 60 * 60 * 24 * 7;
  let checkCookie = document.cookie.indexOf("CookieBy=coderNitesh");
  if (checkCookie != -1) {
    //if the above cookie set
    cookieBox.classList.add("hide"); //hide cookie box once cookie set
    cookieBoxThanks.classList.remove("hide"); //hide cookie box once cookie set
  } else {
    alert("Cookie can't be set!"); //if cookie can't be set then alert an error
  }
};

let checkCookie = document.cookie.indexOf("CookieBy=coderNitesh");

if (checkCookie != -1) {
  cookieBox.classList.add("hide");
  cookieBoxThanks.classList.add("hide");
} else {
  cookieBox.classList.remove("hide");
}

document.addEventListener("click", (event) => {
  if (
    !cookieBox.contains(event.target) &&
    !cookieBoxThanks.contains(event.target)
  ) {
    cookieBoxThanks.classList.add("hide");
  }
});
