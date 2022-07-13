import { PaymentCreatedEvent, Publisher, Subjects } from "@tickethub-dc/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
