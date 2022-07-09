import { Publisher, OrderCreatedEvent, Subjects } from "@tickethub-dc/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
