import $ from 'jquery'
const loadHtmlSuccessCallback = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallback.includes(callback)){
        loadHtmlSuccessCallback.push(callback)
    }
}

export function loadInclude(parent){
    if(!parent) parent = 'body'
    $(parent).find('[dt-include]').each(function(i, e) {
        const url = $(e).attr('dt-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                loadHtmlSuccessCallback.forEach(callback => callback(data))
            }    
        })
    })
}

loadInclude()