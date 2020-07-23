import { useCriminals, getCriminals } from "./criminalDataProvider.js";
import { criminalHTMlConverter } from "./criminalHTMLConverter.js";

const contentTarget = document.querySelector(".criminalsContainer")

export const criminalList = () => 

    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        let criminalHTMLRep = ""
        criminalArray.forEach(criminal => {
            criminalHTMLRep += criminalHTMlConverter(criminal)
        })

        contentTarget.innerHTML = criminalHTMLRep
    })
