import { useCriminals, getCriminals } from "./criminalDataProvider.js";
import { criminalHTMlConverter } from "./criminalHTMLConverter.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener('crimeSelected', (crimeSelectedEvent) => {
    // The goal here is to filter dispalyed by the crime that was chosen

    //Which crime was chosen??? 
    const selectedCrime = crimeSelectedEvent.detail.crimeId

    //Get actual crime name since the number is not enough
    const arrayOfCrimes = useConvictions()
    const foundCrimeObject = arrayOfCrimes.find(
        (crime) => {
            return parseInt(selectedCrime) === crime.id
        }
    ) //this evaluates to { id: 9, name: "theft" } that we originally got from the API 

    //Filter criminal array to only criminal that have a matching conviction property after you get crime name.  

    const allCriminals = useCriminals()

    const filteredCriminals = allCriminals.filter (
        (currentCriminalObject) => {
            return foundCrimeObject.name === currentCriminalObject.conviction
        }) 

    render(filteredCriminals)


    const render = (arrayOfCriminals) => {
        let criminalHTMLRep = ""
        criminalArray.forEach(criminal => {
            criminalHTMLRep += criminalHTMlConverter(criminal)
        })

        arrayOfCriminals.innerHTML = `
        <h3>Glassdale Convicted Criminals</h3>
        <article class="officerList">
            ${criminalHTMLRep}
        </article>`
    }

})

export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
}