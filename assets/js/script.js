const navigation =  document.getElementById("nav")

navigation.addEventListener("click" ,ChangeEvent);

function ChangeEvent (){
    const headerNave = document.querySelector(".header_nav");
    const headerIcon =  document.querySelectorAll(".navjs")

    headerNave.classList.toggle("show");
    headerIcon.forEach(icon =>{
        icon.classList.toggle("hidden");
    })

}

const autoCloseMenu = document.querySelectorAll(".header_nav>li>a")
console.log(autoCloseMenu);

for(let i = 0; i < autoCloseMenu.length; i++){
      autoCloseMenu[i].addEventListener("click" ,ChangeEvent);
};