import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMask } from 'primeng/inputmask';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    RadioButtonModule,
    InputTextModule,
    FloatLabel,
    ButtonModule,
  ],
  templateUrl: './payment.component.html',
  styles: ``,
})
export class PaymentComponent {
  selectedPayment: string = 'creditCard';

  selectPaymentMethod(paymentMethod: string) {
    this.selectedPayment = paymentMethod;
  }
}
