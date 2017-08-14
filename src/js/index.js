$(document).ready(function () {
    // api: https://whatdoestrumpthink.com/api-docs/index.html?javascript#get-a-random-trump-quote, no authentifizierung nötig
    function getQuote() {
        $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function (data, status) {
            console.log(data);
            $('#text-quote').text(data.message);
            $('#trump').text("DONALD TRUMP");       // save isch save
        });
    }
    getQuote();
    $("#next").click(getQuote);
});