function party_name_to_class(x){
    return x.replace(/ /g, '_');
}

var PARTY_ATTRIBUTES = ["Constituency", "Total_assets", "Total_Cases",
"Murder_charges", "Kidnapping_charges", "Dacoity_charges", "Crimes_women"]


$(document).ready(function () {
    var data = datatable['data'];

    $('#info_box').hide();

    for (var i = 0; i < data.length; i++) {
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
        $('#info_box').show(300);

        var item = $(this);
        $('#info_box .party-name').addClass( party_name_to_class(item.data("Party")));
        $('#info_box .candidate-name').html("<b>" + item.data("Candidate") + "</b>");
        $('#info_box .party-name').html("<b>" + item.data("Party") + "</b>");
        for(var i = 0, x = PARTY_ATTRIBUTES.length; i < x; i++){
            var att = PARTY_ATTRIBUTES[i];
            var val = item.data(att);
            $("#info_table ." + att + ' .value').text(val);
        }

    });

})