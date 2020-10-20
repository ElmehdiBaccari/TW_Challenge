import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';


const routes: Routes =  [{
  path: '',
  component: DefaultComponent,
  children: [{
    
    path: 'about',
    component: AboutComponent
  },
  {
    
    path: 'chart',
    component: ChartViewComponent
  },

]
 
}, {
  path: '',
  component: FullwidthComponent , }, 
   

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
