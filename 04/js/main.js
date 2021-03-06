$(document).ready(function(){

    $('#modal').modal({
       show : true
    });

    $('#test-form').on('submit', function(e){
        e.preventDefault();
        var formData = $(this).serialize();
        var form = $(this);
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "script.php",
            data: formData,
            success: function(data){
                if (data.status) {
                    $('#success').modal();
                    console.log(data.message);
                } else {
                    $('#error').modal();

                    $('#error').on('hidden.bs.modal', function (e) {
                        form.trigger('reset');
                    });
                }
            },
            error: function(){
                alert('error');
            },
            dataType: 'json'
        });
    });
});