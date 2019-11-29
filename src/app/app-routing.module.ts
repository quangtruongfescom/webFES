import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LienheComponent } from './app/thanhtieude/lienhe/lienhe.component';
import { GioithieuComponent } from './app/thanhtieude/gioithieu/gioithieu.component';
import { SanphamComponent } from './app/thanhtieude/sanpham/sanpham.component';
import { Effect30Component } from './app/thanhtieude/sanpham/effect3.0/effect3.0.component';
import { BaotriComponent } from './app/thanhtieude/dichvu/baotri/baotri.component';
import { CaidatComponent } from './app/thanhtieude/dichvu/caidat/caidat.component';
import { DaotaoComponent } from './app/thanhtieude/dichvu/daotao/daotao.component';
import { DichvuComponent } from './app/thanhtieude/dichvu/dichvu.component';
import { ThongtinthemComponent } from './app/thanhtieude/thongtinthem/thongtinthem.component';


const routeslienhe: Routes = [
  {path: 'lienhe', component: LienheComponent},
  {path: 'gioithieu', component: GioithieuComponent},
  {path: 'tongquansanpham', component: SanphamComponent},
  {path: 'speffect30', component:Effect30Component},
  {path: 'dvbaotri', component: BaotriComponent},
  {path: 'dvcaidat', component: CaidatComponent},
  {path: 'dvdaotao', component: DaotaoComponent},
  {path: 'dichvu', component: DichvuComponent},
  {path: 'thongtinthem', component: ThongtinthemComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routeslienhe)],
  declarations: [
    LienheComponent,
    GioithieuComponent,
    SanphamComponent,
    Effect30Component,
    BaotriComponent,
    CaidatComponent,
    DaotaoComponent,
    DichvuComponent,
    ThongtinthemComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
