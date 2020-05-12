import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  faUser = faUser
  faThumbtack = faThumbtack
  faEnvelopeOpenText = faEnvelopeOpenText
  faPhoneAlt = faPhoneAlt

  constructor() { }

  ngOnInit(): void {
  }

}