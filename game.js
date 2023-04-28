MiniAdventureScript({

    begin() {
        item("🐁").feel("(fuzzy)").poke("*squeak*");

        item("🔑").feel("(cool to touch)").poke(it => {
            show("*swipe*");
            gain("key");
            it.destroy();
        })

        item("🚪")
            .feel(() => has("key") ? show("(unlocked)") : show("(locked)"))
            .poke(it => {
                if (has("key")) {
                    lose("key");
                    show("*creak*");
                    this.tweens.add({
                        targets: it,
                        scale: 3
                    });
                    visit('anotherScene');
                } else {
                    show("*rattle*");
                }
            });
    },

    anotherScene() {
        gain("sense of completion");
        item("the end").poke(() => visit('begin'));
    }
});