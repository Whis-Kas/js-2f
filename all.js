let clock = document.querySelector("#clock-body");

let a = 1;
let b = 13;
let str = `
    <div class="clock-hour"></div>
    <div class="clock-min"></div>
    <div class="clock-sec">
        <svg width="100%" height="100%">
            <polyline points="8,9 8,50 15,60 1,80 8,90 8,126"
            style="fill:none; stroke:#A0E605; stroke-width:1;" />
        </svg>
    </div>
`;

for(let i=1; i<=36; i++){
    if( (i-3)%6 == 0 ){
        str +=`
            <div class="clock-time clock-time-big" style="transform: rotate(${i*5+90}deg)"></div>
        `
    }
    else if(i%6 == 0){

        str +=`
            <div class="clock-time-boom" style="transform: rotate(${i*5+90}deg)">
                <div class="clock-time-five">
                    <div style="transform: rotate(-${i*5+90}deg)">${i/6+12}</div>
                    <div style="transform: rotate(-${i*5+90}deg)">${i/6}</div>
                </div>
                <div class="clock-time-five">
                    <div style="transform: rotate(-${i*5+90}deg)">${i/6+6}</div>
                    <div style="transform: rotate(-${i*5+90}deg)">${i/6+18}</div>
                </div>
            </div>
        `
    }
    else{
        str +=`
            <div class="clock-time" style="transform: rotate(${i*5+90}deg)"></div>
        `
    }

}
clock.innerHTML = str;

let hourDeg = document.querySelector(".clock-hour");
let minDeg = document.querySelector(".clock-min");
let secDeg = document.querySelector(".clock-sec");
setInterval(time, 100);
function time(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hourDeg.style.transform = `rotate(${hour*30 + 30*min/60}deg)`; //一小時30度乘上總共跑了幾分鐘
    minDeg.style.transform = `rotate(${min*6 + 6*sec/60}deg)`; //一分鐘6度乘上總共跑了幾秒鐘
    secDeg.style.transform = `rotate(${sec*6}deg)`
}