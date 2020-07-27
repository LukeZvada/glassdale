export const criminalHTMlConverter = (criminalObj) => {
    return `
        <section class="criminal">
            <h3>${criminalObj.name}</h3>
            <div class="criminal__age">Age: ${criminalObj.age}</div>
            <div class="criminal__crime">Crime: ${criminalObj.conviction}</div>
            <div class="criminal__term-start">Term start: ${ new Date(criminalObj.incarceration.start).toLocaleDateString('en-US') }</div>
            <div class="criminal__term-end">Term end: ${ new Date(criminalObj.incarceration.end).toLocaleDateString('en-US') }</div>
        </section>
    `
}