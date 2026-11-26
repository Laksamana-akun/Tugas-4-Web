export class UpdateCourtBookingDto {
  courtName?: string;
  playerName?: string;
  bookingAt?: string;
  price?: number;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}