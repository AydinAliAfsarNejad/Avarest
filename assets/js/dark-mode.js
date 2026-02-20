
let $ = document
const toggleThemeBtn = $.querySelector("#toggle-theme")

toggleThemeBtn.addEventListener("click" , () => {
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

function removeItem (theme){

}

removeItem('theme')
