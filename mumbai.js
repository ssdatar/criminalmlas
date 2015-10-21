function party_name_to_class(x){
    return x.replace(/ /g, '_');
}


var PARTY_ATTRIBUTES = ["Constituency", "Total_assets", "Total_Cases",
"Murder_charges", "Kidnapping_charges", "Dacoity_charges", "Crimes_women"]


$(document).ready(function () {
    var data = datatable['data'];

    $('#info_box').hide();

    for (var i = 0; i < data.length; i++) {
        //iterate to bind svg with data
        var obj = data[i];
        var o_id = party_name_to_class(obj['Constituency']);
        $('#' + o_id).data({
            'Candidate': obj['Candidate'],
            'Constituency': obj['Constituency'],
            'Party': obj["Party"],
            'Total_assets': obj['Total_assets'],
            'Total_Cases': obj['Total_Cases'],
            'Murder_charges': obj['Murder_charges'],
            'Kidnapping_charges': obj['Kidnapping_charges'],
            'Dacoity_charges': obj['Dacoity_charges'],
            'Crimes_women': obj['Crimes_women']
        });
    }


    $(".mumbai").mouseover(function (e) {
        $('#info_box').show(300)

        var item = $(this);
        $('#info_box .party-name').addClass( party_name_to_class(item.data("Party")));
        $('#info_box .candidate-name').text(item.data("Candidate"));
        $('#info_box .party-name').text(item.data("Party"));
        for(var i = 0, x = PARTY_ATTRIBUTES.length; i < x; i++){
            var att = PARTY_ATTRIBUTES[i];
            var val = item.data(att);
            $("#info_table ." + att + ' .value').text(val);
        }

    });

})


        // var info = "<b>" + $(this).data("Candidate") + "</b>" +
        // "<h5 class='party-name'>" + $(this).data("Party") + "</h5>" +
        // "<table>" +
        // "</table>"

        // "<br> Constituency: " + $(this).data("Constituency") +
        // "<br> Total assets: " + $(this).data("Total_assets") + " crore" +
        // "<br> Total cases: " + $(this).data("Total_Cases") +
        // "<br> Murder charges: " + $(this).data("Murder_charges") +
        // "<br> Kidnapping charges: " + $(this).data("Kidnapping_charges") +
        // "<br> Dacoity charges: " + $(this).data("Dacoity_charges") +
        // "<br> Crimes against women: " + $(this).data("Crimes_women");

