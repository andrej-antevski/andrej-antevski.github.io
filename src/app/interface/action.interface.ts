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
}
