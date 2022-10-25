let team = ["Linus", "Helene", "Christina", "Hany"]

let include_teaching_assistants = true
if (include_teaching_assistants){

  team.push ("Tarek")
  team.push("Seb")
}
for (let index = 0; index < team.length; index++){

  let team_member = team[index];
  console.log(index + " .hi " + team_member);
}