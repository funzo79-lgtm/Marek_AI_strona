/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { GoogleGenAI, Type } from "@google/genai";
import { transcripts } from './transcripts';

// --- Interfaces and Data ---
interface Podcast {
    id: string;
    title: string;
    summary: string;
    audioUrl: string;
    imageUrl: string;
    tags: string[];
    transcriptUrl: string;
}

interface Comment {
    id: string;
    podcastId: string;
    timestamp: number;
    text: string;
    reported: boolean;
}

interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

const podcastData: Podcast[] = [
    {
        id: 'odcinek-1',
        title: 'Odcinek 1: Fundamenty Sztucznej Inteligencji',
        summary: 'Ten odcinek wyjaśnia, czym jest sztuczna inteligencja, odróżniając ją od tradycyjnego oprogramowania poprzez zdolność do adaptacji, przedstawia jej burzliwą historię od lat 50. XX wieku i omawia podział na istniejącą dziś wąską AI (ANI) oraz hipotetyczną ogólną (AGI) i superinteligencję (ASI).',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%201_Fundamenty%20Sztucznej%20Inteligencji_%20Definicja%2C%20Historia%2C%20Rodzaje.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 1.png',
        tags: ['Historia AI', 'Wąska AI', 'Definicja AI'],
        transcriptUrl: '/transcripts/odcinek-1.txt',
    },
    {
        id: 'odcinek-2',
        title: 'Odcinek 2: Machine Learning: Silnik Sztucznej Inteligencji',
        summary: 'W tym odcinku omawiane są trzy główne paradygmaty uczenia maszynowego: nadzorowane (klasyfikacja i regresja), nienadzorowane (klastrowanie, asocjacja) i uczenie przez wzmacnianie, podkreślając fundamentalną rolę jakości danych dla skuteczności algorytmów i modeli.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzial%202_Machine%20Learning_%20The%20Engine%20of%20AI.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 2.png',
        tags: ['Uczenie nadzorowane', 'Uczenie przez wzmacnianie', 'Jakość danych'],
        transcriptUrl: '/transcripts/odcinek-2.txt',
    },
    {
        id: 'odcinek-3',
        title: 'Odcinek 3: Wielkie Modele Językowe (LLM): Językowa Rewolucja',
        summary: 'Odcinek ten wyjaśnia, co oznacza "wielki" w nazwie LLM (dane, parametry, moc obliczeniowa), opisuje ich działanie oparte na architekturze Transformer, a także przedstawia kluczowe ograniczenia, takie jak halucynacje, uprzedzenia i brak realnego rozumienia świata.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzial%203_Large%20Language%20Models_%20A%20Linguistic%20Revolution.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 3.png',
        tags: ['LLM', 'Architektura Transformer', 'Halucynacje AI'],
        transcriptUrl: '/transcripts/odcinek-3.txt',
    },
    {
        id: 'odcinek-4',
        title: 'Odcinek 4: Sztuka Dialogu: Mistrzostwo w Promptowaniu AI',
        summary: 'Ten odcinek skupia się na tworzeniu skutecznych promptów, omawiając zasady precyzji, kontekstu i definiowania roli, a także prezentuje zaawansowane techniki, takie jak Few-Shot, Chain-of-Thought do logicznego rozumowania oraz Flipped Interaction.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%204_Sztuka%20Dialogu_%20Mistrzostwo%20w%20Promptowaniu%20AI.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 4.png',
        tags: ['Prompting', 'Chain-of-Thought', 'Few-Shot'],
        transcriptUrl: '/transcripts/odcinek-4.txt',
    },
    {
        id: 'odcinek-5',
        title: 'Odcinek 5: Kreowanie Asystentów AI: Twoi Spersonalizowani Cyfrowi Eksperci',
        summary: 'Materiał wyjaśnia, jak przejść od ogólnych zapytań do tworzenia wyspecjalizowanych asystentów AI za pomocą "custom instructions", definiując sześć kluczowych filarów ich "konstytucji": rolę, misję, zasady, ton, proces i format wyjściowy.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzial%205_Crafting%20AI%20Assistants_%20Your%20Personalized%20Digital%20Experts.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 5.png',
        tags: ['Asystent AI', 'Custom Instructions', 'Personalizacja AI'],
        transcriptUrl: '/transcripts/odcinek-5.txt',
    },
    {
        id: 'odcinek-6',
        title: 'Odcinek 6: Autonomiczni Agenci AI: Od Asystentów do Wykonawców',
        summary: 'Odcinek ten przedstawia ewolucję od reaktywnych asystentów do proaktywnych agentów AI, którzy autonomicznie realizują cele, wykorzystując narzędzia i działając w pętli ReAct (rozumowanie-działanie-obserwacja). ',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%206_Autonomous%20AI%20Agents_%20From%20Assistants%20to%20Executors.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 6.png',
        tags: ['Agent AI', 'Pętla ReAct', 'Autonomia AI'],
        transcriptUrl: '/transcripts/odcinek-6.txt',
    },
    {
        id: 'odcinek-7',
        title: 'Odcinek 7: Budowanie Zespołów Agentów AI: Synergia i Projektowanie Przepływów Pracy',
        summary: 'W tym odcinku omówiono korzyści płynące z tworzenia zespołów wyspecjalizowanych agentów AI, takie jak lepsza jakość, redukcja błędów dzięki agentom-krytykom i większa skalowalność, a także przedstawiono metody projektowania ich współpracy w modelach sekwencyjnych lub hierarchicznych.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%207_%20Building%20AI%20Agent%20Teams_%20Synergy%20and%20Workflow%20Design.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 7.png',
        tags: ['Zespoły agentów AI', 'Systemy wieloagentowe', 'Workflow AI'],
        transcriptUrl: '/transcripts/odcinek-7.txt',
    },
    {
        id: 'odcinek-8',
        title: 'Odcinek 8: Halucynacje AI: Zrozumienie i Kontrola',
        summary: 'Ten odcinek wyjaśnia, że halucynacje AI wynikają ze statystycznej natury modeli językowych, omawia techniki ich minimalizowania, takie jak uziemienie (RAG) i weryfikacja, a także wskazuje, kiedy ta skłonność do "wymyślania" może być pożądaną cechą w zadaniach kreatywnych.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%208_AI%20Hallucinations_%20Understanding%20and%20Control.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 8.png',
        tags: ['Halucynacje AI', 'RAG', 'Kreatywność AI'],
        transcriptUrl: '/transcripts/odcinek-8.txt',
    }
];
const aboutProjectAudioUrl = 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/ElevenLabs_2025-09-18T17_34_20_Marek%20g%C5%82os_pvc_sp100_s50_sb75_se0_b_m2.mp3';

