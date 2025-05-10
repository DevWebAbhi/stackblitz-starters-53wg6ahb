document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Function to display the count on the webpage
  function displayCount(count) {
    const countElement = document.getElementById('count-display');
    if (countElement) {
      countElement.textContent = `Count: ${count}`;
    }
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2. If the cookie exists, increment the value and update the cookie
  if (count !== null) {
    count = parseInt(count, 10) + 1;
  } else {
    // 3. If the cookie does not exist, create it and set the value to 0
    count = 0;
  }

  // Update the cookie with the new count value
  setCookie('count', count, 7); // Cookie expires in 7 days

  // 4. Display the count on the webpage
  displayCount(count);
});
