/* If your name starts with the letter "R" or lower case "r", you are playing banjo!
name + " plays banjo"
name + " does not play banjo" */

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`;
}