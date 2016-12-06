module.exports = function launchHUD(tick) {
    //console.log(tick);
    let currentSite = 0;

    let sites = [
        { name: 'JIRA', url: 'http://www.google.com' },
        { name: 'YouTube', url: 'http://www.youtube.com' }
    ];

    let timer = setInterval(_ => {
        if(currentSite >= sites.length) {
            //clearInterval(timer);
            currentSite = 0;
        }

        tick(sites[currentSite].name);
        currentSite++;
    }, 10000);
}