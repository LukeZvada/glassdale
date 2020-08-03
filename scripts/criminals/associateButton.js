import { useCriminals, getCriminals } from "./criminalDataProvider.js";

const contentTarget = document.querySelector(".associate__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    const customEvent = new CustomEvent("alibiSelected", {
        detail: {
            known__associateId: changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
})

export const AssociateSelect = () => { 
    getCriminals().then(() => {
        const criminals = useCriminals()
        
        render(criminals)
    })

        
    const render = alibiCollection => {

        contentTarget.innerHTML = `
            <select class="button" id="alibiSelect">
                ${
                    alibiCollection.find(
                        alibiObject => {
                            return `<option value="${ alibiObject.id }">${alibiObject.name}</option>`
                        }
                    ).join("") 
                }
            </select>
        `
    }
}