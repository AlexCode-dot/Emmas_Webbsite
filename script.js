//------------------------------------------------------------
//OM MIG
//------------------------------------------------------------



const omMig = document.querySelector(".om-mig")
const aboutMe = document.querySelector(".about-me")

omMig.addEventListener(
    "click",
    () => {
        if (window.innerWidth >= 700) {
            aboutMe.style.display = "grid";
        }
        else {
            aboutMe.style.display = "block"
        }
    }
)


//------------------------------------------------------------
//KONTAKT
//------------------------------------------------------------


const kontakt = document.querySelector(".kontakt");
const kontaktBoxWrapper = document.querySelector(".kontakt-box__wrapper")
const kontaktBox = document.querySelector(".kontakt-box")

kontakt.addEventListener(
    "click",
    () => {
        kontaktBox.classList.add("display");
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn")
        closeBtn.innerHTML = "X"
        kontaktBox.append(closeBtn)
        kontaktBox.insertBefore(closeBtn, kontaktBox.children[0]);

        closeBtn.addEventListener(
            "click",
            () => {
                kontaktBox.classList.remove("display");
                closeBtn.remove();
            }
        )
    }
)


//------------------------------------------------------------
//BEHANDLINGAR
//------------------------------------------------------------


const behandlingar = document.querySelector(".behandlingar")
const behandlingarContainer = document.querySelector(".behandlingar-container")

behandlingar.addEventListener(
    "click", 
    () => {
        aboutMe.style.display = "none"
        behandlingarContainer.classList.add("display")
    }
)

//------------------------------------------------------------
//MENU
//------------------------------------------------------------

const menuBtn = document.querySelector(".menu-btn__wrapper")
const headerNav = document.querySelector(".header__nav")

menuBtn.addEventListener(
    "click",
    () => {
        headerNav.classList.add("display")
        menuBtn.classList.add("hide")

        const closeMenuBtn = document.createElement("button");
        closeMenuBtn.classList.add("close-menu-btn")
        closeMenuBtn.innerHTML = "X"
        headerNav.append(closeMenuBtn)
        headerNav.insertBefore(closeMenuBtn, headerNav.children[0]);

        closeMenuBtn.addEventListener(
            "click",
            () => {
                headerNav.classList.remove("display");
                closeMenuBtn.remove();
                menuBtn.classList.remove("hide")
            }
        )
    }
)
