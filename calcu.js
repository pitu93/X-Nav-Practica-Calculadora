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

    $('.c').click(function(){
        $('#display').html(0);   
    })

    $(document).keypress(function(e) {
        console.log(e.key);
        if(parseInt(e.key)){
            if ($('#display').html()!=0){
                $('#display').html($('#display').html()+e.key); 
            }else{
                $('#display').html(e.key);
            }
            
        }else if(e.key=='Enter'){
            $('#display').html(eval(operando+operador+$('#display').html()));
        }
    })  

});
