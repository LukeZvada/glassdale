let officers = []   //empty array that will hold the data when we get it back 

export const useOfficers = () => {
    return officers.slice()
} //this function will export a copy of the array 

export const getOfficers = () => { //using this function to get the officers out of the database
    return fetch("https://criminals.glassdale.us/officers") //use fetch to fetch the data from the end point (USE POSTMAN). This is a string in its normal format. we convert to json below
        .then(response => response.json()) //take the response and convert it into json. This is a method so you need the () at the end. 
        //^.then tells it to wait for the fetch to be done then do conversion. //the argument on this .then is A FUNCTION. 
        .then( //You cannot use a .then on anything other than a fetch request. 
            parsedOfficers => { //parsedOfficers is the return value of the .then. 
                //console.table(parsedOfficers) 
                officers = parsedOfficers //set the value of the array to the data that comes back. 
            }
        )
}