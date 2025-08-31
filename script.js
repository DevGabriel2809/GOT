document.addEventListener('DOMContentLoaded', function () {
    const firstSeason = document.getElementById('season1');
    if (firstSeason){
        firstSeason.classList.add('active')
    }
})

function toggleEpisodes(season) {
    for (let i = 1; i <= 8; i++) {
        const element = document.getElementById(`season${i}`);
        if (i === season) {
            element.classList.toggle('active');
        } else {
            element.classList.remove('active');
        }
    }
}

function loadEpisode(link) {
    document.getElementById('videoPlayer').src = link;
    
}

// Trocar poster

document.addEventListener('DOMContentLoaded', () => {
    const GOTposter = document.getElementById('GOTposter')
    const season1btn = document.getElementById('temp1')
    const season2btn = document.getElementById('temp2')
    const season3btn = document.getElementById('temp3')
    const season4btn = document.getElementById('temp4')
    const season5btn = document.getElementById('temp5')
    const season6btn = document.getElementById('temp6')
    const season7btn = document.getElementById('temp7')
    const season8btn = document.getElementById('temp8')

    // Função pra mudar o poster
    function changePosterWithFade(seasonNumber){
        GOTposter.classList.add('fade-out'); // Inicia o fade-out
        setTimeout(() =>{
            GOTposter.src = `imgs/GOT-TEMP${seasonNumber}.jpg`;
            GOTposter.alt = `GOT Season ${seasonNumber} Poster`;
            GOTposter.classList.remove('fade-out')
        }, 200)
        
    }

    // Adicionar um event listener aos 'botoes'

    season1btn.addEventListener('click', () =>{
        changePosterWithFade(1)
    });

    season2btn.addEventListener('click', () =>{
        changePosterWithFade(2)
    });

    season3btn.addEventListener('click', () =>{
        changePosterWithFade(3)
    });

    season4btn.addEventListener('click', () =>{
        changePosterWithFade(4)
    });

    season5btn.addEventListener('click', () =>{
        changePosterWithFade(5)
    });

    season6btn.addEventListener('click', () =>{
        changePosterWithFade(6)
    });

    season7btn.addEventListener('click', () =>{
        changePosterWithFade(7)
    });

    season8btn.addEventListener('click', () =>{
        changePosterWithFade(8)
    });
})


document.addEventListener("DOMContentLoaded", () => {
    const poster = document.getElementById("poster");
    const sidebar = document.querySelector(".sidebar");
    const placeholder = document.getElementById("poster-placeholder");

    function movePoster() {
        if (window.innerWidth < 500) {
            if (!placeholder.contains(poster)) {
                placeholder.appendChild(poster);
            }
        } else {
            if (!sidebar.contains(poster)) {
                sidebar.appendChild(poster);
            }
        }
    }

    window.addEventListener("resize", movePoster);
    movePoster(); // Chamada inicial

    }); 