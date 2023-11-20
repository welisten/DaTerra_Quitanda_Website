import $ from 'jquery'
import { loadInclude, onLoadHtmlSuccess } from './include'

export function changehref(){
    $('body').find('[dt-href]').each(function (i, e){
        $(e).on('click', function(event) {
            event.preventDefault()

            $('main').attr('dt-include', $(e).attr('href'))
            $('[dt-slide]').hide()
            loadInclude()
        })
    })

}
onLoadHtmlSuccess(changehref)