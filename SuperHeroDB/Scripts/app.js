var heroes = {};
var updateHero = null;

function drawHeroTable(heroList) {
    $tbody = $("#table-body");
    $tbody.empty();
    for (var i = 0; i < heroList.length; i++) {
        $tr = $("<tr>");
        $("<td>").html(heroList[i].FirstName).appendTo($tr);
        $("<td>").html(heroList[i].LastName).appendTo($tr);
        $("<td>").html(heroList[i].HeroName).appendTo($tr);
        $("<td>").html(heroList[i].PlaceOfBirth).appendTo($tr);
        $("<td>").html(heroList[i].Combat).appendTo($tr);
        $("<td>").appendTo($tr).append("<button onclick='editHero(" + heroList[i].Id + ")'>Edit</button>");
        $("<td>").appendTo($tr).append("<button onclick='deleteHero(" + heroList[i].Id + ")'>Delete</button>");
        $tbody.append($tr);
    }
}

function showOverview() {
    $("#heroOverview").show();
    $("#addHeroForm").hide();
    $("#battlefield").hide();
    $("#updateHeroForm").hide();

    getAllHeroes();
}

function showAdd() {
    $("#heroOverview").hide();
    $("#addHeroForm").show();
    $("#battlefield").hide();
    $("#updateHeroForm").hide();
}

function editHero(heroId) {
    showUpdate();
    console.info("Edit " + heroId);
    for (var i = 0; i < heroes.length; i++)
    {
        if (heroes[i].Id == heroId)
        {
            updateHero = heroes[i];
        }
    }

    if (updateHero == null)
    {
        alert("Hero not found!");
        return;
    }
    
    $("#updateFirstname").val(updateHero.FirstName);
    $("#updateLastname").val(updateHero.LastName);
    $("#updateHeroname").val(updateHero.HeroName);
    $("#updatePlaceOfBirth").val(updateHero.PlaceOfBirth);
    $("#updateCombatPoints").val(updateHero.Combat);
}

function showUpdate() {
    $("#heroOverview").hide();
    $("#addHeroForm").hide();
    $("#battlefield").hide();
    $("#updateHeroForm").show();
}

function showBattlefield() {
    $("#heroOverview").hide();
    $("#addHeroForm").hide();
    $("#battlefield").show();
    $("#updateHeroForm").hide();
    $("#fighterSelection").empty();
    $("#fightResult").empty();

    var s1 = $('<select id="fighter1" />');
    var s2 = $('<select id="fighter2" />');
    for (var i = 0; i < heroes.length; i++)
    {
        $('<option />', { value: heroes[i].Id, text: heroes[i].HeroName }).appendTo(s1);
        $('<option />', { value: heroes[i].Id, text: heroes[i].HeroName }).appendTo(s2);
    }
    s1.appendTo($("#fighterSelection"));
    s2.appendTo($("#fighterSelection"));
}

$(document).ready(function () {
    getAllHeroes();
});