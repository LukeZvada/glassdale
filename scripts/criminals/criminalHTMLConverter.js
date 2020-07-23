export const criminalHTMlConverter = (criminalObj) => { 
    return `
        <section class="criminal__style">
           <h4 class="criminal__Name"> ${criminalObj.name} </h4>
           <div class="criminal__list"> Age: ${criminalObj.age} </div>
           <div class="criminal__list"> Crime: ${criminalObj.conviction} </div>
           <div class="criminal__list"> Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} </div>
           <div class="criminal__list"> Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')} </div>
        </section>
    `
}