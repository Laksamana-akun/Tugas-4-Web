import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCourtBookingDto } from './dto/create-court-booking.dto.js';
import { UpdateCourtBookingDto } from './dto/update-court-booking.dto.js';

@Injectable()
export class CourtBookingsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCourtBookingDto) {
    return this.prisma.courtBooking.create({
      data: {
        courtName: dto.courtName,
        playerName: dto.playerName,
        bookingAt: new Date(dto.bookingAt),
        price: dto.price,
        ...(dto.status ? { status: dto.status } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.courtBooking.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const booking = await this.prisma.courtBooking.findUnique({
      where: { id },
    });
    if (!booking) {
      throw new NotFoundException(`CourtBooking with id ${id} not found`);
    }
    return booking;
  }

  async update(id: number, dto: UpdateCourtBookingDto) {
    await this.findOne(id);
    return this.prisma.courtBooking.update({
      where: { id },
      data: {
        ...(dto.courtName !== undefined ? { courtName: dto.courtName } : {}),
        ...(dto.playerName !== undefined ? { playerName: dto.playerName } : {}),
        ...(dto.bookingAt !== undefined
          ? { bookingAt: new Date(dto.bookingAt) }
          : {}),
        ...(dto.price !== undefined ? { price: dto.price } : {}),
        ...(dto.status !== undefined ? { status: dto.status } : {}),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.courtBooking.delete({
      where: { id },
    });
  }
}