$(document).ready(function () {
    var data = datatable['data'];
    for (var i = 0; i < data.length; i++) {
        //iterate to bind svg with data
        var obj = data[i];
        var o_id = (obj['Constituency']).replace(/ /g, '_');
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
        var info = "<b>" + $(this).data("Candidate") + "</b>" +
        "<br>" + "<b>" + $(this).data("Party") + "</b>" +
        "<br> Constituency: " + $(this).data("Constituency") + 
        "<br> Total assets: " + $(this).data("Total_assets") + " crore" +
        "<br> Total cases: " + $(this).data("Total_Cases") +
        "<br> Murder charges: " + $(this).data("Murder_charges") + 
        "<br> Kidnapping charges: " + $(this).data("Kidnapping_charges") +
        "<br> Dacoity charges: " + $(this).data("Dacoity_charges") +
        "<br> Crimes against women: " + $(this).data("Crimes_women");
        
        $('#info_box').html(info);
	});
    
    
})