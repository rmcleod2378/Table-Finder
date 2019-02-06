"use strict";
$(document).ready(function () {
    let tableSelected;
    $(document).on("click", ".available", function (e) {
        $("form").css("display", "flex");
        tableSelected = e.target
        $(".tablenum").text(`Table Number: ${$(tableSelected).text()}`)
    })

    $(document).on("click", ".close", function () {
        $("form").hide()
    })

    $(document).on("click", ".savebtn", function () {
        $("form").hide()
    })

    $(document).on("click", ".savebtn", function (e) {
        $(tableSelected).removeClass("available").addClass("reserved")
        $(tableSelected).attr("Name", $(".name").val())
        $(tableSelected).attr("size", $(".size").val())
        $("form").hide()
        $(tableSelected).append(`
        <section class = "popup">
            <p>Name:  ${$(tableSelected).attr("name")}</p>
            <p>Size of Party: ${$(tableSelected).attr("size")}</p>
        </section>`)
    })

    $(document).on("mouseenter", ".reserved", function (event) {
        $(event.target).children(1).css("display", "block")
      }).on("mouseleave", ".reserved", (event) => {
        $(".popup").css("display", "none")
      });


});

