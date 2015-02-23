jQuery(document).ready(function(){
    operando="";
    operador="";
    $('.num').click(function(){
        valor=$(this).html();
        if ($('#display').html()!=0){
           $('#display').html($('#display').html()+valor); 
        }else{
            $('#display').html(valor);
        }
    })

    $('.oper').click(function(){
        operando=$('#display').html();
        operador=$(this).html();
        if(operador=='x')
            operador='*'
        $('#display').html(0);
    })  

    $('.igual').click(function(){
        $('#display').html(eval(operando+operador+$('#display').html()));
    })

    $('.signo').click(function(){
        $('#display').html(parseFloat($('#display').html())*-1);
        
    })   

    $('.c').click(function(){
        $('#display').html(0);   
    })

    $(document).keypress(function(e) {
        if(parseInt(e.key) | e.key==0){
            if ($('#display').html()!=0){
                $('#display').html($('#display').html()+e.key); 
            }else{
                $('#display').html(e.key);
            }
        }
    })  

});
