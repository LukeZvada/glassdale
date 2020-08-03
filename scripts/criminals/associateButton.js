import { useCriminals, getCriminals } from "./criminalDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => { 
    getCriminals().then(() => {

        const criminals = useCriminals()
    })
})