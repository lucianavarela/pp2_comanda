import { Injectable } from '@angular/core';

@Injectable()
export class SmartAudioService {
    sounds: any = [];

    constructor() {
    }

    preload(key, asset) {
        const audio = {
            key: key,
            asset: asset,
            type: 'html5'
        };

        this.sounds.push(audio);    }

    play(key) {
        const audio = this.sounds.find((sound) => {
            return sound.key === key;
        });

        const audioAsset = new Audio(audio.asset);
        audioAsset.play();
    }

}