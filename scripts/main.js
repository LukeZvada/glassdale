// import { getOfficers, useOfficers } from "./OfficerProvider.js";

// getOfficers()
// .then (() => {
// const officerArray = useOfficers()
// console.log(officerArray)
// })


import { officerList } from "./officers/OfficerList.js";
import { criminalList } from "./criminals/criminalList.js";
import { ConvictionSelect } from "./convictions/covinictionSelect.js";

officerList()
criminalList()
ConvictionSelect()