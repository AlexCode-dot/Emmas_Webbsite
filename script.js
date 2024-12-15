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
            logoTitle.classList.remove("hide")
            headerNav.classList.remove("display")
            menuBtn.classList.remove("hide")
            aboutMe.style.display = "block"
        }
        behandlingarContainer.classList.remove("display")
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
const behandlingarContainer = document.querySelector(".behandlingar-wrapper")
const logoTitle = document.querySelector(".logo__title")

behandlingar.addEventListener(
    "click", 
    () => {
        if (window.innerWidth <= 700) {
            headerNav.classList.remove("display")
            menuBtn.classList.remove("hide")
            logoTitle.classList.add("hide")
        }

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
