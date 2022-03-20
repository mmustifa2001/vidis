var CPBDomainsPass=[];

(function() {
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    var CPBDomainsTest = shuffle([
        'nextkon.com',
        'bitclinks.com',
        'cpbldi.com',
        'bitsc.io',
        'cpbild.co',
        'cpbld.co',
        'cpbitsl.com',
        'ifreecards.com',
        'dwnlds.co',
        'cldoffers.net',
        'cbldc.io',
        'd1xkyo9j4r7vnn.cloudfront.net',
    ]);
    var CPBDomainsTestJS = shuffle([
        'd13nu0oomnx5ti.cloudfront.net',
    ]);

    function addScriptToHead(url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.getElementsByTagName('body')[0].appendChild(script);
    }

    setTimeout(function () {
        for(var i = 0; i < CPBDomainsTest.length; i++){
            var domain=CPBDomainsTest[i];
            var url="https://"+domain+"/public/external/t2.php?t="+(new Date()).getTime()+"&u=1&d="+encodeURI(domain);
            addScriptToHead(url);
        }
    },10);
    setTimeout(function () {
        for(var i = 0; i < CPBDomainsTestJS.length; i++){
            var domain=CPBDomainsTestJS[i];
            var url="https://"+domain+"/t2.js";
            addScriptToHead(url);
        }
    },10);

    setTimeout(function () {
        if(CPBDomainsPass.length){
            var send="";
            for(var i = 0; i < CPBDomainsPass.length; i++){
                var domain=CPBDomainsPass[i];
                if(CPBDomainsTestJS.indexOf(domain) === -1){
                    send=domain;
                }
            }
            var all=CPBDomainsTest.concat(CPBDomainsTestJS);
            if(send.length){
                var url="https://"+send+"/public/api/t3.php?t="+(new Date()).getTime()+"&d="+encodeURI(CPBDomainsPass.join(','))+"&d2="+encodeURI(all.join(','));
            }
            addScriptToHead(url);
        }
    },3000);


    window['CPBDomainsPass']=[];
    window['CPBDomainGetDomain']=function (url) {
        var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        return matches && matches[1];  // domain will be null if no match is found
    }

})();


