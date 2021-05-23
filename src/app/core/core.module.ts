import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardsModule } from './guards/guards.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, GuardsModule, ServicesModule],
  exports: [GuardsModule, ServicesModule],
})
export class CoreModule {}
