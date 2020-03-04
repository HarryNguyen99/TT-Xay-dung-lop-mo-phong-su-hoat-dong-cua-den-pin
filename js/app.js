// Khai báo lớp Battery
/* Bởi vì lớp FlashLamp có sử dụng lớp Battery, hay nói cách khác, lớp FlashLamp phụ thuộc vào lớp Battery,
   do đó chúng ta sẽ bắt đầu khai báo lớp Battery trước. */
let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
};

//Khai báo lớp FlashLamp
let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    }
};

//Thử nghiệm
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>");
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>");
flashLamp.turnOff();
flashLamp.light();