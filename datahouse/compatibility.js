const fs = require('fs');

const fileContent = fs.readFileSync('input.json', 'utf-8');
const data = JSON.parse(fileContent);

console.log(data);

let teamIntel  ligence = 0;
let teamStrength = 0;
let teamEndurance = 0;
let teamCharisma = 0;

//add up total scores of the current team to see the strengths and weaknesses
for (let i = 0; i < data.team.length; i++ ) {
    teamIntelligence += data.team[i].attributes.intelligence;
    teamStrength += data.team[i].attributes.strength;
    teamEndurance += data.team[i].attributes.endurance;
    teamCharisma += data.team[i].attributes.charisma;
}

const teamTraits[teamIntelligence, teamStrength, teamEndurance, teamCharisma];
teamTraits.sort(a,b) => b - a);

let greatestNeed = 
for (let i = 0; i < data.applicants.length; i++ ) {

}

