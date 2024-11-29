
$(document).ready(function () {
    $.getJSON("assets/db.json", function (result) {
        var tam = result.movies.length / 10;
        for (var cont = 1; cont <= tam + 1; cont++) {
            $(".pagination").append('<li id="pag' + cont + '" class="page-item"><button class="page-link">' + cont + '</button></li>');
            if ($("#pag1")) {
                $("#pag1").addClass("active");
            }
        }

    });
    mostrarCards(1);
    $("#pag1").addClass("active");
    $(document).on('click', '.page-item', function () {
        $(".page-item").removeClass("active");
        $(this).addClass("active");
        var posicao = $(this).text();
        mostrarCards(posicao);
    });
});

var verificador = 0;
function mostrarCards(posicao) {

    cardCategoria = jQuery('#cardCategoria0');
    if (posicao === 1 || verificador === 1) {
        for (var cont = 1; cont < 5; cont++) {
            $("#cardCategoria" + cont).remove();
        }
        for (var cont = 1; cont <= 9; cont++) {
            cardCategoria.clone().appendTo("#listaCategoria");
            cardCategoria.attr('id', ('cardCategoria' + cont));
            verificador = 0;
        }
    }
    if (posicao > 14) {
        for (var cont = 1; cont <= 9; cont++) {
            $("#cardCategoria" + cont).remove();
            verificador = 1;
        }
        for (var cont = 1; cont <= 6; cont++) {
            cardCategoria.clone().appendTo("#listaCategoria");
            cardCategoria.attr('id', ('cardCategoria' + cont));
        }
    }

    cont = 0;
    var indice = 10 * posicao - 10;
    $.getJSON("assets/db.json", function (result) {
        var totalFilmes = result.movies.length;
        if (posicao < 15) {
            for (var i = indice; i <= indice + 10; i++) {
                $('#cardCategoria' + [cont]).find("h4").text(result.movies[i].title);
                $('#cardCategoria' + [cont]).find("img").on('error', function () {
                    $(this).attr('src', 'img/erroimg404.jpg');
                }).attr('src', result.movies[i].posterUrl);
                var textoOriginal = "," + result.movies[i].genres;
                var textoModificado = textoOriginal.replace(/,/g, ' ');
                $('#cardCategoria' + [i]).attr('class', (textoModificado));
                cont++;
            }
        } else {
            for (var i = indice; i <= indice +5; i++) {
               $('#cardCategoria' + [cont]).find("h4").text(result.movies[i].title);
                $('#cardCategoria' + [cont]).find("img").on('error', function () {
                    $(this).attr('src', 'img/erroimg404.jpg');
                }).attr('src', result.movies[i].posterUrl);
                var textoOriginal = "," + result.movies[i].genres;
                var textoModificado = textoOriginal.replace(/,/g, ' ');
                $('#cardCategoria' + [i]).attr('class', (textoModificado));
                cont++;
            }
        }

    });


}