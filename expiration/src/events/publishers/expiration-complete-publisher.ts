import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@tickethub-dc/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
