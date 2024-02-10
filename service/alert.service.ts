import { Injectable } from '@angular/core';

import Swal, { SweetAlertIcon } from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public displayToast(title: string, icon: SweetAlertIcon, color: string, time: number = 1500): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: color,
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: time,
      timerProgressBar: true,
    });
    Toast.fire({
      icon,
      title,
    });
  }

  public displayModal(title: string, icon: SweetAlertIcon, text: string = ""): void {
    Swal.fire({
      icon,
      title,
      text,
    });
  }
}
