export const criminalHTMlConverter = (criminalObj) => { 
    return `
        <section>
            ${criminalObj.name}
            ${criminalObj.age}
            ${criminalObj.conviction}
            ${criminalObj.incarceration.start}
            ${criminalObj.incarceration.end}
    
    `
}