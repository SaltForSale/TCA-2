//wait for doc to get ready before making call

$(document).ready(function () {
    //mae a get request to be ready before making call
    $.getJSON("schedule.json", function (data) {
        //store schedule data to local variable
        let scheduleData = data.schedule;

        //populate table
        populateTable(scheduleData);

    });
    //function to do what it says :P
    function populateTable(scheduleData) {
        $("#schedule-table-body").empty();

        $.each(scheduleData, function (i, schedule) {
            let row = "<tr>";
            row += "<td>" + schedule.class_name + "</td>";
            row += "<td>" + schedule.teacher_name + "</td>";
            row += "<td>" + schedule.room_number + "</td>";
            row += "<td>" + schedule.days.join(', ') + "</td>";
            row += "</tr>";

            $('#schedule-table-body').append(row)
        })

    }
}

)