// Helper to format time in MM:SS
function formatTime(seconds: number): string {
    if (isNaN(seconds)) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// SVG Icons
const playIcon = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>`;
const pauseIcon = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>`;
const replayIcon = `<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg>`;
const volumeHighIcon = `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>`;
const volumeMuteIcon = `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>`;
const favoriteIconEmpty = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>`;
const favoriteIconFilled = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>`;
const reportIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.46-.302l-2.254-5.181a.5.5 0 0 1 .46-.7L14.778.085zm-7.5 1.18L4.25 6.5h4.01L7.278 1.265zM6 8a.5.5 0 0 0-.5.5v5.766l-1.096-1.096a.5.5 0 0 0-.707 0l-1.096 1.096L.5 16.5a.5.5 0 0 0 .707 0L2.253 15.46l1.096-1.096a.5.5 0 0 0 0-.707L4.445 12.5l.03-.03.001-.002 2.083-2.082a.5.5 0 0 0 .442-.288l.754-1.734z"/></svg>`;
const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>`;


// --- Global State ---
let activeAudio: HTMLAudioElement | null = null;
let activePodcastId: string | null = null;
let activeVisualizer: { ctx: CanvasRenderingContext2D, analyser: AnalyserNode, animationFrameId: number } | null = null;
let favoritePodcasts: Set<string> = new Set(JSON.parse(localStorage.getItem('favoritePodcasts') || '[]'));
let allComments: Comment[] = JSON.parse(localStorage.getItem('allComments') || '[]');
const IS_ADMIN = new URLSearchParams(window.location.search).has('admin');

// --- Gemini AI Setup ---
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}
const ai = new GoogleGenAI({ apiKey: API_KEY });

// --- Core Application Logic ---
document.addEventListener('DOMContentLoaded', () => {
    setupPlexusBackground();
    renderAllPodcasts();
    renderTopicMap();
    setupEventListeners();
    renderFavoritesSection();
    if (IS_ADMIN) {
        document.body.classList.add('admin-mode');
    }
});

// --- Transcript Management ---
/**
 * Retrieves a pre-loaded transcript from the 'transcripts' object.
 * @param url The identifier for the transcript (matches transcriptUrl in podcastData).
 * @returns The transcript text or an empty string if not found.
 */
function getTranscript(url: string): string {
    return transcripts[url] || '';
}


// --- Rendering Functions ---
function renderAllPodcasts() {
    const grid = document.getElementById('podcast-grid');
    if (!grid) return;
    grid.innerHTML = '';
    podcastData.forEach(podcast => {
        const card = createPodcastCard(podcast);
        grid.appendChild(card);
    });
}

function renderTopicMap() {
    const container = document.getElementById('topic-map-container');
    if (!container) return;
    const allTags = new Set(podcastData.flatMap(p => p.tags));
    container.innerHTML = '';
    allTags.forEach(tag => {
        const tagEl = document.createElement('button');
        tagEl.className = 'topic-tag';
        tagEl.textContent = tag;
        tagEl.dataset.tag = tag;
        tagEl.addEventListener('click', () => toggleTagFilter(tag));
        container.appendChild(tagEl);
    });
}

function renderFavoritesSection() {
    const section = document.getElementById('favorites-section') as HTMLElement;
    const grid = document.getElementById('favorites-grid') as HTMLElement;
    if (!section || !grid) return;

    if (favoritePodcasts.size === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    grid.innerHTML = '';
    podcastData.forEach(podcast => {
        if (favoritePodcasts.has(podcast.id)) {
            const card = document.createElement('a');
            card.href = `#podcast-${podcast.id}`;
            card.className = 'favorite-card';
            card.innerHTML = `
                <img src="${podcast.imageUrl}" alt="${podcast.title}">
                <p>${podcast.title}</p>
            `;
            grid.appendChild(card);
        }
    });
}

