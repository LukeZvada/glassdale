let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => { //see OfficerList.js for notes on this function
   return fetch("https://criminals.glassdale.us/criminals")
   .then(response => response.json())
   .then( crimeArray => {
        convictions = crimeArray
       })
}