import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

class MockAuthService {
  isLoggedIn() {
    return false; // Simula la autenticación por defecto
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService } // Usa el servicio simulado
      ]
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate to login if user is not authenticated', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);
    expect(result).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should allow activation if user is authenticated', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    const navigateSpy = spyOn(router, 'navigate');
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);
    expect(result).toBe(true);
    expect(navigateSpy).not.toHaveBeenCalled();
  });
});
