import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  anhiensp :boolean = true;
  anhien :boolean = true;
  guihanhdong;
  clickofftb2:boolean;
 anhienthem:boolean=true;
    clickgioithieu(){
      this.anhien = true;
      this.guihanhdong=true;
      this.anhiensp=true;
      this.clickofftb2=true;
      this.anhienthem = true;
    }
    clicksanpham(){
      this.anhien=true;
      this.guihanhdong=true;
      this.anhiensp=false;
      this.clickofftb2=true;
      this.anhienthem = true;
    }
    clickdichvu(){
      this.guihanhdong=false;
      this.anhien=false;
      this.anhiensp=true;
      this.clickofftb2=true;
      this.anhienthem = true;
    }
    clicktintuc(){
      this.anhiensp=true;
      this.guihanhdong=false;
      this.anhien=true;
      this.clickofftb2=false;
      this.anhienthem = true;
    }
    clicklienhe(){
      this.anhiensp=true;
      this.guihanhdong=false;
      this.anhien=true;
      this.clickofftb2=true;
      this.anhienthem = true;
    }

    clickthem(){
      this.anhienthem=false;
      this.anhiensp=true;
      this.guihanhdong=false;
      this.anhien=true;
      this.clickofftb2=true;
    }

  
}
