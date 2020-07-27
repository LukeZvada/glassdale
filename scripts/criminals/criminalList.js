import { useCriminals, getCriminals } from "./criminalDataProvider.js";
import { criminalHTMlConverter } from "./criminalHTMLConverter.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
    // the goal here is to Filter displayed criminals by the crime that was chosen by the user in the dropdown menu.

    // Looking for what crime was chosen
    const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId  // 9

    // Get actual crime name. Number is not enough.
    const arrayOfCrimes = useConvictions()
    const foundCrimeObject = arrayOfCrimes.find(
        (crime) => {
            return parseInt(crimeThatWasSelected) === crime.id
        }) // { id: 9, name: "Theft" }

    // Filter criminal array to only criminal that have a matching `conviction` property value
    const allCriminals = useCriminals()

    const filteredCriminals = allCriminals.filter(
        (currentCriminalObject) => {
            return foundCrimeObject.name === currentCriminalObject.conviction
        })
    render(filteredCriminals)
})

const render = (arrayOfCriminals) => {
    let criminalHTMLRep = ""

    arrayOfCriminals.forEach(criminal => {
        criminalHTMLRep += criminalHTMlConverter(criminal)
    })

    contentTarget.innerHTML = `
        <h2>Glassdale Convicted Criminals</h2>
        <article class="criminalList">
            ${ criminalHTMLRep }
        </article>
    `
}

export const criminalList = () => {

    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
}