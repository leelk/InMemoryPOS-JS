$(document).ready(function () {

    loadCustomers(0);
    initializePagination();

});

function loadCustomers(page) {
    $("#tbl-students tbody tr").remove();
    var startingIndex = (page * 5);
    for (var i = startingIndex; i < (startingIndex + 5); i++) {

        if (i == customers.length) break;

        var html = '<tr>' +
            '<td>' + customers[i].id + '</td>' +
            '<td>' + customers[i].name + '</td>' +
            '<td>' + customers[i].address + '</td>' +
            '<td><i class="fa fa-trash"></i></td>' +
            '</tr>';

        $("#tbl-students tbody").append(html);
    }
}

function initializePagination(){

    var totalPages = parseInt(customers.length/ 5 + (((customers.length % 5) !== 0)? 1: 0));
    $(".page-item").remove();

    var html = '<li class="page-item"><a class="page-link" href="javascript:void(0)">&laquo;</a></li>';

    for(var i=0;i<totalPages;i++){
        html+='<li class="page-item"><a class="page-link" href="#">' + (i+1) +'</a></li>'
    }

    html+='<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>';

    $(".card-footer .pagination").html(html);

    $(".card-footer .pagination .page-item:first-child").click(function(){
       loadCustomers(0);
    });

    $(".card-footer .pagination .page-item:last-child").click(function(){
        loadCustomers(totalPages - 1);
    });

    $(".card-footer .pagination .page-item").click(function(){
        var number = parseInt($(this).find("a").text());
        if(number){
            loadCustomers(number-1);
        }
    })

}
