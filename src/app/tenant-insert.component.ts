/**
 * Created by FeanorCui on 10/4/17.
 */
import { Component, Input } from '@angular/core';
import { Tenant } from './Tenant';

@Component({
  selector: 'tenant-detail',
  templateUrl: './tenantDetail.html'
})

export class TenantDetailComponent {
  @Input() tenant:Tenant;
}



