import { Injectable } from '@angular/core';
import { connect, createLocalVideoTrack } from 'twilio-video';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TwilioService {

    constructor(
    ) { }

    connectRoom() {
        return connect(environment.token, { name: 'my-new-room' }).then(room => {
            console.log(`Successfully joined a Room: ${room}`);
            console.log("Listeners count: ", room.listenerCount.length);
            room.on('participantConnected', participant => {
                console.log(`A remote Participant connected: ${participant}`);
            });
        }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
        })
    }

    localVideo() {
        createLocalVideoTrack().then(track => {
            const localMediaContainer = document.getElementById('local-media') as HTMLElement;
            localMediaContainer.appendChild(track.attach());
            console.log("Created");
          });
    }
}