function createPodcastCard(podcast: Podcast): HTMLElement {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.id = `podcast-${podcast.id}`;
    card.dataset.podcastId = podcast.id;

    card.innerHTML = `
        <img src="${podcast.imageUrl}" alt="${podcast.title}">
        <div class="podcast-card-header">
            <h3>${podcast.title}</h3>
            <button class="favorite-btn ${favoritePodcasts.has(podcast.id) ? 'favorited' : ''}" aria-label="Dodaj do ulubionych">
                ${favoritePodcasts.has(podcast.id) ? favoriteIconFilled : favoriteIconEmpty}
            </button>
        </div>
        <p class="ai-summary">${podcast.summary}</p>
        <div class="audio-player-container"></div>
        <div class="tags">
            ${podcast.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <div class="takeaways-container">
            <button class="takeaways-btn">Pokaż kluczowe wnioski AI</button>
        </div>
        <div class="comments-section"></div>
    `;

    const audioPlayerContainer = card.querySelector('.audio-player-container') as HTMLElement;
    audioPlayerContainer.appendChild(createAudioPlayer(podcast));

    const favoriteBtn = card.querySelector('.favorite-btn') as HTMLButtonElement;
    favoriteBtn.addEventListener('click', () => toggleFavorite(podcast.id, favoriteBtn));

    const takeawaysBtn = card.querySelector('.takeaways-btn') as HTMLButtonElement;
    const takeawaysContainer = card.querySelector('.takeaways-container') as HTMLElement;
    takeawaysBtn.addEventListener('click', () => generateTakeaways(podcast, takeawaysContainer, takeawaysBtn));

    const commentsSection = card.querySelector('.comments-section') as HTMLElement;
    renderCommentsSection(commentsSection, podcast.id);

    return card;
}

function createAudioPlayer(podcast: Podcast): HTMLElement {
    const playerContainer = document.createElement('div');
    playerContainer.className = 'audio-player';

    const audio = new Audio(podcast.audioUrl);
    audio.preload = 'metadata';

    const canvas = document.createElement('canvas');
    canvas.className = 'audio-visualizer';

    playerContainer.innerHTML = `
        <div class="player-controls">
            <button class="restart-btn" aria-label="Odtwórz od początku">${replayIcon}</button>
            <button class="play-pause-btn" aria-label="Odtwórz">${playIcon}</button>
            <div class="time-container">
                 <input type="range" class="seek-slider" value="0" max="100" aria-label="Pasek postępu">
                 <span class="time-display">00:00 / 00:00</span>
            </div>
            <div class="volume-controls">
                <button class="volume-btn" aria-label="Wycisz">${volumeHighIcon}</button>
                <input type="range" class="volume-slider" value="100" max="100" aria-label="Regulacja głośności">
            </div>
        </div>
    `;
    playerContainer.insertBefore(canvas, playerContainer.firstChild);

    // Get element references
    const playPauseBtn = playerContainer.querySelector('.play-pause-btn') as HTMLButtonElement;
    const restartBtn = playerContainer.querySelector('.restart-btn') as HTMLButtonElement;
    const seekSlider = playerContainer.querySelector('.seek-slider') as HTMLInputElement;
    const timeDisplay = playerContainer.querySelector('.time-display') as HTMLSpanElement;
    const volumeBtn = playerContainer.querySelector('.volume-btn') as HTMLButtonElement;
    const volumeSlider = playerContainer.querySelector('.volume-slider') as HTMLInputElement;

    // Event Listeners for player
    audio.addEventListener('loadedmetadata', () => {
        seekSlider.max = String(audio.duration);
        timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
    });

    audio.addEventListener('timeupdate', () => {
        seekSlider.value = String(audio.currentTime);
        timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });

    audio.addEventListener('ended', () => {
        playPauseBtn.innerHTML = playIcon;
        playPauseBtn.setAttribute('aria-label', 'Odtwórz');
        stopVisualizer();
    });

    playPauseBtn.addEventListener('click', () => togglePlay(podcast.id, audio, playPauseBtn, canvas));
    restartBtn.addEventListener('click', () => {
        audio.currentTime = 0;
        if (audio.paused) {
            togglePlay(podcast.id, audio, playPauseBtn, canvas);
        }
    });

    seekSlider.addEventListener('input', () => audio.currentTime = parseFloat(seekSlider.value));
    volumeSlider.addEventListener('input', () => {
        audio.volume = parseFloat(volumeSlider.value) / 100;
        audio.muted = audio.volume === 0;
    });

    audio.addEventListener('volumechange', () => {
        volumeSlider.value = String(audio.muted ? 0 : audio.volume * 100);
        volumeBtn.innerHTML = audio.muted || audio.volume === 0 ? volumeMuteIcon : volumeHighIcon;
    });

    volumeBtn.addEventListener('click', () => audio.muted = !audio.muted);

    return playerContainer;
}

