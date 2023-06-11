import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; // Reemplaza 'ruta-de-tu-servicio-de-autenticacion' con la ruta real de tu servicio de autenticación
import { LoginService } from './services/login.service';
import { NotifierService } from './services/notifier.service';

@Injectable()
export class AdminGuard implements CanActivate {
    public userRole: string = 'base_user';
    
    constructor(
        private _loginService: LoginService, 
        private _router: Router,
        private _toastr: NotifierService) {}

    canActivate(): boolean {
        this._loginService.getUserData().subscribe(
            (data: any) => {
              this.userRole = data.role;
            }
        )
    
        if (this.userRole === 'admin' || this.userRole === 'staff') {
            return true;
        }

            // Redirige a una página de acceso denegado o a otra ruta
            this._toastr.showError('No tienes permisos para acceder a este apartado', 'Error de permisos')
            this._router.navigate(['/information']); // Reemplaza '/acceso-denegado' con la ruta a la página de acceso denegado
        return false;
  }
}