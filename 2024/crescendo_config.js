var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Beach Bash",
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
      "defaultValue": "2025Minne",
      "required": "true"
    },
    { "name": "Match Level",
    "code": "l",
    "type": "level",
    "choices": {
      "qm": "Quals<br>",
      "pl": "Playoffs"
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
        "2129": "2129<br>",
        "2239.1": "2239.1(tau-cans)<br>",
        "2239.2": "2239.2(phi-nixes)<br>",
        "2450": "2450<br>",
        "2491": "2491<br>",
        "2502.1": "2502.1(A)<br>",
        "2502.2": "2502.2(B)<br>",
        "2502.3": "2502.3(C)<br>",
        "2549": "2549<br>",
        "7258": "7258<br>",
        "9157": "9157<br>"
      },
      "required":"true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "AutoLeaveStartZone",
      "type": "bool"
    },
    { "name": "Net Scores",
      "code": "NetScoresAuto",
      "type": "counter"
    },
    { "name": "Net Misses",
      "code": "NetMissesAuto",
      "type": "counter"
    },
    { "name": "Hoop Scores",
      "code": "HoopScoresAuto",
      "type": "counter"
    },
    {"name": "Hoops Misses",
      "code": "HoopMissesAuto",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Net Scores",
      "code": "NetScoresTele",
      "type": "counter"
    },
    { "name": "Net Misses",
      "code": "NetMissesTele",
      "type": "counter"
    },
    { "name": "Hoop Scores",
      "code": "HoopScoresTele",
      "type": "counter"
    },
    {"name": "Hoops Misses",
      "code": "HoopMissesTele",
      "type": "counter"
    }
  ],

  "endgame": [
    {"name": "End in Start Zone",
    "code": "EndedInStartZoneEndGame",
    "type": "bool"
    },
    {"name": "Sharks Collected",
    "code": "SharksCollectedTotal",
    "type": "counter"
    }
  ],
  "postmatch": [
    {"name": "Played Heavy Defense?",
    "code": "RobotPlayedHeavyDefenseInMatch",
    "type": "bool"
    },
    { "name": "Defense Rating",
      "code": "DefenseRatingInMatch",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)<br>"
      },
      "defaultValue": "0"
    },
    { "name": "Driver Skill",
      "code": "DriverSkillInMatch",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)<br>"
      },
      "defaultValue": "0"
    },
    { "name": "Speed Rating",
      "code": "SpeedRatingInMatch",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)<br>"
      },
      "defaultValue":"0"
    },
    {"name": "3+ Net Hits?",
    "code": "RobotHitTheNetExcessively",
    "type": "bool"
    },
    {"name": "4+ Shots From<br/>Out of Zone?",
    "code": "RobotShotFromTheStartZoneExcessively",
    "type": "bool"
    },
    { "name": "Died/Immobilized?",
      "code": "RobotDiedInMatch",
      "type": "bool"
    },
    { "name": "Almost tipped over?",
      "code": "RobotWasTippyInMatch",
      "type": "bool"
    },
    { "name": "Make good alliance<br/>partner?",
      "tooltip": "Would you want this robot?",
      "code": "RobotWouldMakeGoodPartner",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "CommentsAboutRobotFromMatch",
      "type": "text",
      "size": 15,
      "maxSize": 110
    }
  ]
}`;