// --- Audio & Visualizer Logic ---
function togglePlay(podcastId: string, audio: HTMLAudioElement, button: HTMLButtonElement, canvas: HTMLCanvasElement) {
    if (activeAudio && activeAudio !== audio) {
        activeAudio.pause();
        const otherButton = document.querySelector(`#podcast-${activePodcastId} .play-pause-btn`) as HTMLButtonElement | null;
        if (otherButton) {
            otherButton.innerHTML = playIcon;
            otherButton.setAttribute('aria-label', 'Odtwórz');
        }
        stopVisualizer();
    }

    if (audio.paused) {
        audio.play();
        button.innerHTML = pauseIcon;
        button.setAttribute('aria-label', 'Pauza');
        activeAudio = audio;
        activePodcastId = podcastId;
        startVisualizer(audio, canvas);
    } else {
        audio.pause();
        button.innerHTML = playIcon;
        button.setAttribute('aria-label', 'Odtwórz');
        stopVisualizer();
        activeAudio = null;
        activePodcastId = null;
    }
}

function startVisualizer(audio: HTMLAudioElement, canvas: HTMLCanvasElement) {
    if (activeVisualizer) return;

    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(audio);
    const analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const ctx = canvas.getContext('2d')!;

    const draw = () => {
        const animationFrameId = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#4d4dff');
        gradient.addColorStop(1, '#1a1a2e');
        ctx.fillStyle = gradient;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2;
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth + 1;
        }
        activeVisualizer!.animationFrameId = animationFrameId;
    };

    activeVisualizer = { ctx, analyser, animationFrameId: 0 };
    draw();
}

function stopVisualizer() {
    if (activeVisualizer) {
        cancelAnimationFrame(activeVisualizer.animationFrameId);
        activeVisualizer.ctx.clearRect(0, 0, activeVisualizer.ctx.canvas.width, activeVisualizer.ctx.canvas.height);
        activeVisualizer = null;
    }
}


// --- Event Listeners Setup ---
function setupEventListeners() {
    document.getElementById('about-project-btn')?.addEventListener('click', showAboutModal);
    document.getElementById('modal-close-btn')?.addEventListener('click', hideAboutModal);
    document.getElementById('about-modal-overlay')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) hideAboutModal();
    });

    document.getElementById('feedback-form')?.addEventListener('submit', handleFeedbackSubmit);

    // Chatbot listeners
    const chatbotFab = document.getElementById('chatbot-fab');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatForm = document.getElementById('chat-form');

    chatbotFab?.addEventListener('click', () => {
        chatbotWindow?.classList.toggle('visible');
        chatbotFab.classList.toggle('open');
    });

    chatbotCloseBtn?.addEventListener('click', () => {
        chatbotWindow?.classList.remove('visible');
        chatbotFab?.classList.remove('open');
    });

    chatForm?.addEventListener('submit', handleChatSubmit);

    // Quiz listeners
    document.getElementById('start-quiz-btn')?.addEventListener('click', startQuiz);
    document.getElementById('restart-quiz-btn')?.addEventListener('click', restartQuiz);
}

// --- Modal Logic ---
function showAboutModal() {
    const overlay = document.getElementById('about-modal-overlay');
    if (overlay) {
        overlay.classList.add('visible');
        const container = overlay.querySelector('#modal-player-container');
        if (container && !container.hasChildNodes()) {
            const aboutPodcast: Podcast = {
                id: 'about-project',
                title: 'O mnie i o tym projekcie',
                summary: '', audioUrl: aboutProjectAudioUrl, imageUrl: '', tags: [], transcriptUrl: ''
            };
            container.appendChild(createAudioPlayer(aboutPodcast));
        }
    }
}

function hideAboutModal() {
    const overlay = document.getElementById('about-modal-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
        const audio = overlay.querySelector('audio');
        if (audio) {
            audio.pause();
        }
    }
}

