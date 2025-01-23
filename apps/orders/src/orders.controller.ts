import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreatedOrderRequest } from './payloads/create-order.request';

@Controller('api/v1/order')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post('/create')
  public async createOrder(@Body() request: CreatedOrderRequest) {
    return this.ordersService.create(request);
  }

  @Get('/list')
  public async getOrders() {
    return this.ordersService.getList();
  }
}
