const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "My Job Experience";
    }, 0);
    setTimeout(() => {
        text.textContent = "Junior Java Engineer";
    }, 4000);
    setTimeout(() => {
        text.textContent = " Junior Web Developer";
    }, 8000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = " Tibco Develepor";
    }, 16000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);