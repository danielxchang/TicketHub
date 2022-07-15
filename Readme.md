# TicketHub

[TicketHub](http://www.tickethub.lol) is a full-stack multi-service ticketing application designed with a **microservices** architecture.

## Features

- Presents content and renders data with a server-side rendered **React** App built with **Next.js**.
- Implements various microservices created using **Node** and **Express**.
- Stores data in either a **Mongo** database or **Redis**.
- Written in mostly **TypeScript** to facilitate easier debugging and quicker development.
- Shares reusable code between microservices using custom **NPM packages**.
- Implements an async event-based architecture by communicating data between microservices using a custom built event bus implemented using **NATS Streaming Server**.
- Deploys and runs on the cloud in **Docker** containers executed in a **Kubernetes** cluster deployed on **DigitalOcean**.
- Implements comprehensive tests using **Jest** to ensure each microservice works as designed.

## Painpoints and Solutions

| Painpoints                                  | Solutions                                                                                                                                                                                                             |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicated code                             | Built a central library as an NPM module to share code between services.                                                                                                                                              |
| Picturing flow of events between services   | Precisely defined all events in this shared library.                                                                                                                                                                  |
| Remembering properties an event should have | Wrote code in **TypeScript**.                                                                                                                                                                                         |
| Testing event flows                         | Wrote as many tests as reasonabily possible.                                                                                                                                                                          |
| Laggy machine from running Kubernetes, etc  | Ran a **Kubernetes** cluster on **Google Cloud** during development.                                                                                                                                                  |
| Dependencies from synchronous communication | Implemented async communication using a custom built event bus and event-based architecture.                                                                                                                          |
| Concurrency issues from async communication | Redesigned the system to implement **optimistic concurreny control** with automatic record versioning through the [mongoose-update-if-current](https://www.npmjs.com/package/mongoose-update-if-current) NPM package. |

## Common Library

Published commonly used code into a NPM module called [@tickethub-dc/common](https://github.com/dcphantom/tickethub-common) and reused across various services.
