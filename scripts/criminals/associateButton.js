import { useCriminals } from "./criminalDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiButtonClicked", customEvent => {
    const contentTarget = document.querySelector(".associatesClick")
    const criminalId = customEvent.detail.criminalChosen

    const chosenCriminal = useCriminals().find((criminal) => criminal.id === parseInt(criminalId))

    //This is the HTML that will be added to the dialog component at the bottom when the button is clicked" 
    contentTarget.innerHTML = `${
        chosenCriminal.known_associates.map(associate => {
            return `
                <h4>${associate.name}</h4>
                <div>${associate.alibi}</div>
            `
        }).join("")
    }`

    contentTarget.innerHTML += `<button id="close__alibi__button">Close</button>`
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
  

eventHub.addEventListener("click", closeAlibiButton => {
    if(closeAlibiButton.target.id === "close__alibi__button"){
        const contentTarget = document.querySelector(".associatesClick")
        contentTarget.close()
    }
})

