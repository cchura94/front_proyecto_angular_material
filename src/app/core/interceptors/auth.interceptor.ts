
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("*************************   INTERCEPTOR 1   **********************")
  return next(req);
};
