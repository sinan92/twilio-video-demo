import { Component } from '@angular/core';
import { TwilioService } from './services/twilio/twilio.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor(
        private twilioServ: TwilioService,
    ) {
        twilioServ.connectRoom().then(() => twilioServ.localVideo());
    }
}
