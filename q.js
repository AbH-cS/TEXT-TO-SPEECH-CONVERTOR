let speech = new SpeechSynthesisUtterance();

let voices = []

let VoiceSelect = document.getElementById('langSelect')

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice,i)=>{
        VoiceSelect.options[i] = new Option(voice.name,i)
    })
}

VoiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[VoiceSelect.value]
})

document.getElementById("btn").addEventListener("click",()=>{
    speech.text = document.getElementById("textArea").value 
    window.speechSynthesis.speak(speech)
})