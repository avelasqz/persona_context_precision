var all_stims =

  [{
    "type": "crit",
    "item": "bank_crit",
    "scenario": "person1 is walking quickly down the street and accidentally bumps into person2.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt": "Which phone is person2 looking at?"
  },
  {
    "type": "crit",
    "item": "shopping_crit",
    "scenario": "person1 and person2 are going shopping. person1 checks to see if the store is open.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt": "Which phone is person2 looking at?"
  },
  {
    "type": "crit",
    "item": "airport_crit",
    "scenario": "person1 and person2 are eating together. person1 is thinking about the rest of the day.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt": "Which phone is person2 looking at?"
  },
  {
    "type": "crit",
    "item": "premiere_crit",
    "scenario": "person1 and person2 have just finished a walk. They're going to see a new movie that night.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt": "Which phone is person2 looking at?"
  },
  {
    "type": "fill",
    "item": "cafe_fill",
    "scenario": "person2 and person1 are using a new app that gives real-time information about wait times at cafes.",
    //I've gotta be at work soon. Do any of those cafes have wait times less than 15 minutes?
    //Some of them do.
    "prompt": "Which phone is person2 looking at?"
  },
  {
    "type": "fill",
    "item": "party_fill",
    "scenario": "person2 and person1 are leaving the house to go to a party.",
    //We're already late, but we need something to take to the party. Are any of the stores within 10 miles of here?
    //Some of them are.
    "prompt": "Which phone is person2 looking at?"
  },
  {
    "type": "fill",
    "item": "haircut_fill",
    "scenario": "person2 is online looking at new hairdressers in the area. person1 notices.",
    //I'm thinking of going to get a haircut later. Do any of those salons have appointments open today?
    //Some of them do.
    "prompt": "Which phone is person2 looking at?"
  },
  {
    "type": "fill",
    "item": "flight_fill",
    "scenario": "person2 is booking a flight to visit family. person1 looks over at the screen.",
    //I'm thinking of taking a vacation sometime this year. Do any of those airlines fly to Hawaii?
    //Some of them do.
    "prompt": "Which phone is person2 looking at?"
  }]