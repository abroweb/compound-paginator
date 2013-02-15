## About

Paginaor module for compoundJS

## How use

config/environment.coffee

        ----------------coffee----------------

        module.exports = (compound) ->

        ...

          paginator = require 'compound-paginator'

        ...

          app.configure ->

        ...

            paginator.init compound

        ...


Past in view 

<%- paginator( reportsCount ) %>

reportsCount - total count elements