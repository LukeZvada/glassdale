import { useCriminals, getCriminals } from "./criminalDataProvider.js";
import { criminalHTMlConverter } from "./criminalHTMLConverter";

const contentTarget = document.querySelector(".criminalsContainer")

export const criminalList = () => 

    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        let criminalHTMLRep = ""
        criminalArray.forEach(criminal => {
            criminalHTMLRep += criminalHTMLRep(criminal)
        })

        contentTarget.innerHTML = criminalHTMLRep
    })
