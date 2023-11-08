import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamNamesService {

  private adjectiveList: string[] = [
    'Agile', 'Brave', 'Crimson', 'Dazzling', 'Emerald', 'Fearless', 'Golden', 'Harmonious', 'Indigo', 'Jovial',
    'Kinetical', 'Luminous', 'Majestic', 'Noble', 'Opalescent', 'Powerful', 'Quaint', 'Radiant', 'Sapphire', 'Thriving',
    'Ultramarine', 'Vibrant', 'Whimsical', 'Exotic', 'Youthful', 'Zealous', 'Azure', 'Beneficent', 'Cerulean', 'Dynamic',
    'Effervescent', 'Fiery', 'Gracious', 'Honeyed', 'Inspiring', 'Jade', 'Kindly', 'Lavender', 'Magnetic', 'Nutmeg',
    'Orchid', 'Pioneering', 'Quixotic', 'Resplendent', 'Scarlet', 'Teal', 'Unyielding', 'Victorious', 'Winsome', 'Xanadu',
    'Yummy', 'Zephyr', 'Amber', 'Bountiful', 'Cobalt', 'Delightful', 'Ebony', 'Flourishing', 'Garnet', 'Harmonic', 'Ivory',
    'Jubilant', 'Keen', 'Lustrous', 'Mirthful', 'Nectarous', 'Ochre', 'Plucky', 'Quenching', 'Roseate', 'Sterling',
    'Tangerine', 'Uplifting', 'Velvet', 'Warmhearted', 'X-factor', 'Yara', 'Zenithal', 'Alabaster', 'Blissful', 'Coral',
    'Daring', 'Fuchsia', 'Glowing', 'Hearty', 'Iridescent', 'Joyous', 'Knightly', 'Lilac', 'Mesmeric', 'Nurturing', 'Onyx',
    'Peachy', 'Questing', 'Ruby', 'Serene', 'Topaz', 'Unstoppable', 'Vivacious', 'Welcoming'

  ];

  private nounList: string[] = [
    'Lions', 'Phoenix', 'Thunder', 'Jaguars', 'Maestros', 'Ravens', 'Stars', 'Cheetahs', 'Storm', 'Falcons',
    'Cosmos', 'Tigers', 'Dragons', 'Whales', 'Rhapsody', 'Panthers', 'Griffins', 'Eagles', 'Titans', 'Bears',
    'Comets', 'Dingoes', 'Knights', 'Gators', 'Pumas', 'Stallions', 'Lynxes', 'Hurricanes', 'Wolves', 'Pulse',
    'Ocelots', 'Tornadoes', 'Roosters', 'Gladiators', 'Badgers', 'Warriors', 'Ospreys', 'Legends', 'Gazelles', 'Tsunami',
    'Hawks', 'Explorers', 'Cobras', 'Marvels', 'Stingrays', 'Blazers', 'Leopards', 'Crusaders', 'Meerkats', 'Guardians',
    'Rhinos', 'Vipers', 'Owls', 'Virtuosos', 'Buffalos', 'Tides', 'Otters', 'Conquerors', 'Foxes', 'Aces',
    'Pelicans', 'Monsoons', 'Squirrels', 'Avengers', 'Orcas', 'Pioneers', 'Wallabies', 'Cyclones', 'Sloths', 'Champions',
    'Armadillos', 'Surge', 'Chameleons', 'Mavericks', 'Flamingos', 'Sages', 'Piranhas', 'Rangers', 'Turtles', 'Admirals',
    'Koalas', 'Royals', 'Peacocks', 'Prodigies', 'Mantises', 'Juggernauts', 'Tapirs', 'Paladins', 'Bisons', 'Saviors',
    'Porcupines', 'Wave', 'Zebras', 'Castellans', 'Ferrets', 'Torrents', 'Mooses', 'Troopers', 'Macaws', 'Mystics'
  ];

  private generatedNamesSet: Set<string> = new Set();
  // This will be used to store the generated names so that we can check if a name has already been generated.
  private generatedTeamNames: string[] = [];

  constructor() { }


/**
 * Generates an array of team names based on the number of teams requested.
 * @param numberOfTeams The number of team names to generate.
 * @returns An array of team names.
 */
generateTeamNames(numberOfTeams:number): string[] {
  if(numberOfTeams <= 0) {
    return [];
  }

  for(let i = 0; i < numberOfTeams; i++){
    if(this.generatedNamesSet.size >= this.adjectiveList.length * this.nounList.length){
      console.warn("All Possible Team Names Have Been Generated");
      break;
    }

    let potentialName = "";
    do {
      const randomIndex1 = Math.floor(Math.random() * this.adjectiveList.length);
      const randomIndex2 = Math.floor(Math.random() * this.nounList.length);
      potentialName = this.adjectiveList[randomIndex1] + ' ' + this.nounList[randomIndex2];
    } while (this.generatedNamesSet.has(potentialName));

    this.generatedNamesSet.add(potentialName);
    this.generatedTeamNames.push(potentialName);

  }

  return this.generatedTeamNames;

}

}
