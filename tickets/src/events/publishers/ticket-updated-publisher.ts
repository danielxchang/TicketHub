import { Publisher, Subjects, TicketUpdatedEvent } from "@tickethub-dc/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
