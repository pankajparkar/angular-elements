import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// the new elements module
import { registerAsCustomElements } from '@angular/elements';

import { CustomElementsModule, CustomeElements } from './custom-elements.module';
import { MyRatingComponent } from './my-rating.component';

// Step 3: Wrap bootstraping with `registerAsCustomElements` with all CE components
registerAsCustomElements(CustomeElements, () =>
  platformBrowserDynamic().bootstrapModule(CustomElementsModule),
);