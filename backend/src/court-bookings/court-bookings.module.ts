import { Module } from '@nestjs/common';
import { CourtBookingsController } from './court-bookings.controller.js';
import { CourtBookingsService } from './court-bookings.service.js';

@Module({
  controllers: [CourtBookingsController],
  providers: [CourtBookingsService],
})
export class CourtBookingsModule {}