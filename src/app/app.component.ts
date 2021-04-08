import { Component } from '@angular/core';
import { Candidate } from './entities/candidate';
import { Vote } from './entities/vote';
import { CandidateService } from './services/candidate.service';
import { VoteService } from './services/vote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'UrnaEletronicaWeb';
  decimal = null;
  unit = null;
  candidate = null;
  branco = false;
  votouSucesso = false;
  page = 'Urna';
  candidateNotExist = false;
  votos = [];
  candidatos = [];
  nomeCandidato = null;
  viceNome = null;
  legenda = null;

  constructor(private candidateService: CandidateService, private voteService: VoteService) { }
  
  public vote(voteNumber: string): void {
    if (this.decimal == null) {
      this.decimal = voteNumber
    } else if (this.unit == null) {
      this.unit = voteNumber;
    }

    if (this.unit != null) {
      this.getCandidate();
    }
  }

  public corrige() {
    this.unit = null;
    this.decimal = null;
    this.candidate = null;
    this.votouSucesso = false;
    this.branco = false;
    this.candidateNotExist = false;
  }

  public voteBranco() {
    this.branco = true;
    this.votouSucesso = true;
  }

  public getCandidate(): void {
    this.candidateService.getCandidate(this.decimal+this.unit).subscribe((data: Candidate) =>
    {
      this.candidate = data
      this.candidateNotExist = false;
      if (data == null) {
        this.candidateNotExist = true;
      }
    } 
    );
  }

  public confirma() {
    if (this.candidate) {
      this.voteService.vote(this.candidate.candidateId).subscribe((data: boolean) => this.votouSucesso = data);
    }
  }

  public votarNovamente() {
    this.corrige();
  }

  public changePage(page: string) {
    this.page = page;

    if (page == 'Votos') {
      this.getVotes()
    }

    if (page == 'Candidatos') {
      this.getCandidatos();
    }
  }

  public getVotes() {
    this.voteService.GetAll().subscribe((data: Vote[]) => this.votos = data);
  }

  public getCandidatos() {
    this.candidateService.GetAll().subscribe((data: Candidate[]) => this.candidatos = data);
  }

  public deletarCandidato(candidateId: number) {
    this.candidateService.Delete(candidateId).subscribe((data: string) => {});
    this.getCandidatos();
  }

  public criarCandidato() {
    if (this.nomeCandidato && this.viceNome && this.legenda) {
      const candidate = new Candidate(this.nomeCandidato, this.viceNome, this.legenda)
      this.candidateService.Create(candidate).subscribe((data: Candidate) => {});
      this.getCandidatos();
    }
  }
}
