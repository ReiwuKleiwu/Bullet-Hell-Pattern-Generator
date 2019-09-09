class bullet {
    constructor(x, y, direction, speed, acceleration, curve, ttl) {
        this.x = x; // X of spawning point
        this.y = y; // Y of spanwing point
        this.direction = direction;
        this.speed = speed; //Speed of bullet
        this.acceleration = acceleration; //Acceleration of bullet
        this.curve = curve;
        this.dirX; // X Direction of bullet
        this.dirY; // Y Direction of bullet
        this.ttl = ttl;
        this.tick = 0;
    }



    spawn() { //Spawn a bullet
        point(this.x, this.y);
    }


    update() { //update a bullets coordinates
        this.tick++;

        this.direction = this.direction + this.curve; //Update direction using the curve
        this.speed = this.speed + this.acceleration; //Update speed using the acceleration

        this.dirX = bullet.xDir(this.direction);
        this.dirY = bullet.yDir(this.direction);

        this.x = (this.x + this.dirX * this.speed); //Update a bullets X position
        this.y = (this.y + this.dirY * this.speed); //Update a bullets Y Position

        //Check whether or not a bullet is off-screen
        if (this.x > 640 || this.x < -640) {
            delete(this);
        } else if (this.y > 360 || this.y < -360) {
            delete(this);
        }
        else if(this.tick > this.ttl)
        {
            delete(this);
        } else {
            strokeWeight(5);
            point(this.x, this.y);
        }

    }

    //Trigonometry functions
    static xDir(angle) {
        let radians = angle * PI / 180;
        return cos(radians);
    }

    static yDir(angle) {
        let radians = angle * PI / 180;
        return -sin(radians);

    }



}