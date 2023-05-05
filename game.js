class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "CLASSROOM 1-F");
    }

    onEnter() {
        this.cameras.main.setBackgroundColor('#830000');
        this.showMessage("Everything is fuzzy.....");
        let clip = this.add.text(this.w * 0.6, this.w * 0.3, "dĔšĸ")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's all scratched up, like someone tried to open it."))
            .on('pointerdown', () => {
                
                this.showMessage("The desk flies open, not much but some mold and...");


                this.tweens.add({
                    targets: clip,
                    y: '+=' + this.s,
                    repeat: 0,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 80
                });


                let lockpick = this.add.text(this.w*0.6, this.w*0.4,"lockpick")
                    .setFontSize(this.s*2)
            //.setAlpha([0])
                    .setInteractive()
                    .on('pointerover',() => 
                    {
                //console.log(lockpick._alpha);
                        this.showMessage("It looks used, but should get the job done.")


                    })
                    .on('pointerdown',() =>{
                        this.gainItem('Lockpick')
                        this.showMessage("Seems useful enough...")
                        this.tweens.add({
                            targets: lockpick,
                            alpha:{from: 1, to: 0},
                            duration: 500,
                            onComplete: () => lockpick.destroy()
                        })

                    
                    });
                    
                    

                //lockpick.setAlpha([1]);;
            });
        let symbol = this.add.text(this.w * 0.1, this.w * 0.1, "s͓̽y͓̽m͓̽b͓̽o͓̽l͓̽")
            .setFontSize(this.s * 1)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's written in blood...and sharpie??? Looks like some kind of prayer circle."))

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })SS

        let door = this.add.text(this.w * 0.1, this.w * 0.05, "DOOR")
            .setFontSize(this.s * 3)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Lockpick")) {
                    this.showMessage("Maybe I can jig it...");
                } else {
                    this.showMessage("It's locked. Damn.");
                }
                this.tweens.add
                ({
                    targets:door,
                    x: '+=' + this.s,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 300


                })
            })
            .on('pointerdown', () => {
                if (this.hasItem("Lockpick")) {
                    this.loseItem("Lockpick");
                    this.showMessage("*grunt*");
                    door.setText("OPEN DOOR");
                    this.gotoScene('trans1');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "HALLWAY");
    }
    onEnter() {
        let door =this.add.text(this.w * 0.2, this.w * 0.5, "𝒞𝐿𝒜𝒮𝒮𝑅𝒪𝒪𝑀 𝒟𝒪𝒪𝑅", {color: "#bb6d03"})
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("I could go back to sleep...");
                this.tweens.add({
                    targets: door,
                    x: "+=" + this.s,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 300
                })
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        
        let clip = this.add.text(this.w * 0.1, this.w * 0.1, "LOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER\nLOCKER", {color:"#ff2727" })
            .setFontSize(this.s*2.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("They're covered in blood...But you notice something inside."))
            .on('pointerdown', () => {
                
                this.showMessage("The inside is suprisingly clean, aside from the dead roach.");


                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 0,
                    yoyo: true,
                    ease: 'Bounce.inOut',
                    duration: 800
                });


                let scrap = this.add.text(this.w*0.2, this.w*0.2,"𝓢𝓒𝓡𝓐𝓟", {color: "#b8fffc"})
                    .setFontSize(this.s*2)
            //.setAlpha([0])
                    .setInteractive()
                    .on('pointerover',() => 
                    {
                //console.log(lockpick._alpha);
                        
                        this.showMessage("'REALITY IS RELATIVE'...alright?")


                    })
                    .on('pointerdown',() =>{
                        this.cameras.main.setBackgroundColor('#830000');
                        this.gainItem('scrap')
                        this.showMessage("You hear a giggle in the distance...maybe you should book it")
                        this.tweens.add({
                            targets: scrap,
                            alpha:{from: 1, to: 0},
                            duration: 500,
                            onComplete: () => scrap.destroy()
                        })

                    
                    });
                    
                    

                //lockpick.setAlpha([1]);;
            });
            let bathroom = this.add.text(this.w * 0.6, this.w * 0.05, "BATHROOM", {color:"#c2bbb1" })
            .setFontSize(this.s*2)
            .setInteractive()
            .on('pointerover', () =>
            {
                this.showMessage("Checking my hair couldn't hurt.")


            })
            .on('pointerdown', () =>{
                this.gotoScene('bath')
            })
            let caf = this.add.text(this.w * 0.3, this.w * 0.05, "CAFETERIA", {color:"#6361ff" })
            .setFontSize(this.s*2)
            .setInteractive()
            .on('pointerover', () =>
            {
                this.showMessage("There's an odd smell coming from here...")
                this.tweens.add({
                    targets:caf,
                    y: "+=" + this.s,
                    repeat: 0,
                    yoyo: true,
                    ease: 'Quintic.inOut',
                    duration: 800
                })


            })
            .on('pointerdown', () =>{
                this.gotoScene('caf')
            })

        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload()
    {
        
    }
    create() {
        //this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        //this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        let blob = 'Darkness. Nothing but darkness. \nYou feel a sense of falling.\nBefore you hit the ground,\nyou hear a slam.'
        let introtext = this.add.text(960, 500, blob, { font: 'bold 100px sans-serif'} ).setOrigin(0.5, 0.5);
        this.add.text(560, 900, "click to wake up.", { font: 'bold 100px sans-serif'} ).setOrigin(0.5, 0.5);

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}
class TRANS1 extends Phaser.Scene {
    constructor() {
        super('trans1')
    }
    preload()
    {
        
    }
    create() {
        //this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        //this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        let blob = "Nobody is here, there's a long corridor with\nlockers coating each wall.\nYou spot some papers on the floor.\nIn the distance, a bright blue door."
        let introtext = this.add.text(960, 500, blob, { font: 'bold 80px sans-serif'} ).setOrigin(0.5, 0.5);
        this.add.text(560, 900, "click to continue.", { font: 'bold 100px sans-serif'} ).setOrigin(0.5, 0.5);

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo2'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    //scene: [Intro, Demo1, Demo2, Outro],
    scene: [Demo2],
    title: "Adventure Game",
    font: 'sans-serif'
});

