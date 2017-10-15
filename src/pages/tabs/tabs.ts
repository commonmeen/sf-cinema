import { Component } from '@angular/core';

import { ShowingPage } from '../showing/showing';
import { TheaterPage } from '../theater/theater';
import { ComingPage } from '../coming/coming';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShowingPage;
  tab2Root = TheaterPage;
  tab3Root = ComingPage;
  tab4Root = MorePage;

  constructor() {

  }
}
