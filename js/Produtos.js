var carrinhoCompras = [];

//criacao de itens do carrosel
$.getJSON('json/Produtos.json', function (t) {
    var item = '';
    $.each(t, function (index, value){
        if(index>2){
            return false;
        }
        if(index==0){
            item +='<div class="carousel-item active">'
        }
        else{
            item +='<div class="carousel-item">'
        }        
        item +='<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#999"/></svg>'+
                        '<img src="img/'+value.image+'" class="card-img-top" alt="'+value.marca+'" width="200px" height="300px">'+    
                        '<div class="carousel-caption text-center">'+
                            '<h1>'+value.nome+'</h1>'+
                        '</div>'+
                    '</div>'+
            '</div>'          
    });
    $('#carrosel').append(item);
});

//Criação de produtos
$.getJSON('json/Produtos.json', function (t) {
    var item = '<div class="row" id="itens">';        
    $.each(t, function (index, value){
        item +='<div class="col-md-4">'+
        '<div class="card mb-4 shadow-sm">'+
        '<img src="img/'+value.image+'" class="card-img-top" alt="'+value.marca+'" width="200px" height="300px">'+
            '<div class="card-body">'+'<span id="CodigoProduto" class="'+value.codigo+'"></span>'+
            '<p class="card-text">'+value.nome+'</p>'+
            '<p class="card-text">R$' + parseFloat(value.preco).toFixed(2) + '</p>'+            
            '<div class="d-flex justify-content-between align-items-center">'+
                '<div class="btn-group">'+
                '<button type="button" id = "'+value.codigo+'" class="btn btn-sm btn-outline-secondary adicionar">Adicionar ao Carrinho</button>'+
                '</div>'+
                '<small class="text-muted">'+value.marca+'</small>'+
            '</div>'+
            '</div>'+
        '</div>'+
        '</div>'        
    });
    item += '</div>';
    $('#itens').append(item);
});     

//adicionar item ao carrinho
$(document).ready(function (){
    $('.adicionar').click(function(event){
        var itemAdicionado = event.target.id;
        $.getJSON('json/Produtos.json', function (data) {
            $.each(data, function(index, value) {
                if(value.codigo == itemAdicionado) {
                    carrinhoCompras.push(value);
                    $('#qtd').html(carrinhoCompras.length);                    
                }
            });
        });
    });
});



$(document).ready(function (){
    $.each(carrinhoCompras, function (index, value){
            $('#carrinho').append('<li> '+value+'</li>')
    });
});

//numero de itens no carrinho
$(document).ready(function (){
    $('#mostrar').click(function(event){
        $.each(carrinhoCompras, function (index, value){
            console.log(carrinhoCompras[index].nome);
        });
    });
});


