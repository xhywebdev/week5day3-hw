function partners() {
    var partners = ['bustour', 'cabinrental', 'campingadv', 'collegetours', 'rentalbike', 'tourgroup']
    for (partner of partners) {
        var img = `<li class="partner"><img src="images/partners/partner-${partner}.png"></li>`;
        document.getElementById("partners").innerHTML += img;
    }
}

partners();