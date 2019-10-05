import { Component, OnInit, OnDestroy } from '@angular/core';

import { RepositoriesService } from '../../services/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html'
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  repositoriesSubscription;
  repositories;

  constructor(private repositoriesService: RepositoriesService) {}

  ngOnInit() {
    this.repositoriesSubscription = this.repositoriesService.getRepositories().subscribe(
      (repositories) => this.repositories = Array.isArray(repositories) ? repositories : null
    );
  }

  ngOnDestroy() {
    this.repositoriesSubscription.unsubscribe();
  }
}
