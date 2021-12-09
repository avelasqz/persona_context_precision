var intro = 
  
// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, is any metro line running?
// Tyler: Some are.
// L1: running L2: closed L3: running

  [{
    "item": "intro",
    "img": "intro_bt.png",
    "img_phone": "phone_intro.png",
    // "questionintro": "Here's the picture!",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    // "introtophone": "And here are the phone pictures!",
    "question": "Which of these two phones is the one Tyler is looking at?",
    // "spaceforsolution": "Press Space for the solution",
    // "space_msg": "Here, the info on the screen reports that two lines are running; it thus fits what Tyler is saying. In your response, you'd therefore select the picture with the visible screen. But if Tyler had said something like 'They are all running' you'd have instead selected the picture of the flipped phone, since the info on the screen would not have fitted what Tyler said.",
    // "spacetostart": "Press Space to start the experiment!"
  }]

var all_training =
    
// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, what metro lines are running?
// Tyler: None are running.
// L1: running L2: closed L3: running

  [{
    "item": "training1",
    "speech": "training1_bt.png",
    "phone": "phone_training1.png",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    "question": "Which of these two phones is the one Tyler is looking at?",
    "phone_f": "phone_training1_f.png",
    "message_f": "MMM, ARE YOU SURE?",
    "phone_j": "phone_training1_j.png",
    "message_j": "GOOD JOB!"
  },

// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, what metro lines are running?
// Tyler: They are all running.
// L1: running L2: running L3: running

  {
    "item": "training2",
    "speech": "training2_bt.png",
    "phone": "phone_training2.png",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    "question": "Which of these two phones is the one Tyler is looking at?",
    "phone_f": "phone_training2_f.png",
    "message_f": "GOOD JOB!",
    "phone_j": "phone_training2_j.png",
    "message_j": "MMM, ARE YOU SURE?"
  },

// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, are any of the metro lines running?
// Tyler: Some of them are.
// L1: closed L2: closed L3: closed

  {
    "item": "training3",
    "speech": "training3_bt.png",
    "phone": "phone_training3.png",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    "question": "Which of these two phones is the one Tyler is looking at?",
    "phone_f": "phone_training3_f.png",
    "message_f": "MMM, ARE YOU SURE?",
    "phone_j": "phone_training3_j.png",
    "message_j": "GOOD JOB!"
  }]






// data for all stimuli in the form of a list of JavaScript objects
// the stimuli below are organized as follows: first the time contexts, then the cost contexts, then the distance contexts; inside each of these, there are eight scenarios; for each scenario, there are eight items, due to the 2x4 (persona x match conditions) design. So, the first 64 stimuli are time, the second 64 are cost, and the third 64 are distance.

var all_stims =
//Time

