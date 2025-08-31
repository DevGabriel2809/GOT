document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const avancarBtn = document.querySelector('.avancar');
    const voltarBtn = document.querySelector('.voltar');

    // Array com todos os episódios e suas URLs
const allEpisodes = [
// Temporada 1
{ season: 1, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=2862&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3102&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3103&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3104&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3105&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3106&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3107&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3108&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3109&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3110&site=overflix&token=cfxp594cpa4to' },
// Temporada 2
{ season: 2, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3111&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3112&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3113&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3114&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3115&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3116&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3117&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3118&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3119&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3120&site=overflix&token=cfxp594cpa4to' },
// Temporada 3
{ season: 3, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3121&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3122&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3123&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3124&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3125&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3126&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3127&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3128&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3129&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3130&site=overflix&token=cfxp594cpa4to' },
// Temporada 4
{ season: 4, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3131&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3132&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3133&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3134&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3135&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3136&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3137&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3138&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3139&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3140&site=overflix&token=cfxp594cpa4to' },
// Temporada 5
{ season: 5, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3569&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3570&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3571&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3572&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3573&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3574&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3575&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3576&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3577&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3578&site=overflix&token=cfxp594cpa4to' },
// Temporada 6
{ season: 6, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3579&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3580&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3581&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3582&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3583&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3584&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3585&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3586&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3587&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3588&site=overflix&token=cfxp594cpa4to' },
// Temporada 7
{ season: 7, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3692&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3693&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3694&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3695&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3696&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3697&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3698&site=overflix&token=cfxp594cpa4to' },

// Temporada 8
{ season: 8, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3699&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3700&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3701&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3702&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3703&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=3704&site=overflix&token=cfxp594cpa4to' },
];

    let currentEpisodeIndex = -1; // -1 significa que nenhum episódio foi carregado ainda

    // Função global para carregar um episódio no player
    window.loadEpisode = (url) => {
        videoPlayer.src = url;

        // Atualiza índice
        currentEpisodeIndex = allEpisodes.findIndex(episode => episode.url === url);

        // Tenta encontrar o título com base na URL nos botões existentes
        const buttons = document.querySelectorAll('button');
        let foundTitle = null;

        buttons.forEach(button => {
            const epInfo = button.querySelector('.ep-info');
            const onclickAttr = button.getAttribute('onclick');

            if (onclickAttr && onclickAttr.includes(url) && epInfo) {
                foundTitle = epInfo.innerText;
            }
        });

        if (foundTitle) {
            document.getElementById('titulo-episodio').innerText = foundTitle;
        }

        updateNavigationButtons();
    };


    // Função para atualizar o estado dos botões "Próximo" e "Anterior"
    function updateNavigationButtons() {
        if (currentEpisodeIndex <= 0) {
            voltarBtn.disabled = true; // Desabilita se for o primeiro episódio ou nenhum
            voltarBtn.style.opacity = '0.5';
            voltarBtn.style.cursor = 'not-allowed';
        } else {
            voltarBtn.disabled = false;
            voltarBtn.style.opacity = '1';
            voltarBtn.style.cursor = 'pointer';
        }

        if (currentEpisodeIndex >= allEpisodes.length - 1) {
            avancarBtn.disabled = true; // Desabilita se for o último episódio
            avancarBtn.style.opacity = '0.5';
            avancarBtn.style.cursor = 'not-allowed';
        } else {
            avancarBtn.disabled = false;
            avancarBtn.style.opacity = '1';
            avancarBtn.style.cursor = 'pointer';
        }
    }

    // Event listener para o botão "Próximo"
    avancarBtn.addEventListener('click', () => {
        if (currentEpisodeIndex < allEpisodes.length - 1) {
            currentEpisodeIndex++;
            window.loadEpisode(allEpisodes[currentEpisodeIndex].url);
        }
    });

    // Event listener para o botão "Anterior"
    voltarBtn.addEventListener('click', () => {
        if (currentEpisodeIndex > 0) {
            currentEpisodeIndex--;
            window.loadEpisode(allEpisodes[currentEpisodeIndex].url);
        }
    });

    // Inicializa o estado dos botões ao carregar a página
    updateNavigationButtons();
});

