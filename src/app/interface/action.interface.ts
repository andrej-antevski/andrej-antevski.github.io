export interface Action{
  id: number;
  header: string;
  summary: string;
  text: string;
  points: number;
  applicants: string[];
  chat: string[];
  time: string;
  date: Date;
  location: string;
  organizer: string;
  image: string;
  pending: Applicant[];
}

export interface Applicant {
  name: string;
  reason: string;
  points: number;
}
