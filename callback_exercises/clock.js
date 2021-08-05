class Clock {

    constructor() {
        const date = new Date();

        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
        this.printTime();

        setInterval(this._tick.bind(this), 1000);

    }

    printTime() {
        console.log(`${this.hour}:${this.minute}:${this.second}`)
    }

    _tick() {
        this.second += 1;

        if (this.second === 60) {
            this.second = 0;
            this.minute += 1;
        }
        if (this.minute === 60) {
            this.minute = 0;
            this.hour += 1;
        }

        if (this.hour === 24) {
            this.hour = 0;
        }

        this.printTime();

    }

}

const clock = new Clock();