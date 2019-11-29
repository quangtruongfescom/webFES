import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noidung',
  templateUrl: './noidung.component.html',
  styleUrls: ['./noidung.component.css']
})
export class NoidungComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() nhanhanhdong: boolean;
  @Input() clickofftb: boolean;
  
  logos=[
    'http://fescom.vn/wp-content/uploads/2018/08/LIOA.png',
    'http://fescom.vn/wp-content/uploads/2018/08/FECON.png',
    'http://fescom.vn/wp-content/uploads/2018/08/DONGIANG.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/CASABALANCA.png',
    'http://fescom.vn/wp-content/uploads/2018/09/DAG.jpg',
    'http://fescom.vn/wp-content/uploads/2018/09/ARISTINO.png',
    'http://fescom.vn/wp-content/uploads/2019/10/picenza.png',
    'http://fescom.vn/wp-content/uploads/2019/10/hanvico.png',
    'http://fescom.vn/wp-content/uploads/2019/10/thienduongbaoson.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/SONALEX.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/THienthanh.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/TOAVN.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/VINAPIPE.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/TOANTHANG.png',
    'http://fescom.vn/wp-content/uploads/2018/08/KG.png',
    'http://fescom.vn/wp-content/uploads/2018/08/NICOTEX.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/MICOEM.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/Merap.jpg',
  ];

  
}
