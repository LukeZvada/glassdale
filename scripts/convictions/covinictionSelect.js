/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "../convictions/ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    const customEvent = new CustomEvent("crimeSelected", {
        detail: {
            crimeId: changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
})

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        // Get all convictions from application state / aplication state means its current condition 
        const convictions = useConvictions()
        
        render(convictions)
    })

        
    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(
                        convictionObject => {
                            return `<option value="${ convictionObject.id }">${convictionObject.conviction}</option>`
                        }
                    ).join("") //gets rid of the comma in the array when logged
                }
            </select>
        `
    }
}