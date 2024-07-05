document.addEventListener("DOMContentLoaded", () => {
  const currentTime = document.querySelector('[data-testid="currentTimeUTC"]');
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  function updateTimeAndDay() {
    const now = new Date();
    currentTime.textContent = now.toUTCString().split(" ")[4];
    currentDay.textContent = now.toLocaleString("en-US", { weekday: "long" });
  }

  setInterval(updateTimeAndDay, 1000);
  updateTimeAndDay();
});
