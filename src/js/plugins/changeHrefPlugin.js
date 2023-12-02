import $ from 'jquery'
import {onLoadHtmlSuccess, loadInclude} from '../core/include'

$.fn.changeHrefPlugin = function(){
    $(this).find('[dt-href]').each(function (i, e){
        $(e).on('click', function(event) {
            event.preventDefault()
            $('[dt-include]').attr('dt-include', $(e).attr('href'))
            loadInclude()
        })
    })
    return this
}

onLoadHtmlSuccess(function(){
    $('[dt-dashboard]').changeHrefPlugin()
})