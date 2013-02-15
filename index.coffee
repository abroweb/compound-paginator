exports.options = {
    "totalCount": null,
    "CountOnPage": 5,
    "selfPage": 1,
    "totalPage": null,
    "HTML": ''
}

exports.init = ( compound )->
    if undefined == compound.helpers.HelperSet
        console.log 'Sorry, my Lord, i can`t create a helper. Maybe, this object isn`t Compound?'
    else
        console.log 'Paginator ready to die for my Lord!'
        compound.helpers.HelperSet.prototype.paginator = ( totalCount, selfPage, CountOnPage )=>
            @showPaginaor( totalCount, selfPage, CountOnPage )


exports.showPaginaor = ( totalCount, selfPage, CountOnPage )->
    if !totalCount
        console.log 'My Lord, you forgot to give the "totalCount" in "paginator.showPaginaor()" method!'
    else if 0 == totalCount
        console.log 'My lord, count of elements is 0, i can`t display on the page...'
    else
        @options.totalCount  = parseInt( totalCount )
        @options.selfPage    = parseInt( selfPage ? @options.selfPage )
        @options.CountOnPage = parseInt( CountOnPage ? @options.CountOnPage )
        @options.totalPage   = Math.ceil( @options.totalCount / @options.CountOnPage )

        @options.prevPage    = @options.selfPage - 1
        if @options.prevPage <= 0
            @options.prevPage = 1

        @options.nextPage    = @options.selfPage + 1
        if @options.nextPage > @options.totalPage
            @options.nextPage = @options.totalPage
        @setHTML()

exports.setHTML = ()->
    @HTML  = '<div class="pagination">'
    @HTML += '<ul>'
    @HTML += '<li><a href="?page=' + @options.prevPage + '">«</a></li>'

    for i in [1..@options.totalPage]
        activeClass = ''
        if i == @options.selfPage
            activeClass = ' class="active"'
        @HTML += '<li' + activeClass + '><a href="?page=' + i + '">' + i + '</a></li>'

    @HTML += '<li><a href="?page=' + @options.nextPage + '">»</a></li>'
    @HTML += '</ul>'
    @HTML += '</div>'
    @HTML
