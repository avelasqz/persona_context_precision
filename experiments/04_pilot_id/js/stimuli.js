var all_stims =

  [{
    "type": "crit",
    "item": "bank_crit",
    "scenario": "person1 is walking quickly down the street and accidentally bumps into person2.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt1": "What is the <b>earliest</b> time you think person2 could have seen on a watch or phone when telling person1 that it's TIME?",
    "prompt2": "What is the <b>latest</b> time you think person2 could have seen?"
  },
  {
    "type": "crit",
    "item": "shopping_crit",
    "scenario": "person1 and person2 are going shopping. person1 checks to see if the store is open.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt1": "What is the <b>earliest</b> time you think person2 could have seen on a watch or phone when telling person1 that it's TIME?",
    "prompt2": "What is the <b>latest</b> time you think person2 could have seen?"
  },
  {
    "type": "crit",
    "item": "airport_crit",
    "scenario": "person1 and person2 are eating together. person1 is thinking about the rest of the day.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt1": "What is the <b>earliest</b> time you think person2 could have seen on a watch or phone when telling person1 that it's TIME?",
    "prompt2": "What is the <b>latest</b> time you think person2 could have seen?"
  },
  {
    "type": "crit",
    "item": "premiere_crit",
    "scenario": "person1 and person2 have just finished a walk. They're going to see a new movie that night.",
    // "prompt1": "By  saying 'TIME', what is the earliest time you think person2 could have meant?",
    // "prompt2": "What is the latest time you think person2 could have meant?"
    "prompt1": "What is the <b>earliest</b> time you think person2 could have seen on a watch or phone when telling person1 that it's TIME?",
    "prompt2": "What is the <b>latest</b> time you think person2 could have seen?"
  },
  {
    "type": "fill",
    "item": "phone_fill",
    "scenario": "person2 has been put on hold on the phone. person1 walks in.",
    //How long have you been on hold?
    //MINUTES
    // "prompt1": "By saying 'MINUTE minutes', what is the <b>least</b> amount of time, in minutes, person2 could have meant?",
    // "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have meant?"
    "prompt1": "What is the <b>least</b> amount of time, in minutes, person2 could have been waiting by telling person1 'MINUTE minutes'?",
    "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have been waiting?"
  },
  {
    "type": "fill",
    "item": "store_fill",
    "scenario": "person2 is waiting in line at the store. person1 walks up.",
    //Hey, I'm kind of in a hurry, maybe I should come back later. How long have you been waiting in line?
    //MINUTES
    // "prompt1": "By saying 'MINUTE minutes', what is the <b>least</b> amount of time, in minutes, person2 could have meant?",
    // "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have meant?"
    "prompt1": "What is the <b>least</b> amount of time, in minutes, person2 could have been waiting by telling person1 'MINUTE minutes'?",
    "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have been waiting?"
  },
  {
    "type": "fill",
    "item": "coffee_fill",
    "scenario": "person2 is waiting for coffee at the counter in a cafe. person1 comes in from outside.",
    //Oh no, I've gotta be at work soon, I wonder if I should order. How long have you been waiting for your drink?
    //MINUTES
    // "prompt1": "By saying 'MINUTE minutes', what is the <b>least</b> amount of time, in minutes, person2 could have meant?",
    // "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have meant?"
    "prompt1": "What is the <b>least</b> amount of time, in minutes, person2 could have been waiting by telling person1 'MINUTE minutes'?",
    "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have been waiting?"
  },
  {
    "type": "fill",
    "item": "restaurant_fill",
    "scenario": "person2 is waiting to be seated in a restaurant. person1 steps through the door next to person2.",
    //How long have you been waiting for a table?
    //MINUTES
    // "prompt1": "By saying 'MINUTE minutes', what is the <b>least</b> amount of time, in minutes, person2 could have meant?",
    // "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have meant?"
    "prompt1": "What is the <b>least</b> amount of time, in minutes, person2 could have been waiting by telling person1 'MINUTE minutes'?",
    "prompt2": "What is the <b>greatest</b> amount of time, in minutes, person2 could have been waiting?"
  }]