import { Component } from '@angular/core';
import {
  MatExpansionPanel,
  MatExpansionPanelHeader,
} from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionPanel, MatExpansionPanelHeader, MatAccordion],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts = [
    { title: 'First post', content: "Haha i'm first, gib me likes!" },
    { title: 'Fuck you', content: 'Fuck you Ezekiel' },
    { title: 'No U', content: 'No, fuck you!' },
  ];
}
