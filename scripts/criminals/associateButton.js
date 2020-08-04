import { useCriminals, getCriminals } from "./criminalDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", customEvent => {
    const contentTarget = document.querySelector(".associatesClick")
    const criminalId = customEvent.detail.chosenCriminal

    const criminalChosen = useCriminals().find(
        (criminal) => criminal.id === parseInt(criminalId)
    )

    //This is the HTML that will be added to the dialog component at the bottom when the button is clicked" 
    contentTarget.innerHTML = `${
        criminalChosen.known_associates.map(associate => {
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