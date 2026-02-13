import { Injectable } from "@angular/core";

@Injectable()
export class AudioService{
    private audio = new Audio('sounds/jttou.MP3');
    private funnyAudio = new Audio('sounds/funny.mp3');

    init(){
        this.audio.load();
    }

    initFunny(){
        this.funnyAudio.load();
    }

    play(){
        this.audio.loop = false;
        this.audio.volume = 0.4;

        this.audio.play();
    }

    playFunny(){
        this.funnyAudio.volume = 1;
        this.funnyAudio.play();
    }

    pause(){
        this.audio.pause();
    }

    pauseFunny(){
        this.funnyAudio.pause();
    }
}