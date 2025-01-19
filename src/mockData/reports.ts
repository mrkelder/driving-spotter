import { Report } from "@/src/interfaces/Report";

export const mockReports: Report[] = [
  {
    id: 1,
    userId: 1,
    violationDescription: "Parking in a no parking zone",
    location: "1234 Elm St",
    datetime: "2021-09-01T12:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "CASZ203",
  },
  // 15 more records with different parameters
  {
    id: 2,
    userId: 2,
    violationDescription: "Blocking a driveway",
    location: "5678 Oak St",
    datetime: "2021-09-02T14:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "XYZ123",
  },
  {
    id: 3,
    userId: 3,
    violationDescription: "Double parking",
    location: "9101 Pine St",
    datetime: "2021-09-03T16:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "ABC456",
  },
  {
    id: 4,
    userId: 4,
    violationDescription: "Expired meter",
    location: "1122 Maple St",
    datetime: "2021-09-04T10:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "DEF789",
  },
  {
    id: 5,
    userId: 5,
    violationDescription: "Parking on sidewalk",
    location: "3344 Birch St",
    datetime: "2021-09-05T11:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "GHI012",
  },
  {
    id: 6,
    userId: 6,
    violationDescription: "Parking in a fire lane",
    location: "5566 Cedar St",
    datetime: "2021-09-06T13:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "JKL345",
  },
  {
    id: 7,
    userId: 7,
    violationDescription: "Parking in a handicap spot",
    location: "7788 Spruce St",
    datetime: "2021-09-07T15:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "MNO678",
  },
  {
    id: 8,
    userId: 8,
    violationDescription: "Parking in a loading zone",
    location: "9900 Willow St",
    datetime: "2021-09-08T17:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "PQR901",
  },
  {
    id: 9,
    userId: 9,
    violationDescription: "Parking in a bus stop",
    location: "2233 Ash St",
    datetime: "2021-09-09T09:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "STU234",
  },
  {
    id: 10,
    userId: 10,
    violationDescription: "Parking in a crosswalk",
    location: "4455 Poplar St",
    datetime: "2021-09-10T08:00:00",
    licensePlate:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
    evidenceImg:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
    licensePlateText: "VWX567",
  },
  // ...add 12 more records similarly...
];
