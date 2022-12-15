let shortProvison = 
[   
{
    Sugar           : "5kg",
    Deepam_oil      : "2L",
    Turmeric        : "250g",
    Urade_dal       : "5Kg",
    Pigeon_pea      : "5Kg",
    Black_chickpeas : "2Kg",
    White_chickpeas : "2Kg"
}
]


//for--------------------------------------
    for (let e=0; e<shortProvison.length; e++){
        console.log(shortProvison[e])
    }

//for of-----------------------------------
    for (let expenses of shortProvison){
        console.log(expenses);} 

//for in-----------------------------------
    for (let expenses in shortProvison){
        console.log(expenses) //It will call only the index value.
          console.log(shortProvison[expenses])
    }

//for each---------------------------------
shortProvison.forEach(fuction(expenses))
        console.log(expenses);
