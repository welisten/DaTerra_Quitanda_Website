import $ from 'jquery'
import { loadInclude, onLoadHtmlSuccess } from './include'

export function changehref(){
    $('body').find('[dt-href]').each(function (i, e){
        $(e).on('click', function(event) {
            event.preventDefault()

            $('main').attr('dt-include', $(e).attr('href'))
            $(e).attr('href') !== './pages/main.html' ? $('[dt-slide]').hide() : $('[dt-slide]').show() 
            loadInclude()
        })
    })

}
onLoadHtmlSuccess(changehref)