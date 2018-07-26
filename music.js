var changeImg = function(song) {
    var elements = findAll('.specialimg')
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.src = "src/picture/" + song + ".jpg"
    }
}

var changeSong = function() {
    var selector = '.music-name'
    bindAll(selector, 'click', function() {
        var button = event.target
        var pause = find("#id-button-pause")
        pause.innerHTML = "||"
        var song = button.innerHTML
        var index = button.id.slice(-1)
        var a = find('#id-audio-music')
        a.src = 'src/mp3/' + song + '.mp3'
        a.dataset.index = index
        changeImg(song)
    })
}

var formerSong = function() {
    var former = find('#id-button-former')
    bindEvent(former, 'click', function() {
        var ad = find('#id-audio-music')
        var length = findAll(".music-name").length
        var index = (Number(ad.dataset.index) - 1 + length) % length
        ad.dataset.index = index
        var song = find('#id-button-' + index)
        var songname = song.innerHTML
        ad.src = 'src/mp3/' + songname + '.mp3'
        changeImg(songname)
        var pause = find("#id-button-pause")
        pause.innerHTML = "||"
    })
}

var pauseSong = function() {
    var pause = find("#id-button-pause")
    bindEvent(pause, 'click', function(pause) {
        var ad = find('#id-audio-music')
        var pause = find("#id-button-pause")
        if (pause.innerHTML == "O") {
            pause.innerHTML = "||"
            ad.play()
        }else{
            pause.innerHTML = "O"
            ad.pause()
        }
    })
}

var laterSong = function() {
    var later = find("#id-button-latter")
    bindEvent(later, 'click', function() {
        var ad = find('#id-audio-music')
        var length = findAll(".music-name").length
        var index = (Number(ad.dataset.index) + 1) % length
        ad.dataset.index = index
        var song = find('#id-button-' + index)
        var songname = song.innerHTML
        ad.src = 'src/mp3/' + songname + '.mp3'
        changeImg(songname)
        var pause = find("#id-button-pause")
        pause.innerHTML = "||"
    })
}

var bindEventEnded = function() {
    var ad = find('#id-audio-music')
    ad.addEventListener('ended', function() {
        var length = findAll(".music-name").length
        var index = (Number(ad.dataset.index) + 1) % length
        ad.dataset.index = index
        var song = find('#id-button-' + index)
        var songname = song.innerHTML
        ad.src = 'src/mp3/' + songname + '.mp3'
        changeImg(songname)
        var pause = find("#id-button-pause")
        pause.innerHTML = "||"
    })
}

var turnDisk = function() {
    var trans = 0
    var run = function() {
        var playerdisk = document.querySelector(".player-disk")
        setInterval(function(){
            while (trans > 360) {
                trans = 0
            }
            playerdisk.style.transform = "rotate("+ trans + "deg)"
            trans += 0.1
        }, 5)
    }
    run()
}

var __main = function() {
    changeSong()
    formerSong()
    pauseSong()
    laterSong()
    changeSong()
    bindEventEnded()
    turnDisk()
}

__main()
