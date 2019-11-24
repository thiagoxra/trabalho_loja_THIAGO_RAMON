if (JSON.parse(localStorage.getItem("escolhidos")) == null)
var carrinhoCompras = []; 
else
var carrinhoCompras = JSON.parse(localStorage.getItem("escolhidos"));                  

$(document).ready(function (){
    var escolhidos = JSON.parse(localStorage.getItem("escolhidos"));
    $('#qtd').html(carrinhoCompras.length);                  
});

//criacao de itens do carrosel
$.getJSON('json/Produtos.json', function (t) {
    var item = '';
    $.each(t, function (index, value){
        if(index>2){
            return false;
        }
        if(index==0){
            item +='<div class="carousel-item active" data-interval="10000">'
        }
        else{
            item +='<div class="carousel-item" data-interval="10000">'
        }        
        item +='<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#343A40"/></svg>'+
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
        '<div class="card text-white bg-dark border-light mb-4 shadow-sm">'+
        '<img src="img/'+value.image+'" class="card-img-top" alt="'+value.marca+'" width="200px" height="300px">'+
            '<div class="card-body">'+
            '<div style="width:300px;height:50px"><p class="card-text">'+value.nome+'</p></div>'+
            '<div style="width:300px;height:40px"><p class="card-text">R$' + parseFloat(value.preco).toFixed(2) + '</p></div>'+            
            '<div class="d-flex justify-content-between align-items-center">'+
                '<div class="btn-group">'+
                '<button type="button" id = "'+value.codigo+'" class="btn btn-sm btn-outline-light adicionar">Adicionar ao Carrinho</button>'+
                '</div>'+
                '<div style="text-align:center;width:100px;height:25px"><small>'+value.marca+'</small></div>'+
            '</div>'+
            '</div>'+
        '</div>'+
        '</div>'        
    });
    item += '</div>';
    $('#itens').append(item);
});     

//adicionar itens no carrinho
$(document).ready(function (){
    $('.adicionar').click(function(event){
        var itemAdicionado = event.target.id;
        $.getJSON('json/Produtos.json', function (data) {
            $.each(data, function(index, value) {
                if(value.codigo == itemAdicionado) {
                    carrinhoCompras.push(value);
                    localStorage.setItem("escolhidos",JSON.stringify(carrinhoCompras));
                    $('#qtd').html(carrinhoCompras.length);                    
                }
            });
        });
    });
});