if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style")
    msViewportStyle.appendChild(
        document.createTextNode(
            "@-ms-viewport{width:auto!important}"
        )
    )
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

$(function () {
/*banner*/
    $('.carousel').carousel();
/*service*/
    $('.service').carousel();

/*solution*/
    $('#solution li a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    /*navbar-nav*/

})

