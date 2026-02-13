import { Injectable } from "@angular/core";

@Injectable()
export class AudioService{
    private audio = new Audio('sounds/jttou.MP3');

    init(){
        this.audio.load();
    }

    play(){
        this.audio.loop = false;
        this.audio.volume = 0.4;

        this.audio.play()
        .then(() => {
            console.log("Lecture démarrée avec succès !");
        })
        .catch(error => {
            console.error("Erreur de lecture :", error);
        });
    }

    pause(){
        this.audio.pause();
    }
}