//1. Number of Characters
// function strlen(lstr){
//     return lstr.length
// } 

// console.log(strlen("my name is athi"))

//2. Largest number of 2 numbers
// function find_grt(a,b){
//     if(a<b) {
//         return b
//     } else {
//         return a   
// }   
//}
// console.log("Largest number is ",+find_grt(200,500))

//3. chaeck a number between 2 numbers
// function find_n(a){
//          if(a>=5000 && a<=9999) {
//             return true
//         } else {
//             return false   
//        }   
//     }
//     console.log(find_n(500))
//     console.log(find_n(6500))

//4. Find cube root
// function find_cuberoot(a){
//     return Math.cbrt(a)

// }
// console.log("Cube root is " + find_cuberoot(27))
// console.log("Cube root is " + find_cuberoot(1000))


//5. Convert inches to Feet
//  function convert_feet(a) {
//      return (a*0.083333)
// }
//  console.log("Feet is" +convert_feet(27))
//  console.log("Feet is " + convert_feet(1000))

//6. Convert to Fahrenheit
//  function convert_faher(a) {
//     return ((a*9/5)+32)


// }
// console.log("Fahrenheit is " + convert_faher(-32))
// console.log("Fahrenheit is " +convert_faher(40))

//7. a. Convert Kilograms to Pound
// function convert_pound(a) {
//     return (a*2.2)


// }
// var a=63
// var b=68
// console.log(a +" Kg is "+convert_pound(a) +" pounds")
// console.log(b +" Kg is "+convert_pound(b) +" pounds")

// //7. b. Convert Pound to Kilograms 
// function convert_kg(a) {
//     return (a/2.2)
// }
// a=140
// b=150
// console.log(a+ "pound is " + convert_kg(a) +" Kg")
// console.log(b+ "pound is " + convert_kg(b) +" Kg")

//8. Create Jason file for 10 US states
/* var states = {
    "AZ": {
        "name": "Arizona",
        "capital": "Phoenix",
        "Governor": "Doug Ducey",
        "Area": "113,990 sq mi",
        "Population": "7,151,502",
        "TimeZone": "UTC -07:00",
        "Language": "English",
        "Website": "az.gov"
    },
    "MA": {
        "name": "Massachusetts",
        "capital": "Boston",
        "Governor": "Charlie Baker",
        "Area": "10,565 sq mi",
        "Population": "7,033,469",
        "TimeZone": "UTc-5:00",
        "Language": "English",
        "Website": " www.mass. gov"
    },
    "OH": {
        "name": "Ohio",
        "capital": "Columbus",
        "Governor": "Mike Dewine",
        "Area": "44,825 sq mi",
        "Population": "11,799,448",
        "TimeZone": "UTC -07:00",
        "Language": "English",
        "Website": "Ohio.gov"
    },
    "TX": {
        "name": "Texas",
        "capital": "Austin",
        "Governor": "Greg Abbott",
        "Area": "268,596 sq mi",
        "Population": "29,145,505",
        "TimeZone": "UTC -06:00",
        "Language": "English",
        "Website": " texas.gov"
    },
    "NJ": {
        "name": "New jersey",
        "capital": "Trenton",
        "Governor": "Phil Murphy",
        "Area": "8,722.58 sq mi",
        "Population": "9,288,994",
        "TimeZone": "UTC -05:00",
        "Language": "English",
        "Website": "nj.gov"
    },
    "CA": {
        "name": "California",
        "capital": "United States",
       "Governor": "Gavin Newsom",
        "Area": "163,696 sq mi",
        "Population": "39,538,223",
        "TimeZone": "Utc-08:00",
        "Language": "English",
        "Website": " www.ca.gov"
    },
    "Vt": {
        "name": "Varment",
        "capital": "Montpelier",
        "Governor": "Phil Scott",
        "Area": "9,616 sq mi",
        "Population": "643,503",
        "TimeZone": "UTC -05:00",
        "Language": "English",
        "Website": "www.vermont.gov"
    },
    "UT": {
        "name": "Utah",
        "capital": "Salt Lake City",
        "Governor": "Spencer cox",
        "Area": "84,8999 sq mi",
        "Population": "3,271,616",
        "TimeZone": "Utc-07:00",
        "Language": "English",
        "Website": " utah.gov"
    },
    "NY": {
        "name": "New York",
        "capital": "Albany",
        "Governor": "Kathy Hochul",
        "Area": "113,990 sq mi",
        "Population": "7,151,502",
        "TimeZone": "UTC -05:00",
        "Language": "English",
        "Website": "www.ny.gov"
    },
    "FLA": {
        "name": "Florida",
        "capital": "Tallahassee",
        "Governor": "Ron De santis",
        "Area": "10,565 sq mi",
        "Population": "7,033,469",
        "TimeZone": "Utc-05:00",
        "Language": "English",
        "Website": " myflorida.gov"
    }

}

console.log(states["NY"].name)
console.log(states["NY"])
console.log(states["AZ"].capital)
 */

//9. Create Json object Cricket team
/* 
var cricket ={
    "Indian team":{
        "Batsman":[
            "Rohit Sharma",
            "KL Rahul",
            "Mayank Agarwal",
            "MS Dhoni",
            "Virat Kohli"
        ],
        "Bowler": [
             "Jasprit Bumrah",
             "Avesh Khan",
             "Bhuvneshvar Kumar"

        ],
        "Best Batsman":["Sachin","Virat"],
        "Best Bowler" :["Anil Kumble","Kapil Dev"]
    },
    //Australia
    "Australian team":{
        "Batsman":[
            "Aaron Finch",
            "Travis Head",
            "Steve Smith",
            "David Warner",
            "Glen Maxwell"
        ],
        "Bowler": [
             "Sean Abbott",
             "Jason",
             "Scott"

        ],
        "Best Batsman":[ "Steve Smith",
        "David Warner",
        "Glen Maxwell"],
        "Best Bowler" :[ "Jason",
        "Scott"]
    }
}

console.log(cricket)
console.log(cricket["Indian team"])
console.log(cricket["Indian team"].Batsman)
console.log(cricket["Indian team"]["Best Batsman"])
console.log(cricket["Indian team"].Bowler)
console.log(cricket["Australian team"]["Best Batsman"])
console.log(cricket["Australian team"].Batsman) */
//10. Find the longest string of 2 strings
/* function longstr(lstr1, ){
    if (lstr1.length >lstr2.length)
    {
        return lstr1
    }else{
        return lstr2
    }
}

console.log(longstr("my name is athi","my name is Prakash"))
console.log(longstr("my name is Neelanjanaa","my name is Prakash")) */


//11. Shortest string in a Array

function small_arr(arr1){
    var small_str=arr1[0]
    console.log(small_str.length)
    for (i =1 ;i <arr1.length ; i++)
    {
        console.log(arr1[i].length)
        if(small_str.length>arr1[i].length) 
        {
            small_str = arr1[i]
        }
    }
    return small_str
}


const quotes=["life is beautiful to share","working is fun today","running is good for health","Drink more water"]
console.log("Smallest string in Array  :" +small_arr(quotes))
