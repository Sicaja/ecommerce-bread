import { Component, Input, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    RadioButtonModule,
    InputTextModule,
    FloatLabel,
    ButtonModule,
    Dialog,
  ],
  templateUrl: './payment.component.html',
  styles: ``,
})
export class PaymentComponent {
  selectedPayment: string = 'creditCard';
  isLoading = false;
  isSuccess = false;

  selectPaymentMethod(paymentMethod: string) {
    this.selectedPayment = paymentMethod;
  }

  async pay(): Promise<void> {
    this.isLoading = true;
    await this.timeOut(2000); // Simulate payment process
    this.isSuccess = true;
    await this.timeOut(1500); // Simulate success message
    this.isLoading = false;
    this.isSuccess = false;
  }

  timeOut(ms: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}
