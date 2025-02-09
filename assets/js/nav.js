const body = document.querySelector("body");
const menuBtn = document.querySelector(".checkbtn")

let scrollDisabled = false;
menuBtn.onclick = ()=>{
  if (!scrollDisabled) {
    body.classList.add("disabledScroll");
  } else {
    body.classList.remove("disabledScroll");
  }
  scrollDisabled = !scrollDisabled;

}
