import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { RedirectService } from '../../services/redirect.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit, OnDestroy {
  subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private redirectService: RedirectService) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParams.pipe(
      switchMap((params) => params && params['code'] ?
        this.redirectService.gitHubAuth({code: params['code']}) :
        this.router.navigate(['/']))
    ).subscribe((res: any) => {
      if (res.error) {
        location.href = environment.githubAuthUrl;
      }

      localStorage.setItem('github_token', res.access_token);
      this.router.navigate(['/repositories']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
