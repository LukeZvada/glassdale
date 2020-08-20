import { useCriminals, getCriminals } from "./criminalDataProvider.js";
import { criminalHTMlConverter } from "./criminalHTMLConverter.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { useOfficers } from "../officers/OfficerProvider.js"
import { AssociatesClick } from "./associateButton.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";
import { useFacilities, getFacilities } from "../facility/FacilityProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
    // the goal here is to Filter displayed criminals by the crime that was chosen by the user in the dropdown menu. If they select "please select a crime.. show all of the criminals."

    // Looking for what crime was chosen
    const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId  // 9
    //console.log(crimeThatWasSelected) used this console.log to figure out what the id was of "please select a crime.." 
    
    if (crimeThatWasSelected === "0") { //Used the crimeid to figure out if the "please select a crime.." was selected. 
        const allCriminals = useCriminals() // invoked the  useCriminals() function to get all of the criminal and render it
        render(allCriminals) 
    } else { // if crimeId was anything other than 0. Find the crime that was selected using .find then filter convictions out.
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
    }
})


eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
    // How can you access the officer name that was selected by the user?
    const officerThatWasSelected = officerSelectedEvent.detail.officerId

    if (officerThatWasSelected === "0") { //Used the crimeid to figure out if the "please select a crime.." was selected. 
        const allCriminals = useCriminals() // invoked the  useCriminals() function to get all of the criminal and render it
        render(allCriminals) 
    } else {
        const arrayOfOfficers = useOfficers()
        const foundOfficerObject = arrayOfOfficers.find(
            (officer) => {
                return parseInt(officerThatWasSelected) === officer.id
        })
    // console.log(foundOfficerObject)
    const allCriminals = useCriminals()

    const filteredCriminals = allCriminals.filter(
        (currentCriminalObject) => { 
            return currentCriminalObject.arrestingOfficer === foundOfficerObject.name
        })
        render(filteredCriminals)
    }
})



    // use .find to filter out the officer object that matches the officer id that was selected

const render = (arrayOfCriminals) => {
    let criminalHTMLRep = ""

    const ArrOfCriminalHTMLRep = arrayOfCriminals.map(
        (criminal) => {

            const criminalFacilityRelationships = criminalFacilites.filter(
                (allCriminalFacilities) => {
                    return criminal.id === allCriminalFacilities.criminalId
                }
            )
        }
    )

export const criminalList = () => {

    getCriminals()
    .then(getFacilities)
    .then(getCriminals)
        .then(() => {
            criminals = useCriminals()
            criminalFacilites = useCriminalFacilities()
            facilities = useFacilities()

            render(criminals)
        })
}


