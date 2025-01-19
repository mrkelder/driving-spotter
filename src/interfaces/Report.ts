// report.interface.ts
export interface Report {
  id: number;
  userId: number;
  violationDescription: string;
  location: string;
  datetime: string;
  licensePlate: string;
  evidenceImg: string;
  licensePlateImg?: string;
  licensePlateText: string;
}
