module.exports = function cycle(callback, array) {
    //console.log(tick);
    let i = 0;

    let timer = setInterval(_ => {
        if(i >= array.length) {
            //clearInterval(timer);
            i = 0;
        }

        callback(array[i]);
        i++;
    }, 10000);
}