class Main
    constructor: ->
        @ORIGIN_URL = "http://gonshi.github.io/banrigan/"
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

    getShareUrl: ->
        _url = "#{@ORIGIN_URL}?lat=#{@map.getCenter().lat()}" +
               "&lng=#{@map.getCenter().lng()}&heading=#{Math.floor(@sv.pov.heading)}"

        return _url

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
                href: @getShareUrl()

        # tweet
        @social_btns.tweet.addEventListener "click", =>
            @social_txt.setAttribute "value", @getShareUrl()
            @popup(
                "http://twitter.com/share?url=#{encodeURIComponent(@getShareUrl())}&text=" +
                "#{encodeURIComponent("万里眼は、Chromeで新規タブを開く度に地球上のランダムな" +
                "位置のストリートビューを観ることができるChrome拡張です。")}&hashtags=万里眼"
            )

        # hatena
        @social_btns.hatena.addEventListener "click", =>
            @popup "http://b.hatena.ne.jp/add?url=#{encodeURIComponent(@getShareUrl())}&" +
            "title=#{encodeURIComponent("万里眼")}"

        # gplus
        @social_btns.gplus.addEventListener "click", =>
            @popup "https://plus.google.com/share?url=#{encodeURIComponent(@getShareUrl())}"

    render: (latLng, heading) ->
        _heading = parseInt(heading) || 165
        _rotateControl =
            if navigator.userAgent(/iphone|ipod|ipad|android/i)
            then false else true

        @sv = new google.maps.StreetViewPanorama(
            document.getElementById("sv"),
            {
                addressControl: !@hide_banner
                linksControl: !@hide_banner
                zoomControl: !@hide_banner
                panControl: !@hide_banner
                scrollwheel: !@hide_banner
                rotateControl: _rotateControl
                fullscreenControl: !@hide_banner
                position: latLng
                pov:
                    heading: _heading
                    pitch: 0
                zoom: 1
            }
        )

        unless @hide_banner
            @map = new google.maps.Map(
                document.getElementById("map"),
                {
                    center: latLng
                    scrollwheel: false
                    zoom: 1
                }
            )

            new google.maps.Marker({
                position: latLng
                map: @map
                icon: "img/icon.png"
            })

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
                _heading =
                    if location.search.match(/(\&|＆)heading=(.*?)(\&|$)/)
                    then location.search.match(/(\&|＆)heading=(.*?)(\&|$)/)[2]
                    else null

                @render(
                    new window.google.maps.LatLng(
                        location.search.match(/\?lat=(.*?)\&/)[1],
                        location.search.match(/(\&|＆)lng=(.*?)(\&|$)/)[2]
                    ),
                    _heading
                )
            else
                @searchPlace()

        @social_btn.addEventListener "click", =>
            @social_txt.setAttribute "value", @getShareUrl()

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
                @social_btns.link.innerHTML = @getShareUrl()

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

        @hide_banner = if location.search.match("hide_banner") then true else false

        _lang = window.navigator.userLanguage ||
                window.navigator.language ||
                window.navigator.browserLanguage

        @lang = if _lang.match "ja" then "ja" else "en"

        document.body.classList.add "is_en" if @lang == "en"

        @setSocial()

        if window == parent # trueなら直サイト
            document.querySelector(".toStore").style.display = "block"

new Main()
