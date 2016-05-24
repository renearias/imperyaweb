/* 
 *  Todos los derechos reservados
 */

export function columnAction(ruta){
     return {
    //'contentPadding': '{{ column.padding }}',
    //'defaultContent': '{{ column.defaultContent }}',
    'name': 'Acciones',
    'orderable': false,
    'searchable': false,
    'title': 'Acciones',
    ///'type': '{{ column.type }}',
       // 'visible': false,
       // 'className': 'never {{ column.class }}',
    //'width': '{{ column.width }}',
    //'data': '{{ column.data }}',
    'render': function(data, type, row, meta) {
        console.log(row);
        var actionsString = '';
        actionsString += '<div class="wraper">'; ///start html
        var routeParameters, attributes, visibleFlag, roleFlag;
        actionsString += '<a class="btn btn-info btn-xs glyphicon glyphicon-eye-open" href="'+ruta+row.id+'"></a>' +
                      '<a class="btn btn-warning btn-xs glyphicon glyphicon-pencil" href="'+ruta+row.id+'/edit"></a>' +
                      '<a class="btn btn-danger btn-xs glyphicon glyphicon-trash" href="'+ruta+row.id+'/delete"></a>';
        actionsString += '</div>'; ///endhtml
        return actionsString;
        }
    }
};
