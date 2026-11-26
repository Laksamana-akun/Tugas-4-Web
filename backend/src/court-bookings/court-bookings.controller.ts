import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CourtBookingsService } from './court-bookings.service.js';
import { CreateCourtBookingDto } from './dto/create-court-booking.dto.js';
import { UpdateCourtBookingDto } from './dto/update-court-booking.dto.js';

@Controller('court-bookings')
export class CourtBookingsController {
  constructor(private readonly courtBookingsService: CourtBookingsService) {}

  @Post()
  create(@Body() dto: CreateCourtBookingDto) {
    return this.courtBookingsService.create(dto);
  }

  @Get()
  findAll() {
    return this.courtBookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.courtBookingsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCourtBookingDto,
  ) {
    return this.courtBookingsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.courtBookingsService.remove(id);
  }
}