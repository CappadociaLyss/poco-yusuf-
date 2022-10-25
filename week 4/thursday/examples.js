//LOOP

let team = ["Linus", "Helene", "Christina", "Hany"] 
team.splice(2, 0, "Tarek", "Seb")
team.pop()
let str = ""
for (let index = 0; index <team.length; index++){
    let team_member = team[index];
    str = str + team_member
    if (index != team. length-1)
    str = str + " - "
}
console.log(str)