// --- Topic/Tag Filtering ---
function toggleTagFilter(tagToFilter: string) {
    const allTags = document.querySelectorAll('.topic-tag');
    const isDeactivating = document.querySelector(`.topic-tag[data-tag="${tagToFilter}"]`)?.classList.contains('active');

    allTags.forEach(tagEl => tagEl.classList.remove('active'));

    if (!isDeactivating) {
        document.querySelector(`.topic-tag[data-tag="${tagToFilter}"]`)?.classList.add('active');
        filterPodcastsByTag(tagToFilter);
    } else {
        resetPodcastFilter();
    }
}

function filterPodcastsByTag(tag: string) {
    const allCards = document.querySelectorAll('.podcast-card');
    allCards.forEach(card => {
        const cardId = (card as HTMLElement).dataset.podcastId;
        const podcast = podcastData.find(p => p.id === cardId);
        if (podcast && podcast.tags.includes(tag)) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });
}

function resetPodcastFilter() {
    const allCards = document.querySelectorAll('.podcast-card');
    allCards.forEach(card => card.classList.remove('filtered-out'));
}

// --- Favorites Logic ---
function toggleFavorite(podcastId: string, button: HTMLButtonElement) {
    if (favoritePodcasts.has(podcastId)) {
        favoritePodcasts.delete(podcastId);
        button.classList.remove('favorited');
        button.innerHTML = favoriteIconEmpty;
    } else {
        favoritePodcasts.add(podcastId);
        button.classList.add('favorited');
        button.innerHTML = favoriteIconFilled;
    }
    localStorage.setItem('favoritePodcasts', JSON.stringify(Array.from(favoritePodcasts)));
    renderFavoritesSection();
}

// --- Comments Logic ---
function renderCommentsSection(container: HTMLElement, podcastId: string) {
    const podcastComments = allComments.filter(c => c.podcastId === podcastId);

    let adminClearButton = IS_ADMIN ? `<button class="admin-clear-btn" data-podcast-id="${podcastId}">Wyczyść komentarze</button>` : '';

    container.innerHTML = `
    <div class="comments-header">
        <h4>Komentarze</h4>
        ${adminClearButton}
    </div>
    <form class="comment-form" data-podcast-id="${podcastId}">
        <input type="text" class="comment-form-input" placeholder="Dodaj komentarz..." required maxlength="280">
        <button type="submit" class="comment-form-button">Skomentuj</button>
        <div class="comment-timestamp-indicator"></div>
    </form>
    <div class="comments-list">
        ${podcastComments.length === 0 ? '<p style="font-size: 0.8rem; text-align: center; color: var(--text-secondary);">Brak komentarzy. Bądź pierwszy!</p>' :
            podcastComments.sort((a,b) => a.timestamp - b.timestamp).map(comment => `
            <div class="comment-item ${IS_ADMIN && comment.reported ? 'reported-admin' : ''}" data-comment-id="${comment.id}">
                <div class="comment-meta">
                    <span class="comment-timestamp" data-timestamp="${comment.timestamp}">${formatTime(comment.timestamp)}</span>
                    <div class="comment-controls">
                        <button class="report-btn" ${comment.reported ? 'disabled' : ''} aria-label="Zgłoś komentarz">${reportIcon}</button>
                        ${IS_ADMIN ? `<button class="admin-delete-comment-btn" aria-label="Usuń komentarz">${deleteIcon}</button>` : ''}
                    </div>
                </div>
                <p class="comment-text">${escapeHTML(comment.text)}</p>
            </div>
        `).join('')}
    </div>
    `;

    // Add event listeners
    container.querySelector('.comment-form')?.addEventListener('submit', handleCommentSubmit);
    container.querySelectorAll('.comment-timestamp').forEach(el => el.addEventListener('click', handleTimestampClick));
    container.querySelectorAll('.report-btn').forEach(btn => btn.addEventListener('click', handleReportComment));
    if (IS_ADMIN) {
        container.querySelector('.admin-clear-btn')?.addEventListener('click', handleAdminClearComments);
        container.querySelectorAll('.admin-delete-comment-btn').forEach(btn => btn.addEventListener('click', handleAdminDeleteComment));

    }

    // Timestamp indicator logic
    const form = container.querySelector('.comment-form') as HTMLFormElement;
    const indicator = form.querySelector('.comment-timestamp-indicator') as HTMLDivElement;
    const card = container.closest('.podcast-card') as HTMLElement;
    const audio = card.querySelector('audio');
    if (audio) {
        audio.addEventListener('timeupdate', () => {
            if (audio.currentTime > 0) {
                indicator.textContent = `Komentarz dla ${formatTime(audio.currentTime)}`;
            } else {
                indicator.textContent = '';
            }
        });
    }
}

function handleCommentSubmit(event: Event) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const input = form.querySelector('.comment-form-input') as HTMLInputElement;
    const podcastId = form.dataset.podcastId;

    if (!input || !podcastId || !input.value.trim()) return;

    const card = document.getElementById(`podcast-${podcastId}`);
    const audio = card?.querySelector('audio');
    const timestamp = audio ? Math.floor(audio.currentTime) : 0;

    const newComment: Comment = {
        id: `comment-${Date.now()}-${Math.random()}`,
        podcastId: podcastId,
        timestamp: timestamp,
        text: input.value.trim(),
        reported: false,
    };

    allComments.push(newComment);
    saveComments();
    
    // Re-render comments for that specific podcast
    const commentsSection = form.closest('.comments-section') as HTMLElement;
    renderCommentsSection(commentsSection, podcastId);
}