// 1. Context:fEva/Rachelg and fAlex/Arthurg want to go to the movies. Eva’s phone is dead
// and she doesn’t want to lose track of time.
// fEva/Rachelg : Do you have the time?
// fAlex/Arthurg: It’s 3.
// Match: 3:00; NNM: 2:58; NM: 2:53; MisMatch: 1:12

  [{
    "domain": "time",
    "item": "movies",
    "scenario_ra": "Rachel and Arthur want to go to the movies. Rachel's phone is dead and she doesn't want to lose track of time.",
    "scenario_ea": "Eva and Alex want to go to the movies. Eva's phone is dead and she doesn't want to lose track of time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "question_ea": "Which phone is Alex looking at in the picture?"
    //created from these: interlocutors (from persona run in init), speech, phone, the specific scenario, the specific question; note that .png will be added in each trial.
  },

// 2. Context:fEva/Rachelg and fAlex/Arthurg want to drop by a friend’s house. Her phone is
// dead, so she asks for the time.
// fEva/Rachelg : Do you have the time?
// fAlex/Arthurg: It’s 2:30.
// Match: 2:30; NNM: 2:32; NM: 2:37; MisMatch: 7:55

  {
    "domain": "time",
    "item": "friendshouse",
    "scenario_ra": "Rachel and Arthur want to drop by a friend's house. Her phone is dead, so she asks for the time.",
    "scenario_ea": "Eva and Alex want to drop by a friend's house. Her phone is dead, so she asks for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 3. Context: fAlex/Arthurg and fEva/Rachelg are going to a friend’s place for dinner. fEva/Rachelg
// needs to first run some errands before going.
// fEva/Rachelg : What’s the time?
// fAlex/Arthurg: It’s 5.
// Match: 5:00; NNM: 5:03; NM: 5:09; MisMatch: 9:55

  {
    "domain": "time",
    "item": "friendsdinner",
    "scenario_ra": "Arthur and Rachel are going to a friend's place for dinner. Rachel needs to first run some errands before going.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva are going to a friend's place for dinner. Eva needs to first run some errands before going.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 4. Context: fEva/Rachelg and fAlex/Arthurg are going to have a picnic, but fEva/Rachelg
// needs to stop at home first.
// fEva/Rachelg : Hey, do you have the time?
// fAlex/Arthurg: It’s 5:30.
// Match: 5:30; NNM: 5:27; NM: 5:21; MisMatch: 11:14

  {
    "domain": "time",
    "item": "picnic",
    "scenario_ra": "Rachel and Arthur are going to have a picnic, but Rachel needs to stop at home first.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are going to have a picnic, but Eva needs to stop at home first.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 5. Context: fEva/Rachelg and fAlex/Arthurg want to go for a walk. fEva/Rachelg is debating
// whether it’d be better to grab some food before.
// fEva/Rachelg : What’s the time?
// fAlex/Arthurg: It’s 11:30.
// Match: 11:30; NNM: 11:34; NM: 11:41; MisMatch: 4:11

  {
    "domain": "time",
    "item": "walk",
    "scenario_ra": "Rachel and Arthur want to go for a walk. Rachel is debating whether it'd be better to grab some food before.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex want to go for a walk. Eva is debating whether it'd be better to grab some food before.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 6. Context: fEva/Rachelg would like to get home before it’s dark. Her phone is dead, so she
// asks fAlex/Arthurg for the time.
// fEva/Rachelg : Hey, do you have the time?
// fAlex/Arthurg: It’s 6:30.
// Match: 6:30; NNM: 6:26; NM: 6:19; MisMatch: 4:11

  {
    "domain": "time",
    "item": "beforedark",
    "scenario_ra": "Rachel would like to get home before it's dark. Her phone is dead, so she asks Arthur for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva would like to get home before it's dark. Her phone is dead, so she asks Alex for the time.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 7. Context: fEva/Rachelg would like to take a walk at the park before it gets dark. She asks
// fAlex/Arthurg for the time.
// fEva/Rachelg : What’s the time?
// fAlex/Arthurg: It’s 7.
// Match: 7:00; NNM: 7:05; NM: 7:13; MisMatch: 2:11

  {
    "domain": "time",
    "item": "walkinthepark",
    "scenario_ra": "Rachel would like to take a walk at the park before it gets dark. She asks Arthur for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva would like to take a walk at the park before it gets dark. She asks Alex for the time.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 8. Context: It’s sunny outside, and fEva/Rachelg would like to go for a walk. She asks
// fAlex/Arthurg for the time.
// fEva/Rachelg : What’s the time?
// fAlex/Arthurg: It’s 4.
// Match: 4:00; NNM: 3:55; NM: 3:47; MisMatch: 9:10

  {
    "domain": "time",
    "item": "sunny",
    "scenario_ra": "It's sunny outside, and Rachel would like to go for a walk. She asks Arthur for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "It's sunny outside, and Eva would like to go for a walk. She asks Alex for the time.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },


//Cost

// 1. Context:fEva/Rachelg and fAlex/Arthurg want to go visit their cousins for Thanksgiving.
// fEva/Rachelg : So, how much is a roundtrip ticket?
// fAlex/Arthurg: It’s $300.
// Match: f$300.03/300.00g; NNM: 295.03; NM: $288.03; MisMatch: $788.03

  {
    "domain": "cost",
    "item": "cousinsThanksgiving",
    "scenario_ra": "Rachel and Arthur want to go visit their cousins for Thanksgiving.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex want to go visit their cousins for Thanksgiving.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 2. Context: fAlex/Arthurg and fEva/Rachelg need to book a hotel room for a night. They’ve
// considered different options.
// fEva/Rachelg : So, how much is the cheapest place?
// fAlex/Arthurg: It’s $200.
// Match: f$200.05/200.00g; NNM: 205.05; NM: $212.05; MisMatch: $678.05

  {
    "domain": "cost",
    "item": "hotelroom",
    "scenario_ra": "Arthur and Rachel need to book a hotel room for a night. They've considered different options.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva need to book a hotel room for a night. They've considered different options.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 3. Context: fAlex/Arthurg and fEva/Rachelg need to order food for an event. The manager
// just sent their quote.
// fEva/Rachelg : So, how much is the quote?
// fAlex/Arthurg: It’s $300.
// Match: f$300.04/300.00g; NNM: 306.04; NM: $314.04; MisMatch: $760.04

  {
    "domain": "cost",
    "item": "food",
    "scenario_ra": "Arthur and Rachel need to order food for an event. The manager just sent their quote.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva need to order food for an event. The manager just sent their quote.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 4. Context: fEva/Rachelg and fAlex/Arthurg are planning a trip to visit a friend.
// fEva/Rachelg : How much would it cost to take a train?
// fAlex/Arthurg: It’s $200.
// Match: f$200.09/200.00g; NNM: 194.09; NM: $186.09; MisMatch: $500.09

  {
    "domain": "cost",
    "item": "trip",
    "scenario_ra": "Rachel and Arthur are planning a trip to visit a friend.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are planning a trip to visit a friend.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 5. Context: fEva/Rachelg and fAlex/Arthurg are looking for a one-way plane ticket.
// fEva/Rachelg : How much is the cheapest flight?
// fAlex/Arthurg: It’s $300.
// Match: f$300.03/200.00g; NNM: 292.03; NM: $284.03; MisMatch: $788.03

  {
    "domain": "cost",
    "item": "planeticket",
    "scenario_ra": "Rachel and Arthur are looking for a one-way plane ticket.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are looking for a one-way plane ticket.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 6. Context: fEva/Rachelg and fAlex/Arthurg have been invited to a wedding.
// fEva/Rachelg : So, how much is the cheapest place?
// fAlex/Arthurg: It’s $200.
// Match: f$200.05/200.00g; NNM: 208.05; NM: $216.05; MisMatch: $492.05

  {
    "domain": "cost",
    "item": "weddingcost",
    "scenario_ra": "Rachel and Arthur have been invited to a wedding.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to a wedding.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 7. Context: fEva/Rachelg would like to buy a new couch. She has a specific type in mind, so
// she asks fAlex/Arthurg to look up the price.
// fEva/Rachelg : So, how much does it cost?
// fAlex/Arthurg: It’s $300.
// Match: f$300.04/300.00g; NNM: 309.04; NM: $318.04; MisMatch: $760.04

  {
    "domain": "cost",
    "item": "couch",
    "scenario_ra": "Rachel and Arthur would like to buy a new couch. She has a specific type in mind, so she asks Arthur to look up the price.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex would like to buy a new couch. She has a specific type in mind, so she asks Alex to look up the price.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 8. Context: fEva/Rachelg and fAlex/Arthurg have been invited to a friend reunion. They’re
// considering driving there.
// fEva/Rachelg : How much would it cost to rent a car for three days?
// fAlex/Arthurg: It’s $200.
// Match: f$200.09/200.00g; NNM: 191.09; NM: $182.09; MisMatch: $500.04

  {
    "domain": "cost",
    "item": "reunioncost",
    "scenario_ra": "Rachel and Arthur have been invited to a friend reunion. They're considering driving there.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to a friend reunion. They're considering driving there.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },


//Distance

// 1. Context:fEva/Rachelg and fAlex/Arthurg have been invited to spend Thanksgiving with
// Alex’s aunt.
// fEva/Rachelg : How far out does she live?
// fAlex/Arthurg: 200 miles.
// Match: f200.2/300.0g; NNM: 191.2; NM: 182.2; MisMatch: 688.2

  {
    "domain": "distance",
    "item": "auntThanksgiving",
    "scenario_ra": "Rachel and Arthur have been invited to spend Thanksgiving with Arthur's aunt.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to spend Thanksgiving with Alex's aunt.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 2. Context: Elena, a friend of fAlex/Arthurg and Eva, is in the US for a conference. fAlex/Arthurg
// and fEva/Rachelg want to visit her.
// fEva/Rachelg : How far out does she live?
// fAlex/Arthurg: It’s 150 miles from here.
// Match: f150.2/150.0g; NNM: 155.2; NM: 162.2; MisMatch: 542.2

  {
    "domain": "distance",
    "item": "elena",
    "scenario_ra": "Elena, a friend of Arthur and Rachel, is in the US for a conference. Arthur and Rachel want to visit her.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Elena, a friend of Alex and Eva, is in the US for a conference. Alex and Eva want to visit her.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 3. Context: fAlex/Arthurg and fEva/Rachelg are out of town. They are trying to figure out a
// good spot for a camping trip.
// fEva/Rachelg : So, how far is the closest state park?
// fAlex/Arthurg: It’s 250 miles away.
// Match: f250.3/250.0g; NNM: 256.3; NM: 264.3; MisMatch: 712.3

  {
    "domain": "distance",
    "item": "camping",
    "scenario_ra": "Arthur and Rachel are out of town. They are trying to figure out a good spot for a camping trip.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva are out of town. They are trying to figure out a good spot for a camping trip.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 4. Context: fEva/Rachelg and fAlex/Arthurg are planning a trip to visit a friend who lives in
// the backcountry.
// fEva/Rachelg : How far is the closest airport?
// fAlex/Arthurg: It’s 300 miles away.
// Match: f300.2/300.0g; NNM: 294.2; NM: 286.2; MisMatch: 610.2

  {
    "domain": "distance",
    "item": "backcountry",
    "scenario_ra": "Rachel and Arthur are planning a trip to visit a friend who lives in the backcountry.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are planning a trip to visit a friend who lives in the backcountry.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 5. Context: fEva/Rachelg has been invited to a friend reunion. She’s considering driving there.
// fEva/Rachelg : Hey, can you check how far it is from here?
// fAlex/Arthurg: It’s 200 miles.
// Match: f200.1/200.0g; NNM: 192.1; NM: 186.1; MisMatch: 692.1

  {
    "domain": "distance",
    "item": "reuniondistance",
    "scenario_ra": "Rachel has been invited to a friend reunion. She's considering driving there.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva has been invited to a friend reunion. She's considering driving there.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 6. Context: fAlex/Arthurg and fEva/Rachelg want to go apple picking, but they don’t know
// much about what their area offers.
// fEva/Rachelg : Hey, how far is the closest orchard?
// fAlex/Arthurg: It’s 300 miles away.
// Match: f300.1/300.0g; NNM: 308.1; NM: 316.1; MisMatch: 658.1

  {
    "domain": "distance",
    "item": "apples",
    "scenario_ra": "Arthur and Rachel want to go apple picking, but they don't know much about what their area offers.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva want to go apple picking, but they don't know much about what their area offers.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 7. Context: fEva/Rachelg and fAlex/Arthurg have been invited to a wedding. They’re figuring
// out the logistics.
// fEva/Rachelg : So, how far is the venue?
// fAlex/Arthurg: It’s 300 miles away.
// Match: f300.2/300.0g; NNM: 309.2; NM: 318.2; MisMatch: 767.2

  {
    "domain": "distance",
    "item": "weddingdistance",
    "scenario_ra": "Rachel and Arthur have been invited to a wedding. They're figuring out the logistics.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to a wedding. They're figuring out the logistics.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },

// 8. Context: fEva/Rachelg and fAlex/Arthurg want to go visit a friend and need to figure out
// how far she lives from where they are.
// fEva/Rachelg : So, how far is her hometown?
// fAlex/Arthurg: It’s 300 miles away.
// Match: f300.1/300.0g; NNM: 295.1; NM: 288.1; MisMatch: 588.1

  {
    "domain": "distance",
    "item": "friendvisit",
    "scenario_ra": "Rachel and Arthur want to go visit a friend and need to figure out how far she lives from where they are.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex want to go visit a friend and need to figure out how far she lives from where they are.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  }]




//FILLERS

var all_fills =

// Context: It's snowing, and Becky and Tyler are figuring out if public transit has been impacted.
// Becky : Hey, are any of the lines delayed?
// Tyler: Some of them are.
// L1: delayed L2: delayed L3: on time

  [
  // [{
  //   "item": "snow",
  //   "interlocutors": "bt.png",
  //   "speech": "snow_bt.png",
  //   "phone": "phone_snow.png",
  //   "scenario": "It's snowing, and Becky and Tyler are figuring out if public transit has been impacted.",
  //   "question": "Which phone is Tyler looking at in the picture?"
  // },

  {
    "domain": "filler",
    "item": "snow",
    // "interlocutors": "bt.png",
    "condition": "screen_true",
    "scenario": "It's snowing, and Becky and Tyler are figuring out if public transit has been impacted.",
    "question": "Which phone is Tyler looking at in the picture?"
    // "speech": "snow_bt.png",
    // "phone": "phone_snow.png",
  },

// Context: Becky and Tyler are visiting a friend downstate and want to avoid paying tolls.
// Becky : Hey, do we have to pay tolls?
// Tyler: Some routes are toll free.
// Route 1: free Route 2: toll Route 3: free

  {
    "domain": "filler",
    "item": "downstate",
    "condition": "screen_false",
    "scenario": "Becky and Tyler are visiting a friend downstate and want to avoid paying tolls.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to go for a bike ride in a park out of town.
// Becky : Hey, is it possible to take our bike on the train?
// Tyler: It's possible on some trains.
// Train 1: yes Train 2: yes Train 3: no

  {
    "domain": "filler",
    "item": "bikeride",
    "condition": "screen_true",
    "scenario": "Becky and Tyler want to go for a bike ride in a park out of town.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are considering some hotels for a weekend out of town.
// Becky : Are any of these hotels pet-friendly?
// Tyler: Some of them are.
// Hotel 1: yes Hotel 2: yes Hotel 3: no

  {
    "domain": "filler",
    "item": "weekendhotel",
    "condition": "screen_true",
    "scenario": "Becky and Tyler are considering some hotels for a weekend out of town.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler have been recommended three restaurants.
// Becky : Are any of these restaurants vegan friendly?
// Tyler: Some of them are.
// Rest 1: yes Rest 2: no Rest 3: yes

  {
    "domain": "filler",
    "item": "threerestaurants",
    "condition": "screen_true",
    "scenario": "Becky and Tyler have been recommended three restaurants.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler just moved to a new city. They have a list of cafes they want to try.
// Becky : Do these cafes have wi-fi?
// Tyler: Some of them do.
// Cafe 1: yes Cafe 2: no Cafe 3: yes

  {
    "domain": "filler",
    "item": "cafes",
    "condition": "screen_true",
    "scenario": "Becky and Tyler just moved to a new city. They have a list of cafes they want to try.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Tyler is looking to cook something new and has a few recipes in mind.
// Becky : Are these recipes gluten free?
// Tyler: Some of them are.
// Rec 1: yes Rec 2: yes Rec 3: no

  {
    "domain": "filler",
    "item": "recipes",
    "condition": "screen_true",
    "scenario": "Tyler is looking to cook something new and has a few recipes in mind.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are on a vacation trip and want to go to the beach.
// Becky : Do any of these beaches allow smoking?
// Tyler: Some of them do.
// Beach 1: yes Beach 2: yes Beach 3: no

  {
    "domain": "filler",
    "item": "beach",
    "condition": "screen_true",
    "scenario": "Becky and Tyler are on a vacation trip and want to go to the beach.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to book a hotel for a business trip.
// Becky : Do any of these hotels have cable TV?
// Tyler: Some of them do.
// Hotel 1: yes Hotel 2: no Hotel 3: yes

  {
    "domain": "filler",
    "item": "business",
    "condition": "screen_true",
    "scenario": "Becky and Tyler want to book a hotel for a business trip.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for AirBnB apartments.
// Becky : Do any of these have in-unit wash and dry?
// Tyler: Some of them do.
// Apt 1: yes Apt 2: yes Apt 3: no

  {
    "domain": "filler",
    "item": "airbnb",
    "condition": "screen_true",
    "scenario": "Becky and Tyler are looking for AirBnB apartments.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to go on a 3 day backpacking trip.
// Becky : Do these parks allow camping?
// Tyler: Some of them do.
// Park 1: yes Park 2: yes Park 3: no

  {
    "domain": "filler",
    "item": "backpacking",
    "condition": "screen_true",
    "scenario": "Becky and Tyler want to go on a 3 day backpacking trip.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to take their grandpa fishing.
// Becky : Are these lakes wheelchair accessible?
// Tyler: Some of them are.
// Lake 1: no Lake 2: no Lake 3: no

  {
    "domain": "filler",
    "item": "grandpa",
    "condition": "screen_false",
    "scenario": "Becky and Tyler want to take their grandpa fishing.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are apartment hunting. They're visiting three places today.
// Becky : Do these apartments have a parking garage?
// Tyler: Some of them do.
// Apt 1: no Apt 2: no Apt 3: no

  {
    "domain": "filler",
    "item": "apartments",
    "condition": "screen_false",
    "scenario": "Becky and Tyler are apartment hunting. They're visiting three places today.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to go camping on a lake. They have several options.
// Becky : Can you fish in these lakes?
// Tyler: You can on some of them.
// Lake 1: no Lake 2: no Lake 3: no

  {
    "domain": "filler",
    "item": "lake",
    "condition": "screen_false",
    "scenario": "Becky and Tyler want to go camping on a lake. They have several options.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are browsing options for eating outside.
// Becky : Do any of these restaurants allow smoking?
// Tyler: Some of them do.
// Rest 1: no Rest 2: no Rest 3: no

  {
    "domain": "filler",
    "item": "eating",
    "condition": "screen_false",
    "scenario": "Becky and Tyler are browsing options for eating outside.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for tickets for a game.
// Becky : Do any of these sectors have tickets left?
// Tyler: Some of them do.
// Sector 1: no Sector 2: no Sector 3: no

  {
    "domain": "filler",
    "item": "tickets",
    "condition": "screen_false",
    "scenario": "Becky and Tyler are looking for tickets for a game.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for a venue for an event.
// Becky : Are these venues available for our dates?
// Tyler: Some of them are.
// Venue 1: yes Venue 2: yes Venue 3: yes

  {
    "domain": "filler",
    "item": "event",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler are looking for a venue for an event.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are trying to rent a van.
// Becky : Do any of these rentals have a van available?
// Tyler: Some of them do.
// Rent 1: yes Rent 2: yes Rent 3: yes

  {
    "domain": "filler",
    "item": "van",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler are looking for a venue for an event.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for hotels for a conference out of state.
// Becky : Do any of these hotels have a gym?
// Tyler: Some of them do.
// Hotel 1: yes Hotel 2: yes Hotel 3: yes

  {
    "domain": "filler",
    "item": "conference",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler are looking for hotels for a conference out of state.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler have been recommended some restaurants in the area.
// Becky : Do any of these restaurants serve Italian food?
// Tyler: Some of them do.
// R1: yes R2: yes R3: yes

  {
    "domain": "filler",
    "item": "arearestaurants",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler have been recommended some restaurants in the area.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are visiting a new town. There are some bars nearby.
// Becky : Do any of these bars have happy hour?
// Tyler: Some of them do.
// Bar 1: yes Bar 2: yes Bar 3: yes

  {
    "domain": "filler",
    "item": "bars",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler are visiting a new town. There are some bars nearby.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are planning a trip out of town.
// Becky : Do these trains have wi-fi?
// Tyler: Some of them do.
// Train 1: yes Train 2: yes Train 3: yes

  {
    "domain": "filler",
    "item": "outoftown",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler are planning a trip out of town.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for a new apartment. They narrowed down their list to three.
// Becky : Do any of these have in-unit wash and dry?
// Tyler: Some of them do.
// Apt 1: yes Apt 2: yes Apt 3: yes

  {
    "domain": "filler",
    "item": "newapartment",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler are looking for a new apartment. They narrowed down their list to three.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking to buy a car. They have three options in mind.
// Becky : Are any of these cars hybrid?
// Tyler: Some of them are.
// Car 1: yes Car 2: yes Car 3: yes

  {
    "domain": "filler",
    "item": "car",
    "condition": "screen_underinf",
    "scenario": "Becky and Tyler are looking to buy a car. They have three options in mind.",
    "question": "Which phone is Tyler looking at in the picture?"
  }]