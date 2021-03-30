let outer = document.getElementById('outer');
let maxhight = 500 - 40;
let maxwidth = 1000 - 40;
let boxes = [];
let a = [];
let b = [];

function boxGen(num) {
    for (index = 0; index < num; index++) {
        const dx = dxGen();
        const dy = dyGen();
        const innerdiv = document.createElement('innerDiv');
        outer.append(innerdiv);
        innerdiv.setAttribute("name", 'innerdiv${i}');
        innerdiv.setAttribute(
            "style", 'position:absolute; top:${dy}px; left:${dx}px; background-color:#008b8b; height: 40px; width: 40px;'
        );
        boxes.push(innerdiv);
        moveObject(2, 2, dx, dy, innerdiv, index);
    }
}
console.log(boxes);
boxGen(7);

function dxGen() {
    return Math.floor(Math.random() * maxwidth) + 1;
}

function dyGen() {
    return Math.floor(Math.random() * maxhight) + 1;
}

function moveObject(valx, valy, dx, dy, innerdiv, idx) {
    setInterval(() => {
        dx += valx;
        innerdiv.style.left = dx + "px";

        dy += valy;
        innerdiv.style.top = dy + "px";

        if (dx > maxwidth || dx < 0) {
            valx = valx * -1;
        }
        if (dy > maxhight || dy < 0) {
            valy = valy * -1;
        }
        a[idx] = dx;
        b[idx] = dy;
        for (let i = 0; i < 5; i++) {
            if (!(i === idx)) {
                // console.log(Box);
                if ((a[i] < dx + 40) && (a[i] + 40 > dx) && (b[i] < dy + 40) && (b[i] + 40 > dy)) {
                    valx = valx * -1;
                    valy = valy * -1;
                }
            }
        }
    }, 12);
}


function collision(dx, dy, valx, valy, idx) {

}