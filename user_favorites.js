const checkbox = document.getElementById("checkbox");
const save = document.getElementById("save");


checkbox.addEventListener("change", () => {
    window.location.href = "https://www.srishabh.ca/";
    window.body.style.backgroundImage = "url('12.png')";
    window.body.style.backgroundRepeat = "no-repeat";
    window.body.style.backgroundSize = "cover";
});

save.addEventListener("click", () => {
    window.onload = function() {
        document.body.style.backgroundImage = 'url("chrome-extension://@'+chrome.runtime.id+'/12.png")';
    }
    document.body.style.backgroundImage = "url('12.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
});