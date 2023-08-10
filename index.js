const btn = document.querySelectorAll(".btn");
const submitBtnTag = document.querySelector(".sub");
const showRateTag = document.getElementById("showRate")
const ratingContainerTag = document.querySelector(".container")
const thankYouTag = document.querySelector(".container2")

let rateValue = null;
btn.forEach(rateNumber => rateNumber.addEventListener("click", () => {
    rateValue = rateNumber.innerHTML;
    if(rateValue >= 1 || rateValue <= 5){
        submitBtnTag.classList.remove("sub-disabled")
    }
}))


submitBtnTag.addEventListener("click", () => {
    if(rateValue){
        ratingContainerTag.classList.add("hide");
        thankYouTag.style.display = "block";
        showRateTag.innerHTML = rateValue;
    }
})
