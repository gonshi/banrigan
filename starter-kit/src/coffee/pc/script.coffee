class Main
    constructor: ->
        @ORIGIN_URL = "http://gonshi.github.io/marigan/"
        @latLngAsset = require "../../json/latlng.json"
        @social_txt = document.querySelector ".social_txt"
        @social = document.querySelector ".social"
        @social_btns =
            tweet: document.querySelector ".tweet"
            facebook: document.querySelector ".facebook"
            hatena: document.querySelector ".hatena"
            gplus: document.querySelector ".gplus"
            link: document.querySelector ".link"
        @social_btn = document.querySelector ".social_btn"
        @link_balloon = document.querySelector ".link_balloon"
        @exec()

    popup: (url) ->
        if window.screenLeft?
            _dualScreenLeft = window.screenLeft
            _dualScreenTop = window.screenTop
        else
            _dualScreenLeft = window.screen.left
            _dualScreenTop = window.screen.top

        if window.innerWidth?
            _windowWidth = window.innerWidth
            _windowHeight = window.innerHeight
        else if document.documentElement?.clientWidth?
            _windowWidth = document.documentElement.clientWidth
            _windowWidth = document.documentElement.clientHeight
        else
            _windowWidth = window.screen.width
            _windowWidth = window.screen.height

        _popupWidth = 800
        _popupHeight = 600

        _left = ((_windowWidth / 2) - (_popupWidth / 2)) + _dualScreenLeft
        _top = ((_windowHeight / 2) - (_popupHeight / 2)) + _dualScreenTop

        window.open(url, "popup",
            "width=#{_popupWidth}, height=#{_popupHeight}, " +
            "top=#{_top}, left=#{_left}"
        )

    setSocial: ->
        _fb_appId = 202646496736073

        # fb-share
        fjs = document.getElementsByTagName("script")[0]
        js = document.createElement "script"
        js.id = "facebook-jssdk"
        js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&" +
                 "appId=#{_fb_appId}&version=v2.0"
        fjs.parentNode.insertBefore js, fjs

        # fb-share
        @social_btns.facebook.addEventListener "click", =>
            FB.ui
                method: "share"
                href: encodeURIComponent @url

        # tweet
        @social_btns.tweet.addEventListener "click", =>
            @popup(
                "http://twitter.com/share?url=#{encodeURIComponent(@url)}&text=" +
                "#{encodeURIComponent("万里眼は、Chromeで新規タブを開く度に地球上のランダムな" +
                "位置のストリートビューを観ることができるChrome拡張です。")}&hashtags=万里眼"
            )

        # hatena
        @social_btns.hatena.addEventListener "click", =>
            @popup "http://b.hatena.ne.jp/add?url=#{encodeURIComponent(@url)}&title=#{encodeURIComponent("万里眼")}"

        # gplus
        @social_btns.gplus.addEventListener "click", =>
            @popup "https://plus.google.com/share?url=#{encodeURIComponent(@url)}"

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

        @url = "#{@ORIGIN_URL}?lat=#{_map.getCenter().lat()}&lng=#{_map.getCenter().lng()}"
        @social_txt.setAttribute "value", @url
        @social_btn.style.display = "block"

    getPlace: ->
        _rand = Math.floor(Math.random() * @latLngAsset.length)

        @render new window.google.maps.LatLng(
            @latLngAsset[_rand].lat, @latLngAsset[_rand].lng
        )

    searchPlace: ->
        @sv = new google.maps.StreetViewService()
        _location = new window.google.maps.LatLng(
            (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 360
        )
        @sv.getPanoramaByLocation(_location, 400000, (data) =>
            if data
                @render data.location.latLng
            else
                @getPlace()
        )

    exec: ->
        ###########################
        #   EVENT LISTENER
        ###########################

        window.initMap = =>
            if location.search.match "lat"
                @render new window.google.maps.LatLng(
                    location.search.match(/\?lat=(.*?)\&/)[1],
                    location.search.match(/(\&|＆)lng=(.*?)$/)[2]
                )
            else
                @searchPlace()

        @social_btn.addEventListener "click", =>
            if @social.getAttribute("class").match "is_show"
                @social.classList.remove "is_show"
            else
                @social.classList.add "is_show"
                @social_txt.select()

        @social_btns.link.addEventListener "click", =>
            if @social_btns.link.getAttribute("class").match "is_active"
                @social_btns.link.classList.remove "is_active"
            else
                @social_btns.link.classList.add "is_active"
                @social_btns.link.innerHTML = @url

                _range = document.createRange()
                _range.selectNode @social_btns.link
                window.getSelection().addRange _range

                try
                    document.execCommand "copy"
                    @link_balloon.classList.add "is-show"

                    clearTimeout @balloon_timer
                    @balloon_timer = setTimeout (=> @link_balloon.classList.remove "is-show"), 3000
                catch err
                    console.log err

                window.getSelection().removeAllRanges()

            @social_txt.select()

        ###########################
        #   INIT
        ###########################

        _lang = window.navigator.userLanguage ||
                window.navigator.language ||
                window.navigator.browserLanguage

        @lang = if _lang.match "ja" then "ja" else "en"

        document.body.classList.add "is_en" if @lang == "en"

        @setSocial()

new Main()
