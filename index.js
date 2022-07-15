function findMatching (driver, name) {
    let racer = driver.filter(element => element === name || element === name.toLowerCase())
    return racer 
}
 
function fuzzyMatch(driver, name) {
    let racer = driver.filter(element => element.slice(0,name.length) === name)
    return racer
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(drivers, hometown) {
    let name = drivers.filter(driver => driver.name === hometown)
    return name
}


