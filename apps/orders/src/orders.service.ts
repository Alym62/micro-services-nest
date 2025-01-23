import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { CreatedOrderRequest } from './payloads/create-order.request';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    private readonly orderRepository: OrderRepository,
  ) { }

  public async create(request: CreatedOrderRequest): Promise<Order> {
    return this.orderRepository.create(request);
  }

  public async getList(): Promise<unknown> {
    return this.orderRepository.find({});
  }
}
