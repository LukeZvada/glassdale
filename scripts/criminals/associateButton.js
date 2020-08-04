import { useCriminals } from "./criminalDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("associatesClicked", customEvent => {
    const contentTarget = document.querySelector(".associatesClick")
    const criminalId = customEvent.detail.criminalChosen

    const chosenCriminal = useCriminals().find(
        (criminal) => criminal.id === parseInt(criminalId)
    )

    //This is the HTML that will be added to the dialog component at the bottom when the button is clicked" 
    contentTarget.innerHTML = `${
        chosenCriminal.known_associates.map(associate => {
            return `
                <h4>${associate.name}</h4>
                <div>${associate.alibi}</div>
            `
        }).join("")
    }`

    // .ShowModal will show the dialog element
    contentTarget.showModal()
})
    
  




//exporting the dialog html to the DOM 
export const AssociatesClick = () => {
    return `
        <dialog class="associatesClick">
        
        </dialog>
    `
}