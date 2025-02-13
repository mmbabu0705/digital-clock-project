function updateClock() {
    const now = new Date();

    // Get time components
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12; 
    hours = hours.toString().padStart(2, "0");

    // Get date components
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    let dateString = now.toLocaleDateString(undefined, options);

    // Update clock and date elements
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("date").innerText = dateString;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
