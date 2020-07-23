export const criminalHTMlConverter = (criminalObj) => { 
    return `
        <section class="criminal__style">
            ${criminalObj.name}
            ${criminalObj.age}
            ${criminalObj.conviction}
            Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}
            Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}
    `
}