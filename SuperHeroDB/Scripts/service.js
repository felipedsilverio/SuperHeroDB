function getAllHeroes() {
    $.ajax({
        url: "Service/SuperHeroService.svc/GetAllHeroes",
        type: "GET",
        dataType: "json",
        success: function(result) {
            heroes = result;
            drawHeroTable(result);
        }
    });
}

function addHero() {
    var newHero = {
        "FirstName": $("#addFirstname").val(),
        "LastName": $("#addLastname").val(),
        "HeroName": $("#addHeroName").val(),
        "PlaceOfBirth": $("#addPlaceOfBirth").val(),
        "Combat": $("#addCombatPoints").val()
    };

    $.ajax({
        url: "Service/SuperHeroService.svc/AddHero",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(newHero),
        success: function () {
            showOverview();
        }
    });
}

function putHero() {
    updateHero.FirstName = $("#updateFirstname").val();
    updateHero.LastName = $("#updateLastname").val();
    updateHero.HeroName = $("#updateHeroname").val();
    updateHero.PlaceOfBirth = $("#updatePlaceOfBirth").val();
    updateHero.Combat = $("#updateCombatPoints").val();

    $.ajax({
        url: "Service/SuperHeroService.svc/UpdateHero/" + updateHero.Id,
        type: "PUT",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(updateHero),
        success: function () {
            showOverview();
        }
    });

}

function deleteHero(heroId) {
    $.ajax({
        url: "Service/SuperHeroService.svc/DeleteHero/" + heroId,
        type: "DELETE",
        dataType: "json",
        success: function (result) {
            getAllHeroes();
        }
    });
}

function searchHero() {
    var searchText = $("#searchText").val();
    

    $.ajax({
        url: "Service/SuperHeroService.svc/SearchHero/" + searchText,
        type: "GET",
        dataType: "json",
        success: function (result) {
            heroes = result;
            drawHeroTable(result);
        }
    });

}