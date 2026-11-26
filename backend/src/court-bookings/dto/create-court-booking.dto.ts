export class CreateCourtBookingDto {
  courtName: string;
  playerName: string;
  bookingAt: string;
  price: number;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}