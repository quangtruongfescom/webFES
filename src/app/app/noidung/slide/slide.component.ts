import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tinhots=[
    'http://fescom.vn/wp-content/uploads/2019/08/Slogen-660x330.png',
    'http://fescom.vn/wp-content/uploads/2018/08/goals-for-your-business_512861902-660x330.jpg',
    'https://images.guucdn.net/full/2018/03/25/27de6a2c4e65a87be048656b0008d5deca516bfc.jpg',
    'https://picture.vn/wp-content/uploads/2018/01/chup-anh-nghe-thuat-2018-2-1.jpg',
    'http://fescom.vn/wp-content/uploads/2018/08/plus2ba_banner-660x330.jpg',

  ]

  IImage =[
    { url: 'http://fescom.vn/wp-content/uploads/2019/08/Slogen-660x330.png',
      href: 'http://fescom.vn/',
      caption: '<h2>Giải pháp quản trị doanh nghiệp toàn diện với FES</h2>',
      title: 'Giải pháp quản trị doanh nghiệp toàn diện với FES',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'yes',
    },
    { url: 'https://images.guucdn.net/full/2018/03/25/27de6a2c4e65a87be048656b0008d5deca516bfc.jpg',
      href: 'http://fescom.vn/',
      caption: '<h2>Tia gái nhanh như chớp</h2>',
      title: '=))',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'yes',
    },
    { url: 'http://fescom.vn/wp-content/uploads/2018/08/goals-for-your-business_512861902-660x330.jpg',
      href: 'http://fescom.vn/',
      caption: '<h2>Bảo trì phần mềm nhanh như chớp</h2>',
      title: 'Bảo trì phần mềm nhanh như chớp',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'yes',
    },
    { url:  'https://picture.vn/wp-content/uploads/2018/01/chup-anh-nghe-thuat-2018-2-1.jpg',
      href: 'http://fescom.vn/',
      caption: '<h2>Giải trí</h2>',
      title: '.....',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'yes',
    },
    { url: 'http://fescom.vn/wp-content/uploads/2018/08/plus2ba_banner-660x330.jpg',
      href: 'http://fescom.vn/',
      caption: '<h2>Đồng hành cùng sự phát triển của doanh nghiệp bạn</h2>',
      title: 'Liên hệ ngay',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'yes',
    }
  ]
}
