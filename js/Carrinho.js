if (JSON.parse(localStorage.getItem("escolhidos")) == null)
var carrinhoCompras = []; 
else
var carrinhoCompras = JSON.parse(localStorage.getItem("escolhidos"));        

function start(){
    $('#qtd').html(carrinhoCompras.length); 
    
    var total = 0;

    $('#carrinho').html('');
    $.each(carrinhoCompras, function (index, value){
        $('#carrinho').append('<li class="list-group-item d-flex justify-content-between align-items-center">'+value.nome+
        '<span class="badge badge-primary badge-pill">R$' + parseFloat(value.preco).toFixed(2) + '</span>'+
        '<a href="carrinho.html"><button type="button" id = "'+value.codigo+'" class="excluir btn btn-sm">Excluir</button></a></li>');
        total +=value.preco;        
    });
    $('#carrinho').append('<li class="list-group-item d-flex justify-content-between align-items-center"> TOTAL '+
        '<span class="badge badge-danger badge-pill">R$' + parseFloat(total).toFixed(2) + '</span></li>');

}

//criando tela do carrinho e numero de itens no carrinho
$(document).ready(function (){
    start();    
});

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
