// Data Here: Achievements, Avg Skill, Cakes, Gems, Crafters Level, Playtime, Slayers, Damage, Networth, Pets, Coins, Skills
// Not here: Collections, Farming Contests, Boss Time (Or any other with 200-300 lines data)
// Achievements
const achievementsData = [
    { rank: 1, name: "SphinxWraith", achievements: "70" },
    { rank: 2, name: "Kg_lcky_01", achievements: "64" },
    { rank: 3, name: "MythicalPanda30", achievements: "60" },
    { rank: 4, name: "Dharmaveer31", achievements: "57" },
    { rank: 5, name: "SammyMishu", achievements: "52" },
    { rank: 6, name: "Perry3338", achievements: "51" },
    { rank: 7, name: "TGJASSIYT", achievements: "49" },
    { rank: 8, name: "Rehan2038", achievements: "48" },
    { rank: 9, name: "Kautilya3072", achievements: "46" },
    { rank: 10, name: "Darkshadow52195", achievements: "41" }
];
// Avg Skill
const skillData = [
  { rank: 1, name: "SphinxWraith/David_R06", level: "51.7" },
  { rank: 2, name: "Moerderfisch", level: "50.7" },
  { rank: 3, name: "GRAVITY8303", level: "50.2" },
  { rank: 4, name: "AndyGamer024", level: "50" },
  { rank: 5, name: "Itzomkar1232891", level: "47.2" },
  { rank: 6, name: "DRONZAR_OP", level: "46.2" },
  { rank: 7, name: "Kg_lcky_01", level: "46" },
  { rank: 8, name: "Rehan2038", level: "42.3" },
  { rank: 9, name: "Perry3338", level: "39.5" },
  { rank: 10, name: "Kautilya3072", level: "36.2" }
];
// Cakes
const cakeData = [
  { rank: 1, name: "MythicalPanda30", cakes: "172" },
  { rank: 2, name: "TGJASSIYT", cakes: "74" },
  { rank: 3, name: "Ghosthuner4233", cakes: "26" },
  { rank: 4, name: "C69P2W", cakes: "5" },
  { rank: 5, name: "Unknown", cakes: "N/A" },
  { rank: 6, name: "Unknown", cakes: "N/A" },
  { rank: 7, name: "Unknown", cakes: "N/A" },
  { rank: 8, name: "Unknown", cakes: "N/A" },
  { rank: 9, name: "Unknown", cakes: "N/A" },
  { rank: 10, name: "Unknown", cakes: "N/A" }
];
// Gems 
const gemsData = [
  { rank: 1, name: "Shakilbaby", gems: "52825" },
  { rank: 2, name: "POSTALFERN73293", gems: "16426" },
  { rank: 3, name: "KRIZMORRENO", gems: "12970" },
  { rank: 4, name: "Mistry_Human", gems: "7625" },
  { rank: 5, name: "Jaddu0192", gems: "7325" },
  { rank: 6, name: "Chaosgem999yt", gems: "7128" },
  { rank: 7, name: "Craniax6797", gems: "6290" },
  { rank: 8, name: "Darkshadow52195", gems: "5779" },
  { rank: 9, name: "Preenuu", gems: "3600" },
  { rank: 10, name: "AhmedTheGuy6100", gems: "3509" }
];
// Crafters Level 
const levelsData = [
  { rank: 1, name: "SphinxWraith", level: "91" },
  { rank: 2, name: "Kg_lcky_01", level: "48" },
  { rank: 3, name: "Perry3338", level: "44" },
  { rank: 4, name: "Jeremy2075/Darkshadow52195", level: "40" },
  { rank: 5, name: "Dharmaveer31", level: "39" },
  { rank: 6, name: "MythicalPanda30", level: "27" },
  { rank: 7, name: "Rehan2038", level: "22" },
  { rank: 8, name: "Kautilya3072", level: "16" },
  { rank: 9, name: "SAAD_KING_07726", level: "15" },
  { rank: 10, name: "Unknown", level: "N/A" }
];
// Playtime
const playtimeData = [
    { rank: 1, name: "SphinxWraith", playtime: "6454.9h" },
    { rank: 2, name: "Perry3338", playtime: "5064.1h" },
    { rank: 3, name: "gelacktic", playtime: "3841h" },
    { rank: 4, name: "DueBacon2007102", playtime: "3809.1h" },
    { rank: 5, name: "Creepyshorts", playtime: "3350.7h" },
    { rank: 6, name: "Itzomkar1232891", playtime: "3001h" },
    { rank: 7, name: "Kg_lcky_01", playtime: "2515.7h" },
    { rank: 8, name: "DRONZAR_OP", playtime: "2104h" },
    { rank: 9, name: "Vishal2697144", playtime: "2026.8h" },
    { rank: 10, name: "Darkshadow52195", playtime: "1678.7h" }
];
// Zombie and Wolf Slayer Exp 
const collectionsData = [
  {
    "name": "Zombie Slayer",
    "image": "img/revenant-horror.png",
    "players": [
      { "rank": 1, "name": "SphinxWraith", "score": "50M+" },
      { "rank": 2, "name": "HeGzoStRqFe", "score": "N/A" },
      { "rank": 3, "name": "DueBacon2007102", "score": "34M+" },
      { "rank": 4, "name": "Itzomkar1232891", "score": "N/A" },
      { "rank": 5, "name": "Kg_lcky_01", "score": "N/A" },
      { "rank": 6, "name": "DRONZAR_OP", "score": "25.6M+" },
      { "rank": 7, "name": "SoundClover8088", "score": "19.1M+" },
      { "rank": 8, "name": "Firegod174", "score": "17M+" },
      { "rank": 9, "name": "Herejefferson", "score": "15.5M+" },
      { "rank": 10, "name": "GRAVITY8303", "score": "15.5M+" }
    ]
  },
  {
    "name": "Wolf Slayer",
    "image": "img/fenrir-packmaster.png",
    "players": [
      { "rank": 1, "name": "SphinxWraith", "score": "10M+" },
      { "rank": 2, "name": "Aryaan045", "score": "10M+" },
      { "rank": 3, "name": "DueBacon2007102", "score": "10M+" },
      { "rank": 4, "name": "Herejefferson", "score": "N/A" },
      { "rank": 5, "name": "HeGzoStRqFe", "score": "N/A" },
      { "rank": 6, "name": "Itzomkar1232891", "score": "N/A" },
      { "rank": 7, "name": "Shakilbaby", "score": "N/A" },
      { "rank": 8, "name": "DRONZAR_OP", "score": "N/A" },
      { "rank": 9, "name": "Yogi_Ji_gaming", "score": "N/A" },
      { "rank": 10, "name": "Veldra5692", "score": "N/A" }
    ]
  }
];
// Damage
const damageData = [
  { rank: 1, name: "Unknown", damage: "N/A" },
  { rank: 2, name: "Unknown", damage: "N/A" },
  { rank: 3, name: "Unknown", damage: "N/A" },
  { rank: 4, name: "Unknown", damage: "N/A" },
  { rank: 5, name: "Unknown", damage: "N/A" },
  { rank: 6, name: "Unknown", damage: "N/A" },
  { rank: 7, name: "Unknown", damage: "N/A" },
  { rank: 8, name: "Unknown", damage: "N/A" },
  { rank: 9, name: "Unknown", damage: "N/A" },
  { rank: 10, name: "Unknown", damage: "N/A" }
];
// Networth
const networthData = [
  { rank: 1, name: "Unknown", networth: "N/A" },
  { rank: 2, name: "Unknown", networth: "N/A" },
  { rank: 3, name: "Unknown", networth: "N/A" },
  { rank: 4, name: "Unknown", networth: "N/A" },
  { rank: 5, name: "Unknown", networth: "N/A" },
  { rank: 6, name: "Unknown", networth: "N/A" },
  { rank: 7, name: "Unknown", networth: "N/A" },
  { rank: 8, name: "Unknown", networth: "N/A" },
  { rank: 9, name: "Unknown", networth: "N/A" },
  { rank: 10, name: "Unknown", networth: "N/A" }
];
// Pets
const petsData = {
    petsLevels: {
        name: "Pets Levels",
        scoreLabel: "Level",
        players: [
            { rank: 1, name: "Unknown", score: "N/A" },
            { rank: 2, name: "Unknown", score: "N/A" },
            { rank: 3, name: "Unknown", score: "N/A" },
            { rank: 4, name: "Unknown", score: "N/A" },
            { rank: 5, name: "Unknown", score: "N/A" },
            { rank: 6, name: "Unknown", score: "N/A" },
            { rank: 7, name: "Unknown", score: "N/A" },
            { rank: 8, name: "Unknown", score: "N/A" },
            { rank: 9, name: "Unknown", score: "N/A" },
            { rank: 10, name: "Unknown", score: "N/A" }
        ]
    },
    petsXP: {
        name: "Pets XP",
        scoreLabel: "XP",
        players: [
            { rank: 1, name: "Unknown", score: "N/A" },
            { rank: 2, name: "Unknown", score: "N/A" },
            { rank: 3, name: "Unknown", score: "N/A" },
            { rank: 4, name: "Unknown", score: "N/A" },
            { rank: 5, name: "Unknown", score: "N/A" },
            { rank: 6, name: "Unknown", score: "N/A" },
            { rank: 7, name: "Unknown", score: "N/A" },
            { rank: 8, name: "Unknown", score: "N/A" },
            { rank: 9, name: "Unknown", score: "N/A" },
            { rank: 10, name: "Unknown", score: "N/A" }
        ]
    },
    petScore: {
        name: "Pet Score",
        scoreLabel: "Score",
        players: [
            { rank: 1, name: "Unknown", score: "N/A" },
            { rank: 2, name: "Unknown", score: "N/A" },
            { rank: 3, name: "Unknown", score: "N/A" },
            { rank: 4, name: "Unknown", score: "N/A" },
            { rank: 5, name: "Unknown", score: "N/A" },
            { rank: 6, name: "Unknown", score: "N/A" },
            { rank: 7, name: "Unknown", score: "N/A" },
            { rank: 8, name: "Unknown", score: "N/A" },
            { rank: 9, name: "Unknown", score: "N/A" },
            { rank: 10, name: "Unknown", score: "N/A" }
        ]
    }
};
// Most Coins and Dropped Coins
const coinsData = {
    highestCoins: {
        name: "Highest Coins",
        scoreLabel: "Coins",
        players: [
            { rank: 1, name: "Unknown", score: "N/A" },
            { rank: 2, name: "Unknown", score: "N/A" },
            { rank: 3, name: "Unknown", score: "N/A" },
            { rank: 4, name: "Unknown", score: "N/A" },
            { rank: 5, name: "Unknown", score: "N/A" },
            { rank: 6, name: "Unknown", score: "N/A" },
            { rank: 7, name: "Unknown", score: "N/A" },
            { rank: 8, name: "Unknown", score: "N/A" },
            { rank: 9, name: "Unknown", score: "N/A" },
            { rank: 10, name: "Unknown", score: "N/A" }
        ]
    },
    droppedCoins: {
        name: "Dropped Coins",
        scoreLabel: "Coins",
        players: [
            { rank: 1, name: "Unknown", score: "N/A" },
            { rank: 2, name: "Unknown", score: "N/A" },
            { rank: 3, name: "Unknown", score: "N/A" },
            { rank: 4, name: "Unknown", score: "N/A" },
            { rank: 5, name: "Unknown", score: "N/A" },
            { rank: 6, name: "Unknown", score: "N/A" },
            { rank: 7, name: "Unknown", score: "N/A" },
            { rank: 8, name: "Unknown", score: "N/A" },
            { rank: 9, name: "Unknown", score: "N/A" },
            { rank: 10, name: "Unknown", score: "N/A" }
        ]
    }
};
// Skills
const skillsLeaderboards = {
    skillsXp: {
        name: "Skills XP",
        scoreLabel: "XP",
        players: [
            { rank: 1, name: "Unknown", score: "N/A" },
            { rank: 2, name: "Unknown", score: "N/A" },
            { rank: 3, name: "Unknown", score: "N/A" },
            { rank: 4, name: "Unknown", score: "N/A" },
            { rank: 5, name: "Unknown", score: "N/A" },
            { rank: 6, name: "Unknown", score: "N/A" },
            { rank: 7, name: "Unknown", score: "N/A" },
            { rank: 8, name: "Unknown", score: "N/A" },
            { rank: 9, name: "Unknown", score: "N/A" },
            { rank: 10, name: "Unknown", score: "N/A" }
        ]
    },
    averageSkill: {
        name: "Average Skill",
        scoreLabel: "Average",
        players: [
            { rank: 1, name: "SphinxWraith/David_R06", level: "51.7" },
            { rank: 2, name: "Moerderfisch", level: "50.7" },
            { rank: 3, name: "GRAVITY8303", level: "50.2" },
            { rank: 4, name: "AndyGamer024", level: "50" },
            { rank: 5, name: "Itzomkar1232891", level: "47.2" },
            { rank: 6, name: "DRONZAR_OP", level: "46.2" },
            { rank: 7, name: "Kg_lcky_01", level: "46" },
            { rank: 8, name: "Rehan2038", level: "42.3" },
            { rank: 9, name: "Perry3338", level: "39.5" },
            { rank: 10, name: "Kautilya3072", level: "36.2" }
        ]
    },
    skillsLevels: {
        name: "Skills Levels",
        scoreLabel: "Level",
        players: [
            { rank: 1, name: "Unknown", score: "N/A" },
            { rank: 2, name: "Unknown", score: "N/A" },
            { rank: 3, name: "Unknown", score: "N/A" },
            { rank: 4, name: "Unknown", score: "N/A" },
            { rank: 5, name: "Unknown", score: "N/A" },
            { rank: 6, name: "Unknown", score: "N/A" },
            { rank: 7, name: "Unknown", score: "N/A" },
            { rank: 8, name: "Unknown", score: "N/A" },
            { rank: 9, name: "Unknown", score: "N/A" },
            { rank: 10, name: "Unknown", score: "N/A" }
        ]
    }
};