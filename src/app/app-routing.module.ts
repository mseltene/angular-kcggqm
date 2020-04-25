import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'mat-expansion-panel', pathMatch: 'full' },
  { path: 'mat-expansion-panel', component: MatExpansionPanelComponent },
  { path: '**', redirectTo: 'mat-expansion-panel' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true /*,enableTracing: !environment.production*/ })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
