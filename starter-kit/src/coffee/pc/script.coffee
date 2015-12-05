class Main
    constructor: ->
        @latLngAsset = require "../../json/latlng.json"
        @exec()

    render: (latLng) ->
        new google.maps.StreetViewPanorama(
            document.getElementById("sv"),
            {
                position: latLng
                pov:
                    heading: 165
                    pitch: 0
                zoom: 1
            }
        )

        _map = new google.maps.Map(
            document.getElementById("map"),
            {
                center: latLng
                scrollwheel: false
                zoom: 1
            }
        )

        new google.maps.Marker({
            position: latLng
            map: _map
        })

    getPlace: ->
        _rand = Math.floor(Math.random() * @latLngAsset.length)
        @render(
            new window.google.maps.LatLng @latLngAsset[_rand].lat, @latLngAsset[_rand].lng
        )

    searchPlace: ->
        @sv = new google.maps.StreetViewService()
        _location = new window.google.maps.LatLng((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 360)
        @sv.getPanoramaByLocation(_location, 400000, (data) =>
            if data
                @render data.location.latLng
            else
                @getPlace()
        )

    exec: ->
        window.initMap = => @searchPlace()

new Main()
