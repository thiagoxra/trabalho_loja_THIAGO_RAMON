//criando tela do carrinho
$(document).ready(function (){
    var escolhidos = JSON.parse(localStorage.getItem("escolhidos"));
    var total = 0;
    $.each(escolhidos, function (index, value){
        $('#carrinho').append('<li class="list-group-item d-flex justify-content-between align-items-center">'+value.nome+
        '<span class="badge badge-primary badge-pill">R$' + parseFloat(value.preco).toFixed(2) + '</span>'+
        '<button type="button" id = "'+value.codigo+'" class="btn btn-sm adicionar">Excluir</button></li>');
        total +=value.preco;
    });
    $('#carrinho').append('<li class="list-group-item d-flex justify-content-between align-items-center"> TOTAL '+
        '<span class="badge badge-danger badge-pill">R$' + parseFloat(total).toFixed(2) + '</span></li>');
});

//numero de itens no carrinho
$(document).ready(function (){
    var escolhidos = JSON.parse(localStorage.getItem("escolhidos"));
    $('#qtd').html(escolhidos.length);                  
});

$(document).ready(function (){
    $('.salvarcarrinho').click(function(event){
        localStorage.setItem("escolhidos",JSON.stringify(escolhidos));
    });
});

