document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const avancarBtn = document.querySelector('.avancar');
    const voltarBtn = document.querySelector('.voltar');

    // Array com todos os episódios e suas URLs
const allEpisodes = [
// Temporada 1
{ season: 1, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26600&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26601&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26602&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26603&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26604&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26605&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26606&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26607&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26608&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26609&site=overflix&token=cfxp594cpa4to' },
// Temporada 2
{ season: 2, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26667&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26668&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26669&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26670&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26671&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26672&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26673&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26674&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26675&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26676&site=overflix&token=cfxp594cpa4to' },
// Temporada 3
{ season: 3, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26677&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26678&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26679&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26680&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26681&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26682&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26683&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26684&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26685&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26686&site=overflix&token=cfxp594cpa4to' },
// Temporada 4
{ season: 4, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26687&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26688&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26689&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26690&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26691&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26692&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26693&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26694&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26695&site=overflix&token=cfxp594cpa4to' },
{ season: 4, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26696&site=overflix&token=cfxp594cpa4to' },
// Temporada 5
{ season: 5, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26697&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26698&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26699&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26700&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26701&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26702&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26703&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26704&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26605&site=overflix&token=cfxp594cpa4to' },
{ season: 5, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26706&site=overflix&token=cfxp594cpa4to' },
// Temporada 6
{ season: 6, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26707&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26708&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26709&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26710&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26711&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26712&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26713&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26714&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26715&site=overflix&token=cfxp594cpa4to' },
{ season: 6, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26716&site=overflix&token=cfxp594cpa4to' },
// Temporada 7
{ season: 7, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26717&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26718&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26719&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26720&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26721&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26722&site=overflix&token=cfxp594cpa4to' },
{ season: 7, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26723&site=overflix&token=cfxp594cpa4to' },

// Temporada 8
{ season: 8, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26724&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26725&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26726&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26727&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26728&site=overflix&token=cfxp594cpa4to' },
{ season: 8, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=26729&site=overflix&token=cfxp594cpa4to' },
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