function handleTimestampClick(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const timestamp = parseFloat(target.dataset.timestamp || '0');
    const card = target.closest('.podcast-card') as HTMLElement;
    const audio = card?.querySelector('audio');
    if (audio) {
        audio.currentTime = timestamp;
        if (audio.paused) {
            const playButton = card.querySelector('.play-pause-btn') as HTMLButtonElement;
            const canvas = card.querySelector('.audio-visualizer') as HTMLCanvasElement;
            togglePlay(card.dataset.podcastId!, audio, playButton, canvas);
        }
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('highlighted');
        setTimeout(() => card.classList.remove('highlighted'), 2000);
    }
}

function handleReportComment(event: Event) {
    const button = event.currentTarget as HTMLButtonElement;
    const commentItem = button.closest('.comment-item') as HTMLElement;
    const commentId = commentItem.dataset.commentId;
    
    const comment = allComments.find(c => c.id === commentId);
    if (comment && !comment.reported) {
        comment.reported = true;
        saveComments();
        button.disabled = true;
        showNotification('Komentarz został zgłoszony do moderacji.');
    }
}
function handleAdminClearComments(event: Event) {
    const button = event.currentTarget as HTMLButtonElement;
    const podcastId = button.dataset.podcastId;
    if (confirm(`Czy na pewno chcesz usunąć WSZYSTKIE komentarze dla odcinka ${podcastId}?`)) {
        allComments = allComments.filter(c => c.podcastId !== podcastId);
        saveComments();
        const commentsSection = button.closest('.comments-section') as HTMLElement;
        renderCommentsSection(commentsSection, podcastId!);
    }
}
function handleAdminDeleteComment(event: Event) {
     const button = event.currentTarget as HTMLButtonElement;
    const commentItem = button.closest('.comment-item') as HTMLElement;
    const commentId = commentItem.dataset.commentId;
    const podcastId = (commentItem.closest('.podcast-card') as HTMLElement).dataset.podcastId;

     if (confirm('Czy na pewno chcesz usunąć ten komentarz?')) {
        allComments = allComments.filter(c => c.id !== commentId);
        saveComments();
        const commentsSection = button.closest('.comments-section') as HTMLElement;
        renderCommentsSection(commentsSection, podcastId!);
    }
}


function saveComments() {
    localStorage.setItem('allComments', JSON.stringify(allComments));
}


// --- Form & Notification Logic ---
function handleFeedbackSubmit(event: Event) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    // In a real app, you'd send this data to a server
    console.log('Feedback submitted:', {
        rating: (form.querySelector('input[name="star-rating"]:checked') as HTMLInputElement)?.value,
        likes: (form.querySelector('#co-podobalo') as HTMLTextAreaElement).value,
        improvements: (form.querySelector('#co-poprawic') as HTMLTextAreaElement).value
    });
    form.reset();
    showNotification("Dziękujemy za Twoją opinię!");
}

function showNotification(message: string) {
    const bubble = document.getElementById('notification-bubble');
    if (bubble) {
        bubble.textContent = message;
        bubble.classList.add('show');
        setTimeout(() => {
            bubble.classList.remove('show');
        }, 3000);
    }
}

function escapeHTML(str: string): string {
    const p = document.createElement("p");
    p.textContent = str;
    return p.innerHTML;
}

// --- Background Animation ---
function setupPlexusBackground() {
    const canvas = document.getElementById('plexus-bg') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    let points: { x: number, y: number, vx: number, vy: number }[];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        points = Array.from({ length: Math.floor(canvas.width * canvas.height / 20000) }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
        }));
    };

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        points.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(77, 77, 255, 0.5)';
            ctx.fill();
        });

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.strokeStyle = `rgba(77, 77, 255, ${1 - dist / 120})`;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();
}

// --- AI-Powered Features ---

