const BOOKING_EVENT = "welcidea:booking";

export function requestBooking(name) {
  window.dispatchEvent(new CustomEvent(BOOKING_EVENT, { detail: { name } }));
}

export function onBookingRequest(handler) {
  window.addEventListener(BOOKING_EVENT, handler);
  return () => window.removeEventListener(BOOKING_EVENT, handler);
}
