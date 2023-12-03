$(document).ready(function () {
    $(".container").animate({ width: "80%" }, 2000, function () {
        $(".container").animate({ height: "90vh" }, 2000, function () {
            $("h1").fadeIn(1500 , function () {
                $(".box").eq(0).fadeIn(1500 , function () {
                    $(".box").eq(1).fadeIn(1500 , function () {
                        $(".box").eq(2).fadeIn(1500)
                    })
                })
            })
        })
    })
})