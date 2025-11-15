(function() {
    var gTagScript = document.createElement('script');
    gTagScript.async = true;
    gTagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-W44Q00NKCL";
    document.head.appendChild(gTagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-W44Q00NKCL');
})();