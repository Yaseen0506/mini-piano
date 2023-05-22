function playPiano(event)
{
        const audio =document.querySelector( `audio[data-key = "${event.keyCode}"]`)
        const key = document.querySelector( `.key[data-key = "${event.keyCode}"]`)
        if(!audio){return}
        audio.currentTime = 0
        audio.volume = 1
        audio.play()

        key.classList.add("playing")

        setTimeout(function(){

             key.classList.remove("playing")

        },200)
}

window.addEventListener("keydown",playPiano)

    
