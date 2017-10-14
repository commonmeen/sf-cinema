import { Component } from '@angular/core';

import { ShowingPage } from '../showing/showing';
import { CinemaPage } from '../cinema/cinema';
import { ComingPage } from '../coming/coming';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShowingPage;
  tab2Root = CinemaPage;
  tab3Root = ComingPage;
  tab4Root = MorePage;

  constructor() {

  }
}
