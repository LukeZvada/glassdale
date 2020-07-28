import { useOfficers, getOfficers } from "OfficerProvider.js";

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        eventHub.dispatchEvent(customEvent)
    }

})

export const officerSelect = () => {
    getOfficers().then(() => { 
        const officers = useOfficers()

        render(officers)
    })

    const render = officerCollection => {

        contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${
                    officerCollection.map(
                        officerObject => {
                            return `<option value="${ officerObject.id }">${officerObject.name}</option>`
                        }
                    ).join("") //gets rid of the comma in the array when logged
                }
            </select>
        `
    }
}