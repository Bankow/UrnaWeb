export class Candidate {
  candidateId: number;
  name: string;
  viceName: string;
  registerDate: Date;
  subtitle: number;
  votes: number;


constructor(name: string, viceName: string, subtitle: number) {
  this.name = name;
  this.viceName = viceName;
  this.subtitle = subtitle;
}
}