import { Injectable, signal } from "@angular/core";
import { ValentinProgram } from "../interfaces/program.interface";

@Injectable()
export class ProgramService{
    private programs = signal<ValentinProgram[]>([]);
    programs$ = this.programs.asReadonly();

    initPrograms(){
        this.addProgram({
            title: "Promenade dans le parc One Piece",
            description: "Gigot de viande géante, statuts de personnages de one piece, activité sur le sunny...",
            image: "url('https://i.pinimg.com/1200x/b1/63/54/b1635494ca174ff5c28da04a4743f7d5.jpg')",
            time: "07:00",
            top: true,
            active: true
        });
        this.addProgram({
            title: "Petit déjeuner en plein air",
            description: "Ne t'inquiète pas si les gens nous regarde bizzarement, ils sont jaloux seulement",
            image: "url('https://i.pinimg.com/736x/60/6e/dc/606edc4e536bd5af7a557f3e1469b798.jpg')",
            time: "07:30",
            top: false,
            active: false
        });
        this.addProgram({
            title: "Visite du musée de l'amour",
            description: "Représentation artistiques des personnages historiques s'étant battu pour l'amour. c'est pas une compétition mais je me suis battue plus qu'eux...",
            image: "url('https://i.pinimg.com/736x/77/4d/66/774d66da12cd5d4da0e6941f73a4c3c3.jpg')",
            time: "08:00",
            top: false,
            active: false
        });
        this.addProgram({
            title: "Déjeuner au restaurant bangala",
            description: "Tous les plus grand mets à la hauteur de ta magnificence sont servi ici. Coquillette, saumon, poulet, ... Mais ils ne servent pas de bangala",
            image: "url('https://plus.unsplash.com/premium_photo-1661878716924-af3c5ed5b083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMHBhbG18ZW58MHx8MHx8fDA%3D')",
            time: "12:00",
            top: false,
            active: false
        });
        this.addProgram({
            title: "Petit détour à Ibiza",
            description: "Petit détour à ibiza avec mon jet privé modèle Boeing 67 pour du shopping",
            image: "url('https://images.unsplash.com/photo-1615317779547-2078d82c549a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            time: "15:00",
            top: false,
            active: false
        });
        this.addProgram({
            title: "Promenade sur les plage de cuba",
            description: "Le sable chaud sous nos pieds après 1 min de chopping à ibiza (c'était long quand même)",
            image: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            time: "15:01",
            top: false,
            active: false
        });
        this.addProgram({
            title: "Maraton Jojo's Bizzare Adventure. Yare yare daze !",
            description: "Are you play ? Or Not ? Mister JOESTAR !!!",
            image: "url('https://lh3.googleusercontent.com/rd-gg-dl/AOI_d_-cwo7B0vt4cUvyKseOIWmWQX-G96ALzLAJK4FqPA6YzPxYDU-8n3JbEtpehvSeH5wISwCTFtiN6vzkZxl-OhzsELjdgqXKv9jTosmxChFB2WSnWqC7gSlIkdZPdX8io-ZD_RyvlBtsXB-KV9JkGxdeOeDmXbJfna0slWt2KQ2HeZ0Or03BsK-dAVLpL1JoNJCbx_-pixHNGWXfpguXyBPqN_DPFBBIT9KIQ_4El8_GZs8acO2Q04qf3r1U6WvTGnX8lFIo8uvdpM09GTrXR7K4OBKZqySHMP7xgD8lT90OeFeYHqwFIDfJE0iB1J1V56mvVhbmcYw7v7QmDQ6u-MUe2VteIcd9LkoQRd2BXq4Jry65xrWpYPxhP8szl-1UgqR_LTtrGh_e56lE-ATxRpuO0IZ3GE3pz7fjQ3WRcIeScCQzTjblgfvsNOljqKiZ17hfpPDAUjyMgPsDq0zEn7S25Beq34ofEv3UQznxwnGHJszaHgumojzEkA1lyAnBeEoL96D0bMV6WE8ldQSctgAFCviB_K4cvHBZ6qceFxEOnl8o_0ZFiD_KBsDUBb7seOj4x4Ixb77mk9_LVvcDY-JivqiIVvgDw5yT4pA8Zq083k99m1CzyjLvV7m9z7Ydx7qvYxqMUHMSR2iAOlDvWpr4jSIBeyqMGNxldpVVfu5MXTHbphMdUEg5ec59EAkwHdvU5hIkyj6FZ7vF-SeBV_zjiLW73u6L8wbNkLoaovieV1816U1wnpi--W9pApmF0ryPgFP6Cmw_hyM1fml-FckoiTUZZCmWlpu_O81Y5U5al5gEWt_HZybFYRVNarsWJIIplYNv8MwU8tCpOHicE2KvtSB4ItbLXgDTGFLdVKbE-JrRz-Z0j0O4282ykXBtc2xgri8T4KJDifE-ENKrDHNYRkAA4J8nAqIsnD9UgTZJY_crTTEhEov2BbC5anYw1YqbAJpHYqX1PjYR8Aj0-ZbkFPLDDoJzuR8YV3CCSO3AbkyGJ7EqOT5Lr_xNWysji-Ei0fWwnOe47RudHtPU4MCwJnRv83lT-UUlgOkKn_NuxWSCxVthQaB6D51r6k6pDGMq0wNOvXzM_IYvunpZVlWztGiozqI1VXBUYHrld8yO_NRvXF5AI29oat-AEQHgAzfi04RMN4gAxZKPVNQaOiBCeLZ_SMGWctLDiRSPmoNimEurKmv5Y0QOdmHFInVw6iOi_OI11qXzPkYlWmF4ZvpgihVhiwk8IErexAjXz8P025Xf0qmuOYNk1EcW2PP-HpkwBaxU4liHh7x6G55Uk94RHHWZHztH=s1024-rj')",
            time: "18:00",
            top: false,
            active: false
        });
        this.addProgram({
            title: "Nuit à l'hotel SadoroFor",
            description: "Nous savons tous ce qui se passe ici",
            image: "url('https://i.pinimg.com/736x/00/7b/95/007b95b06cba02c6368dccf109de7864.jpg')",
            time: "20:00",
            top: false,
            active: false
        });
    }

    addProgram(program: ValentinProgram){
        const nexId = this.programs().length + 1;
        program.index = nexId;

        this.programs.update(programs => [...programs, program]);
    }
}