/* 
 *  Todos los derechos reservados
 */
declare var moment: any;
function render_datetime(data, type, row, meta, dateFormat) {
                                        if (data !== null && typeof data.timestamp !== 'undefined') {
                                            moment.locale('es');
                                            return moment.unix(data.timestamp).format(dateFormat);
                                        } else {
                                            return null;
                                        }
                                    }
export function columnDateTime(name, field, dateFormat?: string) {
    if (typeof(dateFormat) === 'undefined') dateFormat = 'lll';
    return {
            //'name': name,
            'data': field,
            'title': name,
            //'orderable': false,
            'searchable': true,
            'render': function(data, type, row, meta) {
                            return render_datetime(data, type, row, meta, dateFormat);
                        }
            };
}

function footerCallback( tfoot, data, start, end, display ){
        
    
        
 };
 
 export function tfoot(){
     
     var tfootString = '';
     tfootString += '<tfoot><tr>' +
                '<th colspan="4" style="text-align:right">'+   + '</th>' +
                '<th></th>' +
            '</tr>' +
        '</tfoot>';
     
 }

export function columnAction(ruta) {
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
        var actionsString = '';
        actionsString += '<div class="wraper-actions">'; ///start html
        //var routeParameters, attributes, visibleFlag, roleFlag;
        actionsString += '<a class="btn btn-info btn-xs glyphicon glyphicon-eye-open" href="' + ruta + row.id + '" target="_self"></a>' +
                      '<a class="btn btn-warning btn-xs glyphicon glyphicon-pencil" href="' + ruta + row.id + '/edit"></a>' +
                      '<a class="btn btn-danger btn-xs glyphicon glyphicon-trash" href="#" [routerLink] = " [\'new\'] "></a>';
                      '';
        actionsString += '</div>'; ///endhtml
        return actionsString;
        
        }
    }
};
