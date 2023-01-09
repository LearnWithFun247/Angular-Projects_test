import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  boxData: any = "";
  message: string = ""
  constructor() { }

  bool: boolean = false;
  ngOnInit(): void {
    setInterval(() => {
      this.bool = !this.bool
    }, 2000)
  }

  handleAction(e: any) {
    this.message = e
  }

}
