import { useOfficers, getOfficers } from "./OfficerProvider.js";
import { officerHTMLConverter } from "./OfficerHTMLConverter.js";


const contentTarget = document.querySelector(".officersContainer")

export const officerList = () => { 

    getOfficers()
    .then(() => { 
        const officerArray = useOfficers()
        let officerHTMLRep = "" //let becasue we are modifying the HTMLRep 
        officerArray.forEach(officer => {
            officerHTMLRep += officerHTMLConverter(officer)
        })
        
        contentTarget.innerHTML = `
        <h2>Glassdale PD Officers</h2>
        <article class="officerList">
            ${officerHTMLRep}
        </article>
    `
        })
}