export function formatCheckinDate(utcString) {
  if (!utcString) return '';
  const raw = utcString.endsWith('Z') ? utcString : `${utcString}Z`;
  const date = new Date(raw);
  if (Number.isNaN(date)) return '';
  const formattedDate = date.toLocaleDateString('en-CA', {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  let formattedTime = date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });
  formattedTime = formattedTime.replace(/a\.m\./gi, 'AM').replace(/p\.m\./gi, 'PM');
  return `Checked in on ${formattedDate} @ ${formattedTime}`;
}