import {Component, Input, OnInit} from '@angular/core';
import {Phone} from "../../core/models/phone-list/phone";

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  @Input() phone: Phone;

  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