async function generateTakeaways(podcast: Podcast, resultContainer: HTMLElement, button: HTMLButtonElement) {
    const existingResult = resultContainer.querySelector('.takeaways-result');
    if (existingResult) {
        existingResult.remove();
        button.style.display = 'block';
        return;
    }
    
    button.disabled = true;
    button.innerHTML = '<div class="loader-small"></div>';

    try {
        const transcriptText = getTranscript(podcast.transcriptUrl);
        
        if (!transcriptText) {
             throw new Error("Transkrypcja nie została znaleziona.");
        }

        const prompt = `Jesteś ekspertem w tworzeniu zwięzłych podsumowań. Przeczytaj poniższą transkrypcję podcastu i wyodrębnij 3 kluczowe, najważniejsze wnioski w formie listy wypunktowanej. Mów w języku polskim. Transkrypcja: "${transcriptText}"`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        
        const takeawaysHtml = response.text
            .trim()
            .split('\n')
            .map(line => line.replace(/^[*-]\s*/, ''))
            .filter(line => line)
            .map(line => `<li>${line}</li>`)
            .join('');

        const resultDiv = document.createElement('div');
        resultDiv.className = 'takeaways-result';
        resultDiv.innerHTML = `<ul>${takeawaysHtml}</ul>`;
        
        resultContainer.innerHTML = '';
        resultContainer.appendChild(resultDiv);
        button.style.display = 'none';

    } catch (error) {
        console.error("Błąd podczas generowania wniosków:", error);
        resultContainer.innerHTML = '<p class="error-message">Nie udało się wygenerować wniosków. Spróbuj ponownie później.</p>';
        button.innerHTML = 'Pokaż kluczowe wnioski AI';
        button.disabled = false;
    }
}


// Chatbot Logic
const chatHistory: { role: 'user' | 'model' | 'system', parts: { text: string }[] }[] = [];
const chatMessagesContainer = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input') as HTMLInputElement;
const chatSendBtn = document.getElementById('chat-send-btn') as HTMLButtonElement;

function addChatMessage(type: 'user' | 'bot' | 'system' | 'thinking', content: string) {
    if (!chatMessagesContainer) return;

    const messageDiv = document.createElement('div');
    if (type === 'thinking') {
        messageDiv.className = 'message bot-message thinking-indicator';
        messageDiv.innerHTML = '<span></span><span></span><span></span>';
        messageDiv.id = 'thinking-indicator';
    } else {
        messageDiv.className = `message ${type}-message`;
        messageDiv.innerHTML = content; // Assuming content is safe or sanitized
    }
    chatMessagesContainer.appendChild(messageDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    return messageDiv;
}

addChatMessage('system', 'Cześć! Jestem asystentem AI. Zapytaj mnie o cokolwiek, co dotyczy podcastów na tej stronie.');

async function handleChatSubmit(event: Event) {
    event.preventDefault();
    const userInput = chatInput.value.trim();
    if (!userInput) return;

    addChatMessage('user', userInput);
    chatInput.value = '';
    chatSendBtn.disabled = true;
    const thinkingIndicator = addChatMessage('thinking', '');

    try {
        // 1. Simple keyword extraction from user input
        const queryKeywords = userInput.toLowerCase().split(/\s+/).filter(word => word.length > 2);

        // 2. Score each podcast transcript based on keyword matches
        const scoredPodcasts = podcastData.map(podcast => {
            const transcript = getTranscript(podcast.transcriptUrl).toLowerCase();
            let score = 0;
            const uniqueKeywords = new Set<string>();
            queryKeywords.forEach(keyword => {
                if (transcript.includes(keyword)) {
                    if (!uniqueKeywords.has(keyword)) {
                        uniqueKeywords.add(keyword);
                        score++;
                    }
                }
            });
            return { podcast, score };
        }).filter(item => item.score > 0)
          .sort((a, b) => b.score - a.score);

        // 3. Select top N transcripts for context (e.g., top 3)
        const topPodcasts = scoredPodcasts.slice(0, 3);

        let contextText: string;
        if (topPodcasts.length > 0) {
            contextText = topPodcasts.map(item => {
                const transcript = getTranscript(item.podcast.transcriptUrl);
                return `Fragment z transkrypcji "${item.podcast.title}":\n${transcript}`;
            }).join('\n\n---\n\n');
        } else {
            // Fallback if no relevant transcript is found - use all summaries
            contextText = 'Nie znaleziono bezpośrednio pasujących transkrypcji. Oto podsumowania wszystkich podcastów:\n' + 
            podcastData.map(p => `Tytuł: ${p.title}\nPodsumowanie: ${p.summary}`).join('\n\n');
        }
        
        const prompt = `Jesteś asystentem AI dla serii podcastów "Marek AI". Odpowiedz na pytanie użytkownika, opierając się wyłącznie na dostarczonym poniżej kontekście z transkrypcji. Bądź pomocny i zwięzły. Jeśli odpowiedź nie znajduje się w kontekście, powiedz, że nie masz informacji na ten temat w udostępnionych transkrypcjach.

Kontekst:
---
${contextText}
---

Pytanie użytkownika: "${userInput}"`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        const botResponse = response.text;
        
        // Sanitize and format response
        let formattedResponse = escapeHTML(botResponse);
        formattedResponse = formattedResponse
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>')
            .replace(/<\/ul>\s*<ul>/g, ''); // Merge consecutive lists


        thinkingIndicator?.remove();
        addChatMessage('bot', formattedResponse);

    } catch (error) {
        console.error("Błąd chatbota:", error);
        thinkingIndicator?.remove();
        addChatMessage('system', 'Przepraszam, wystąpił błąd. Spróbuj ponownie później.');
    } finally {
        chatSendBtn.disabled = false;
        chatInput.focus();
    }
}

// --- Quiz Logic ---
let currentQuiz: QuizQuestion[] = [];
let currentQuestionIndex = 0;
let score = 0;

function showQuizView(viewId: 'quiz-selection' | 'quiz-loading' | 'quiz-active' | 'quiz-results') {
    document.querySelectorAll('.quiz-view').forEach(view => {
        (view as HTMLElement).classList.remove('active');
    });
    document.getElementById(viewId)?.classList.add('active');
}

function populateQuizTopics() {
    const select = document.getElementById('quiz-topic-select') as HTMLSelectElement;
    if (!select) return;
    select.innerHTML = '<option value="all">Wszystkie tematy</option>';
    podcastData.forEach(podcast => {
        const option = document.createElement('option');
        option.value = podcast.id;
        option.textContent = podcast.title;
        select.appendChild(option);
    });
}
populateQuizTopics();


async function startQuiz() {
    showQuizView('quiz-loading');
    const select = document.getElementById('quiz-topic-select') as HTMLSelectElement;
    const topicId = select.value;
    
    let context = '';
    if (topicId === 'all') {
        context = podcastData.map(p => `Tytuł: ${p.title}\nPodsumowanie: ${p.summary}`).join('\n\n');
    } else {
        context = `Oto transkrypcja podcastu "${podcastData.find(p=>p.id === topicId)?.title}":\n\n${getTranscript(podcastData.find(p=>p.id === topicId)!.transcriptUrl)}`;
    }

    try {
        const prompt = `Jesteś nauczycielem tworzącym quiz. Na podstawie poniższego kontekstu z podcastów o AI, wygeneruj 5 pytań wielokrotnego wyboru (A, B, C, D), aby sprawdzić wiedzę słuchacza. Upewnij się, że tylko jedna odpowiedź jest prawidłowa. Pytania powinny być po polsku.

Kontekst:
---
${context}
---

Zwróć odpowiedź w formacie JSON, jako tablica obiektów, gdzie każdy obiekt ma klucze: "question" (string), "options" (tablica 4 stringów), "correctAnswer" (string, który jest jedną z opcji). Nie dodawaj żadnego innego tekstu ani formatowania.`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            question: { type: Type.STRING },
                            options: { type: Type.ARRAY, items: { type: Type.STRING } },
                            correctAnswer: { type: Type.STRING }
                        },
                         required: ["question", "options", "correctAnswer"]
                    }
                }
            }
        });
        
        const jsonResponse = response.text;
        currentQuiz = JSON.parse(jsonResponse);
        currentQuestionIndex = 0;
        score = 0;
        
        displayQuestion();
        showQuizView('quiz-active');

    } catch (error) {
        console.error("Błąd generowania quizu:", error);
        alert("Nie udało się wygenerować quizu. Spróbuj ponownie.");
        showQuizView('quiz-selection');
    }
}


function displayQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        showResults();
        return;
    }

    const question = currentQuiz[currentQuestionIndex];
    (document.getElementById('question-counter') as HTMLElement).textContent = `Pytanie ${currentQuestionIndex + 1} / ${currentQuiz.length}`;
    (document.getElementById('quiz-score') as HTMLElement).textContent = `Wynik: ${score}`;
    (document.getElementById('question-text') as HTMLElement).textContent = question.question;

    const answerButtonsDiv = document.getElementById('answer-buttons') as HTMLElement;
    answerButtonsDiv.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'answer-btn cta-button';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(button, option, question.correctAnswer));
        answerButtonsDiv.appendChild(button);
    });

    (document.getElementById('next-question-btn') as HTMLElement).style.display = 'none';
}

function selectAnswer(button: HTMLButtonElement, selectedOption: string, correctAnswer: string) {
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
        (btn as HTMLButtonElement).disabled = true;
        const btnOption = (btn as HTMLElement).textContent;
        if (btnOption === correctAnswer) {
            btn.classList.add('correct');
        } else if (btnOption === selectedOption) {
            btn.classList.add('incorrect');
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        (document.getElementById('quiz-score') as HTMLElement).textContent = `Wynik: ${score}`;
    }

    const nextBtn = document.getElementById('next-question-btn') as HTMLButtonElement;
    nextBtn.style.display = 'block';
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        displayQuestion();
    };
}

function showResults() {
    showQuizView('quiz-results');
    const title = document.getElementById('results-title') as HTMLElement;
    const summary = document.getElementById('results-summary') as HTMLElement;
    title.textContent = "Quiz zakończony!";
    summary.textContent = `Twój wynik to ${score} na ${currentQuiz.length} poprawnych odpowiedzi.`;
}

function restartQuiz() {
    currentQuiz = [];
    currentQuestionIndex = 0;
    score = 0;
    showQuizView('quiz-selection');
}