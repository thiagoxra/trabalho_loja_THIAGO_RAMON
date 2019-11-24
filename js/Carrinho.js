if (JSON.parse(localStorage.getItem("escolhidos")) == null)
var carrinhoCompras = []; 
else
var carrinhoCompras = JSON.parse(localStorage.getItem("escolhidos"));        

function start(){
    $('#qtd').html(carrinhoCompras.length); 
    
    var total = 0;

    $('#carrinho').html('');
    $.each(carrinhoCompras, function (index, value){
        $('#carrinho').append('<li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action list-group-item-light">'+
        '<div style="width: 60px;"><img src="img/'+value.image+'" class="card-img-top" alt="'+value.marca+'" width="100px" height="70px"></div>'+
        '<div style="padding-left: 10px; width: 600px;">'+value.nome+'</div>'+
        '<div style="width: 100px;"><span class="badge badge-success badge-pill">R$' + parseFloat(value.preco).toFixed(2) + '</span></div>'+
        '<div><a href="carrinho.html"><button type="button" id = "'+value.codigo+'" class="excluir btn btn-sm btn-outline-danger">Excluir</button></a></div></li>');
        total +=value.preco;        
    });
    $('#carrinho').append('<li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark list-group-item-action ">'+
    '<div style="padding-left: 10px; width: 600px;"> TOTAL </div> '+
        '<span class="badge badge-danger badge-pill">R$' + parseFloat(total).toFixed(2) + '</span></li>');

}

//Criando tela do carrinho e numero de itens no carrinho
$(document).ready(function (){
    start();    
});

//Excluir um item do carrinho
$(document).ready(function(){
    $('.excluir').click(function(event){     
        var itemexcluido = event.target.id;
        $.each(carrinhoCompras, function(index,value){ 
            if(value.codigo == itemexcluido) {    
                carrinhoCompras.splice(index,1);
                localStorage.setItem("escolhidos",JSON.stringify(carrinhoCompras));
                $('#qtd').html(carrinhoCompras.length);
                return false;                 
            }            
        });
    });
});

//Limpar carrinho
$(document).ready(function(){
    $('.limpar').click(function(event){     
        var carrinhoCompras = [];
        localStorage.setItem("escolhidos",JSON.stringify(carrinhoCompras));
    });
});
