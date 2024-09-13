var config_data = `
{
  "enable_google_sheets": "true",
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023tnkn",
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
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Amp Misses",
      "code": "fad",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    {"name": "Speaker Misses",
      "code": "gas",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Amp Misses",
      "code": "fpd",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    {"name": "Speaker Misses",
      "code": "gds",
      "type": "counter"
    },
    { "name": "Amped Speaker Shots",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Amped Speaker Misses",
      "code": "tla",
      "type": "counter"
    },
    { "name": "Coopertition Bonus",
      "code": "jsd",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "c": "Climbed<br>",
        "f": "Failed Climb<br>",
        "n": "Nothing"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Rating",
      "code": "ds",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)<br>",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)"
      },
      "defaultValue": "0"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)<br>",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)"
      },
      "defaultValue": "0"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)<br>",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)"
      },
      "defaultValue":"0"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
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
    }
  ]
}`;
