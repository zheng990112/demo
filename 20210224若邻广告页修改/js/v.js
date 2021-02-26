function run_pc(v) {
    v.setAttribute('src', '../video/v1.mp4');
}

function run_phone(v) {
    v.setAttribute('src', '../video/v2.mp4');
}

function addEventListener(v, type) {
	
	v.addEventListener('ended', )
	
	
    if (type === 'pc') {
        v.addEventListener('load', function() {
            setTimeout(() => {
                location.href = './pc.html';
            }, 6000)
        })
    } else if (type === 'phone') {
        v.addEventListener('load', function() {
            setTimeout(() => {
                location.href = './phone.html';
            }, 3000)
        })
    }
}

function load() {
    let v = document.getElementById('img');

    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        addEventListener(v, 'phone');
        run_phone(v);
    } else {
        addEventListener(v, 'pc');
        run_pc(v);
    }
}




window.onload = load();