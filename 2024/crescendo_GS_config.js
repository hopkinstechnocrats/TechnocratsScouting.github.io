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
      "gsCol": "ScouterInitials",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "gsCol": "EventCode",
      "type": "event",
      "defaultValue": "2023tnkn",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "gsCol": "MatchLevel",
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
      "gsCol": "Match#",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "gsCol": "Robot#",
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
      "gsCol": "Team#",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "gsCol": "LeaveStartZone",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "gsCol": "AmpScoresAuto",
      "type": "counter"
    },
    { "name": "Amp Misses",
      "code": "fad",
      "gsCol": "AmpMissesAuto",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "gsCol": "SpeakerScoresAuto",
      "type": "counter"
    },
    {"name": "Speaker Misses",
      "code": "gas",
      "gsCol": "SpeakerMissesAuto",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "gsCol": "AmpScoresTeleop",
      "type": "counter"
    },
    { "name": "Amp Misses",
      "code": "fad",
      "gsCol": "AmpMissesTeleop",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "gsCol": "SpeakerScoresTeleop",
      "type": "counter"
    },
    {"name": "Speaker Misses",
      "code": "gas",
      "gsCol": "SpeakerMissesTeleop",
      "type": "counter"
    },
    { "name": "Amped Speaker Shots",
      "code": "tta",
      "gsCol": "AmpedSpeakerShots",
      "type": "counter"
    },
    { "name": "Amped Speaker Misses",
      "code": "tla",
      "gsCol": "AmpedSpeakerMisses",
      "type": "counter"
    },
    { "name": "Coopertition Bonus",
      "code": "jsd",
      "gsCol": "CoopertitionBonus",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "gsCol": "FinalStatus",
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
    { "name": "Driver Skill",
      "code": "ds",
      "gsCol": "DriverSkill",
      "type": "radio",
      "choices": {
        "v": "5(Very Effective)<br>",
        "t": "4<br>",
        "a": "3(Average)<br>",
        "g": "2<br>",
        "n": "1(Not Effective)<br>",
        "x": "0(Not Observed)"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "gsCol": "DefenseRating",
      "type": "radio",
      "choices": {
        "v": "5(Very Effective)<br>",
        "t": "4<br>",
        "a": "3(Average)<br>",
        "g": "2<br>",
        "n": "1(Not Effective)<br>",
        "x": "0(Not Observed)"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "gsCol": "SpeedRating",
      "type": "radio",
      "choices": {
        "v": "5(Very Effective)<br>",
        "t": "4<br>",
        "a": "3(Average)<br>",
        "g": "2<br>",
        "n": "1(Not Effective)<br>",
        "x": "0(Not Observed)"
      },
      "defaultValue":"x"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "gsCol": "Died/Immobilized",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "gsCol": "Tippy",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "gsCol": "MakeGoodPartner",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "gsCol": "Comment",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
