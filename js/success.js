// Get data from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const date = urlParams.get('date');
const request = urlParams.get('request');

// Display the voucher information
const displayName = document.getElementById('displayName');
const displayDate = document.getElementById('displayDate');
const displayRequest = document.getElementById('displayRequest');

if (name) {
  displayName.textContent = name;
} else {
  displayName.textContent = 'Not provided';
}

if (date) {
  // Format date nicely (YYYY-MM-DD to readable format)
  const dateObj = new Date(date + 'T00:00:00');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  displayDate.textContent = dateObj.toLocaleDateString('en-US', options);
} else {
  displayDate.textContent = 'Not selected';
}

if (request) {
  displayRequest.textContent = request;
} else {
  displayRequest.textContent = 'No request specified';
}

// Google Calendar invite function
function createCalendarInvite() {
  if (!date) {
    alert('Please go back and select a date first!');
    return;
  }

  // Format date from YYYY-MM-DD to YYYYMMDD
  const startDate = date.replace(/-/g, "");
  const title = encodeURIComponent("🎁 Redeem Jeorjie Voucher");
  const details = encodeURIComponent(
    `Name: ${name || 'Not provided'}\n\nVoucher request:\n${request || 'No specific request'}\n\nReminder: Jeorjie owes you happiness!`
  );
  const yourEmail = 'jeorjie24@gmail.com';

  // Create Google Calendar URL with your email as attendee
  const calendarUrl =
    `https://www.google.com/calendar/render?action=TEMPLATE` +
    `&text=${title}` +
    `&dates=${startDate}/${startDate}` +
    `&details=${details}` +
    `&add=${yourEmail}` +
    `&sf=true` +
    `&output=xml`;

  // Open in new tab
  window.open(calendarUrl, "_blank");
  
  // Show confirmation message
  const confirmationMessage = document.getElementById('confirmationMessage');
  const initialFooter = document.getElementById('initialFooter');
  const calendarBtn = document.getElementById('calendarBtn');
  
  confirmationMessage.classList.remove('hidden');
  initialFooter.classList.add('hidden');
  
  // Update button to show it's been clicked
  calendarBtn.textContent = '✅ Calendar Invite Opened!';
  calendarBtn.style.background = '#2e7d32';
  calendarBtn.style.cursor = 'default';
  calendarBtn.disabled = true;
  
  // Store in localStorage that they clicked it (to prevent multiple redemptions)
  localStorage.setItem('voucherRedeemed', 'true');
  localStorage.setItem('voucherName', name || '');
  localStorage.setItem('voucherDate', date);
  localStorage.setItem('voucherRequest', request || '');
}

// Add click handler to button
const calendarBtn = document.getElementById('calendarBtn');
calendarBtn.addEventListener('click', createCalendarInvite);

