module.exports = function cycle(callback, length, interval) {
    //console.log(tick);
    let i = 0;

    let timer = setInterval(_ => {
        if(i >= length) {
            i = 0;
        }

        callback(i);
        i++;
    }, interval);
}