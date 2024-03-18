export function getCurrentDate() {
  // Get current date object
  const currentDate = new Date();

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, month, date, and year
  const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const month = monthNames[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Construct the string
  const dateString = `${day}, ${month} ${date}, ${year}`;

  // Display the current date
  return dateString;
}

// Call the function to display the current date
// getCurrentDate();
