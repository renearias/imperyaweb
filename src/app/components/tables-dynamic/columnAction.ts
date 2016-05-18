/* 
 *  Todos los derechos reservados
 */

export var columnAction = {
    //"contentPadding": "{{ column.padding }}",
    //"defaultContent": "{{ column.defaultContent }}",
    "name": "Acciones",
    "orderable": false,
    "searchable": false,
    "title": "Acciones",
    ///"type": "{{ column.type }}",
       // "visible": false,
       // "className": "never {{ column.class }}",
    //"width": "{{ column.width }}",
    //"data": "{{ column.data }}",
    "render": function(data, type, row, meta) {

        var actionsString = "";
        actionsString += '<div class="wraper">'; ///start html
        var routeParameters, attributes, visibleFlag, roleFlag;
        
        actionsString+='<a class="btn btn-info btn-xs glyphicon glyphicon-eye-open" href=""></a>'+
                      '<a class="btn btn-warning btn-xs glyphicon glyphicon-pencil" href=""></a>'+
                      '<a class="btn btn-danger btn-xs glyphicon glyphicon-trash" href=""></a>';
        actionsString += '</div>'; ///endhtml
        return actionsString;
    },
}