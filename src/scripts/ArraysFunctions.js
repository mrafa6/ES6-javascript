const student = [
    {id:101,name:'Ramesh', score:78, color:'blue', house: 'Aravali'},
    {id:102,name:'Suresh', score:88, color:'green', house: 'Nilgiri'},
    {id:103,name:'Virat', score:55, color:'green', house: 'Udaygiri'},
    {id:104,name:'Goutam', score:89, color:'blue', house: 'Udaygiri'},
    {id:105,name:'Rajat', score:48, color:'red', house: 'Nilgiri'},
    {id:106,name:'Seema', score:92, color:'yellow', house: 'Aravali'},
    {id:107,name:'Sunita', score:66, color:'black', house: 'Shivalik'},
    {id:108,name:'Anita', score:75, color:'white', house: 'Shivalik'}
];

function filterByScore (x) {
    let result = student.filter((s) => s.score>x);
    console.log(result);
    return result;
}
function filterByHouse (h) {
    let result = student.filter((s) => s.house === h);
    console.log(result);
    return result;
}


filterByScore(75);
filterByHouse('Aravali');


