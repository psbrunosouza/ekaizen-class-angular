import { Component, OnInit } from '@angular/core';
import {Phone} from "../core/models/phone-list/phone";

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

  title = "Lista telefone";

  phoneList: Phone[] = [];

  phone: Phone;

  constructor() { }

  ngOnInit(): void {
    this.loadPhoneList();

    this.phone = new Phone();
  }

  searchName(name: string) {
    return this.phoneList.filter((phone) => phone.name === name);
  }

  loadPhoneList(): void {
    this.phoneList = [
      {
        name: "José",
        phone: "99 99999-9999",
        isBlocked: true
      },
      {
        name: "Maria",
        phone: "99 99999-9999",
        isBlocked: false
      },
      {
        name: "Joaquina",
        phone: "99 99999-9999",
        isBlocked: false
      }
    ]
  }

  savePhone(phone: Phone): void {
    this.phoneList.push(phone);
  }

}
