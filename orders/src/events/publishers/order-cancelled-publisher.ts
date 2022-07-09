import { Publisher, OrderCancelledEvent, Subjects } from "@tickethub-dc/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
