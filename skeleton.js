class Skeleton {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Skeleton.png"), 0, 0, 47, 65, 4, 0.2);

        this.x = 1000;
        this.y = 600;

        this.speed = 250;
    };

    update() {
        this.x -= this.speed * this.game.clockTick;

        if (this.x < -100) {
            this.x = 1000;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}