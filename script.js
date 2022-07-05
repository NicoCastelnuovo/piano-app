const notes = {
    c: 'https://cdn.freesound.org/previews/562/562751_7538492-lq.mp3',
    db: 'https://cdn.freesound.org/previews/562/562757_7538492-lq.mp3',
    d: 'https://cdn.freesound.org/previews/562/562756_7538492-lq.mp3',
    eb: 'https://cdn.freesound.org/previews/562/562755_7538492-lq.mp3',
    e: 'https://cdn.freesound.org/previews/562/562760_7538492-lq.mp3',
    f: 'https://cdn.freesound.org/previews/562/562759_7538492-lq.mp3',
    gb: 'https://cdn.freesound.org/previews/562/562762_7538492-lq.mp3',
    g: 'https://cdn.freesound.org/previews/562/562761_7538492-lq.mp3',
    ab: 'https://cdn.freesound.org/previews/562/562763_7538492-lq.mp3',
    a: 'https://cdn.freesound.org/previews/562/562754_7538492-lq.mp3',
    bb: 'https://cdn.freesound.org/previews/562/562753_7538492-lq.mp3',
    b: 'https://cdn.freesound.org/previews/562/562752_7538492-lq.mp3',
    c4: 'https://cdn.freesound.org/previews/562/562758_7538492-lq.mp3'
};

const keyColl = document.querySelectorAll('.key');

function playsound(key) {
    const audioSample = new Audio();
    audioSample.src = notes[key];
    audioSample.play();
}

keyColl.forEach((currValue, index) => {
    currValue.addEventListener('click', function() {
        const key = currValue.id;
        playsound(key);
    })
})

const switchOnOff = document.getElementById('switch-on-off');

function turnOnOff() {
    
}

switchOnOff.addEventListener('click', turnOnOff);
