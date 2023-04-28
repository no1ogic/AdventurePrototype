let currentScene;

function show(msg) {
    currentScene.showMessage(msg);
}

function visit(key) {
    currentScene.gotoScene(key);
}

function has(item) {
    return currentScene.hasItem(item);
}

function gain(item) {
    return currentScene.gainItem(item);
}

function lose(item) {
    return currentScene.loseItem(item)
}

function item(name) {
    let obj = (function () {
        return this.add.text(this.h * (0.1 + 0.8 * Math.random()), this.h * (0.1 + 0.8 * Math.random()), name)
            .setOrigin(0.5, 0.5)
            .setFontSize(this.s * 4)
            .setInteractive({ useHandCursor: true });
    }).bind(currentScene)();
    let wrapper = {
        feel(arg) {
            if (typeof arg == 'string') {
                obj.on('pointerover', () => currentScene.showMessage(arg));
            } else {
                obj.on('pointerover', () => arg.bind(obj)(obj));
            }
            return wrapper;
        },
        poke(arg) {
            if (typeof arg == 'string') {
                obj.on('pointerdown', () => currentScene.showMessage(arg));
            } else {
                obj.on('pointerdown', () => arg.bind(obj)(obj));
            }
            return wrapper;
        }
    };
    return wrapper;
}

function MiniAdventureScript(spec) {
    let scenes = {}
    for (let [k, v] of Object.entries(spec)) {
        let fn = v;
        class Generated extends AdventureScene {
            constructor() {
                super(k, '');
            }
            onEnter() {
                currentScene = this;
                fn.bind(this)();
            }
        }
        scenes[k] = Generated;
    }
    let sceneArray = [];
    sceneArray.push(scenes['begin']);
    delete scenes['begin']
    for (let clz of Object.values(scenes)) {
        sceneArray.push(clz);
    }

    let game = new Phaser.Game({
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1920,
            height: 1080
        },
        scene: sceneArray,
        title: "Adventure Game",
    });
}