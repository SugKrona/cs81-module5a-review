// Gustavo Corona
// hobbyTracker.js made July 13, 2025

// This array stores objects, with each object representing a single hobby session.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function determines the total duration across all recorded sessions.
function totalTime(log) {
  // This operation processes the session data to accumulate a single value.
  // It iterates through the sessions, incrementally adding each session's duration to a running total.
  return log.reduce((sum, session) => sum + session.minutes, 0);   // The final accumulated total duration is returned.
}

// This function identifies and collects all distinct hobbies from the log.
function uniqueHobbies(log) {
  // A transformation is applied to create a new collection containing only the hobby names.
  const names = log.map(entry => entry.hobby);
  // Unique hobby names are then extracted using a data structure that ensures no duplicates.
  return [...new Set(names)];   // The resulting collection of unique hobbies is returned.
}

// This function selects sessions that exceed a specified minimum duration.
function longSessions(log, minMinutes) {
  // A selection process creates a new collection, including only sessions that meet the duration criteria.
  return log.filter(entry => entry.minutes > minMinutes); // The filtered collection of longer sessions is returned.
}

// This function counts the number of sessions associated with a particular mood.
function countMood(log, moodType) {
// Sessions matching the specified mood are isolated from the main collection.
// The quantity of these isolated sessions is then determined.
  return log.filter(entry => entry.mood === moodType).length;
}

// These statements display the results of various data analyses to the console.
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// IMPROVEMENT SUGGESTION
// An improvement for the hobbyTracker.js code is to add a function that calculates the total time spent for each unique hobby. 
// This offers a practical and insightful analytical capability for users, directly leveraging the data to show specific time commitments per activity.

//Add Test Case 
//This will display all unique moods that are part of the of the hobbylog 
console.log("All unique moods:", [...new Set(hobbyLog.map(entry => entry.mood))]);
