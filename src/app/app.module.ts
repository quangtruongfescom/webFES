import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgMarqueeModule } from 'ng-marquee';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './app/trangchu/trangchu.component';
import { ThanhtieudeComponent } from './app/thanhtieude/thanhtieude.component';
import { MangxahoiComponent } from './app/mangxahoi/mangxahoi.component';
import { NoidungComponent } from './app/noidung/noidung.component';
import { TienichComponent } from './app/tienich/tienich.component';
import { Effect50Component } from './app/thanhtieude/sanpham/effect50/effect50.component';
import { EffecterpComponent } from './app/thanhtieude/sanpham/effecterp/effecterp.component';
import { SlideComponent } from './app/noidung/slide/slide.component';
import { Kienthuc1Component } from './app/tienich/kienthuc/kienthuc1/kienthuc1.component';
import { Kienthuc2Component } from './app/tienich/kienthuc/kienthuc2/kienthuc2.component';
import { Tintuc1Component } from './app/tienich/tintuc/tintuc1/tintuc1.component';
import { Tintuc2Component } from './app/tienich/tintuc/tintuc2/tintuc2.component';
import { Kienthuc3Component } from './app/tienich/kienthuc/kienthuc3/kienthuc3.component';
import { Tintuc3Component } from './app/tienich/tintuc/tintuc3/tintuc3.component';
import { NhanxetkhComponent } from './app/tienich/nhanxetkh/nhanxetkh.component';
import { CsstrangchuComponent } from './app/trangchu/csstrangchu/csstrangchu.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    ThanhtieudeComponent,
    MangxahoiComponent,
    NoidungComponent,
    TienichComponent,
    Effect50Component,
    EffecterpComponent,
    SlideComponent,
    Kienthuc1Component,
    Kienthuc2Component,
    Tintuc1Component,
    Tintuc2Component,
    Kienthuc3Component,
    Tintuc3Component,
    NhanxetkhComponent,
    CsstrangchuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMarqueeModule,
    SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
