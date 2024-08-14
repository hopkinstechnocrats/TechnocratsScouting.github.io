var config_data = `
{
  "dataFormat": "tsv",
  "title": "ScoutingPass2024",
    "page_title": "Testing again",
  "checkboxAs": "10",
  "prematch": [
    { "name": "scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024mndu",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Are you ready?",
      "code": "as",
      "type": "robot",
      "choices": {
      "y": "Yes",
      "Y": "Yes!"
     },
     "required": "true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "counter"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"  
    },
    { "name": "Amp Misses",
      "code": "oss",
      "type": "counter"
    },
    { "name": "Speaker scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Speaker Misses",
      "code": "tqs",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Amp Misses",
      "code": "tks",
      "type": "counter"
    },

    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Speaker Misses",
      "code": "tms",
      "type": "counter"
    },
    { "name": "Times Amplified",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Amplified Speaker Scores",
      "code": "tds",
      "type": "counter"
    },
    { "name": "Amplified Speaker Misses",
      "code": "tis",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted<br>",
        "RRR": "LOSE"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Stage Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "Parked": "Parked (No Climb Attempt)<br>",
        "Onstage": "Onstage<br>",
        "Spotlit": "Onstage (Spotlit)<br>",
        "Harmony(2)": "Harmony(2 bots)<br>",
        "Harmony(3)": "Harmony(3 bots)<br>",
        "Harmony Spotlit(2)": "Harmony+Spotlit(2 bots)<br>",
        "Harmony Spotlit(3)": "Harmony+Spotlit(3 bots)<br>",
        "ClimbFail": "Failed Climb Attempt<br>",
        "NoPark": "Didn't Park"
      },
      "defaultValue": "NoPark"
    },
    { "name": "High Notes Landed",
      "code": "hnt",
      "type": "counter"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "1(Not Effective)<br>",
        "a": "2<br>",
        "v": "3(Very Effective)<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "1(Below Average)<br>",
        "a": "2<br>",
        "e": "3(above average)<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Evasion Rating",
      "code": "ldr",
      "type": "radio",
      "choices": {
        "b": "1(Not Effective)<br>",
        "a": "2<br>",
        "e": "3(Very Effective)<br>",
        "x": "Did not encounter defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3 (fast)"
      },
      "defaultValue": "2"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Notes (>2)",
      "code": "dn",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    },
    { "name": "Note Intake",
      "code": "gr",
      "type": "radio",
      "choices": {
        "0": "Did not use Intake<br>",
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3 (smooth)"
      },
      "defaultValue":"0"
    }
  ]
}`;
