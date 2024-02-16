const headerNavigation = document.querySelector(".header-navigation")
const navaigationIcon = document.querySelector(".navaigation-icon")
const navigationCrossIcon = document.querySelector(".navaigation-cross-icon")

navaigationIcon.addEventListener("click", () => {
    headerNavigation.style.display = "flex"
    navigationCrossIcon.style.display = "block"
    navaigationIcon.style.display = "none"
})

navigationCrossIcon.addEventListener("click", () => {
    headerNavigation.style.display = "none"
    navigationCrossIcon.style.display = "none"
    navaigationIcon.style.display = "block"

})



window.addEventListener('resize', () => {
    if(window.innerWidth > 811) {
        headerNavigation.style.display = "flex"
        navigationCrossIcon.style.display = "none"
        navaigationIcon.style.display = "none"
    } else {
        headerNavigation.style.display = "none"
        navigationCrossIcon.style.display = "none"
        navaigationIcon.style.display = "block"
    }
})