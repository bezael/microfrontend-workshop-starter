import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: WebComponentWrapperOptions[] = [
    {
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    },

    {
      remoteEntry:
        'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular1',
      exposedModule: './web-components',
      elementName: 'angular1-element',
    },

    {
      remoteEntry:
        'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
      remoteName: 'angular2',
      exposedModule: './web-components',
      elementName: 'angular2-element',
    },

    {
      remoteEntry:
        'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'vue',
      exposedModule: './web-components',
      elementName: 'vue-element',
    },

    {
      remoteEntry:
        'https://calm-mud-0a3ee4a10.azurestaticapps.net//remoteEntry.js',
      remoteName: 'angularjs',
      exposedModule: './web-components',
      elementName: 'angularjs-element',
    },
  ];
}
