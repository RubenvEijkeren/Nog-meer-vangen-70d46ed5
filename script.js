function gooiButton() {
    try {
        bal.gooi();
        document.querySelector("p").innerText = "";
    }
    catch(exception) {
        if (exception instanceof TypeError) {
              document.querySelector("p").innerText = "Een error van type: TypeError";
        }
        else if (exception instanceof ReferenceError) {
            document.querySelector("p").innerText = "Een error van type: ReferenceError";
        }
    }
}

function vangButton() {
    try {
        bal.vang();
        document.querySelector("p").innerText = "";
    }
    catch(exception) {
        if (exception instanceof TypeError) {
              document.querySelector("p").innerText = "Een error van type: TypeError";
        }
        else if (exception instanceof ReferenceError) {
            document.querySelector("p").innerText = "Een error van type: ReferenceError";
        }
    }
}

function resetButton() {
    document.querySelector("p").innerText = "";
    bal.reset();
}

var bal = {
    canvasBal: constructBal(),
    balPositie: "links",

    gooi: function () {
        if (this.balPositie != "links") {
            throw Error("bal in verkeerde positie")
        }
        this.draw(300, 50);
        this.balPositie = "midden";
    },

    vang: function () {
        if (this.balPositie != "midden") {
            throw TypeError("bal in verkeerde positie")
        }
        this.draw(500, 250);
        this.balPositie = "rechts";
    },

    reset: function () {
        this.draw(100, 250);
        this.balPositie = "links";
    },

    draw: function (x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    },

    referenceErrorType: function() {
        this.bestaatNiet();
    },

    typeErrorType: function() {
        const a = 10;
        a = 20;
    },
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}