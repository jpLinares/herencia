function C(){
}
    prototype.x=function(){
        return 1;
};

function CC(){
}
    prototype.y=function(){
        return 2;
};
Object.setPrototypeOf(CC.prototype,C.prototype);

const cc = new CC();
console.log(CC.x());
console.log(CC.y());
console.log(CC instanceof C);