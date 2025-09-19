/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { GoogleGenAI } from "@google/genai";

interface Podcast {
    title: string;
    summary: string;
    audioUrl: string;
    imageUrl: string;
    tags: string[];
    transcriptUrl: string;
}

const podcastData: Podcast[] = [
    {
        title: 'Odcinek 1: Fundamenty Sztucznej Inteligencji',
        summary: 'Ten odcinek wyjaśnia, czym jest sztuczna inteligencja, odróżniając ją od tradycyjnego oprogramowania poprzez zdolność do adaptacji, przedstawia jej burzliwą historię od lat 50. XX wieku i omawia podział na istniejącą dziś wąską AI (ANI) oraz hipotetyczną ogólną (AGI) i superinteligencję (ASI).',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%201_Fundamenty%20Sztucznej%20Inteligencji_%20Definicja,%20Historia,%20Rodzaje.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 1.png',
        tags: ['Historia AI', 'Wąska AI', 'Definicja AI'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzia%C5%82%201_Fundamenty%20Sztucznej%20Inteligencji_%20Definicja,%20Historia,%20Rodzaje.txt',
    },
    {
        title: 'Odcinek 2: Machine Learning: Silnik Sztucznej Inteligencji',
        summary: 'W tym odcinku omawiane są trzy główne paradygmaty uczenia maszynowego: nadzorowane (klasyfikacja i regresja), nienadzorowane (klastrowanie, asocjacja) i uczenie przez wzmacnianie, podkreślając fundamentalną rolę jakości danych dla skuteczności algorytmów i modeli.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzial%202_Machine%20Learning_%20The%20Engine%20of%20AI.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 2.png',
        tags: ['Uczenie nadzorowane', 'Uczenie przez wzmacnianie', 'Jakość danych'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzial%202_Machine%20Learning_%20The%20Engine%20of%20AI.txt',
    },
    {
        title: 'Odcinek 3: Wielkie Modele Językowe (LLM): Językowa Rewolucja',
        summary: 'Odcinek ten wyjaśnia, co oznacza "wielki" w nazwie LLM (dane, parametry, moc obliczeniowa), opisuje ich działanie oparte na architekturze Transformer, a także przedstawia kluczowe ograniczenia, takie jak halucynacje, uprzedzenia i brak realnego rozumienia świata.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzial%203_Large%20Language%20Models_%20A%20Linguistic%20Revolution.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 3.png',
        tags: ['LLM', 'Architektura Transformer', 'Halucynacje AI'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzial%203_Large%20Language%20Models_%20A%20Linguistic%20Revolution.txt',
    },
    {
        title: 'Odcinek 4: Sztuka Dialogu: Mistrzostwo w Promptowaniu AI',
        summary: 'Ten odcinek skupia się na tworzeniu skutecznych promptów, omawiając zasady precyzji, kontekstu i definiowania roli, a także prezentuje zaawansowane techniki, takie jak Few-Shot, Chain-of-Thought do logicznego rozumowania oraz Flipped Interaction.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzial%204_Sztuka%20Dialogu_%20Mistrzostwo%20w%20Promptowaniu%20AI.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 4.png',
        tags: ['Prompting', 'Chain-of-Thought', 'Few-Shot'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzia%C5%82%204_Sztuka%20Dialogu_%20Mistrzostwo%20w%20Promptowaniu%20AI.txt',
    },
    {
        title: 'Odcinek 5: Kreowanie Asystentów AI: Twoi Spersonalizowani Cyfrowi Eksperci',
        summary: 'Materiał wyjaśnia, jak przejść od ogólnych zapytań do tworzenia wyspecjalizowanych asystentów AI za pomocą "custom instructions", definiując sześć kluczowych filarów ich "konstytucji": rolę, misję, zasady, ton, proces i format wyjściowy.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzial%205_Crafting%20AI%20Assistants_%20Your%20Personalized%20Digital%20Experts.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 5.png',
        tags: ['Asystent AI', 'Custom Instructions', 'Personalizacja AI'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzia%C5%82%205_Crafting%20AI%20Assistants_%20Your%20Personalized%20Digital%20Experts.txt',
    },
    {
        title: 'Odcinek 6: Autonomiczni Agenci AI: Od Asystentów do Wykonawców',
        summary: 'Odcinek ten przedstawia ewolucję od reaktywnych asystentów do proaktywnych agentów AI, którzy autonomicznie realizują cele, wykorzystując narzędzia i działając w pętli ReAct (rozumowanie-działanie-obserwacja). ',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%206_Autonomous%20AI%20Agents_%20From%20Assistants%20to%20Executors.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 6.png',
        tags: ['Agent AI', 'Pętla ReAct', 'Autonomia AI'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzia%C5%82%206_Autonomous%20AI%20Agents_%20From%20Assistants%20to%20Executors.txt',
    },
    {
        title: 'Odcinek 7: Budowanie Zespołów Agentów AI: Synergia i Projektowanie Przepływów Pracy',
        summary: 'W tym odcinku omówiono korzyści płynące z tworzenia zespołów wyspecjalizowanych agentów AI, takie jak lepsza jakość, redukcja błędów dzięki agentom-krytykom i większa skalowalność, a także przedstawiono metody projektowania ich współpracy w modelach sekwencyjnych lub hierarchicznych.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%207_%20Building%20AI%20Agent%20Teams_%20Synergy%20and%20Workflow%20Design.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 7.png',
        tags: ['Zespoły agentów AI', 'Systemy wieloagentowe', 'Workflow AI'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzia%C5%82%207_%20Building%20AI%20Agent%20Teams_%20Synergy%20and%20Workflow%20Design.txt',
    },
    {
        title: 'Odcinek 8: Halucynacje AI: Zrozumienie i Kontrola',
        summary: 'Ten odcinek wyjaśnia, że halucynacje AI wynikają ze statystycznej natury modeli językowych, omawia techniki ich minimalizowania, takie jak uziemienie (RAG) i weryfikacja, a także wskazuje, kiedy ta skłonność do "wymyślania" może być pożądaną cechą w zadaniach kreatywnych.',
        audioUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Rozdzia%C5%82%208_AI%20Hallucinations_%20Understanding%20and%20Control.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 8.png',
        tags: ['Halucynacje AI', 'RAG', 'Kreatywność AI'],
        transcriptUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Transcripts/main/Rozdzia%C5%82%208_AI%20Hallucinations_%20Understanding%20and%20Control.txt',
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
const volumeIcon = `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>`;
const muteIcon = `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>`;
const heartIconOutline = `<svg viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const heartIconFilled = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const reportIcon = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"></path></svg>`;
const deleteIcon = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`;

// --- Audio Visualizer Logic ---
let audioContext: AudioContext | null = null;
const audioNodes = new WeakMap<HTMLAudioElement, { source: MediaElementAudioSourceNode, analyser: AnalyserNode }>();

function drawVisualizer(canvas: HTMLCanvasElement, analyser: AnalyserNode, audio: HTMLAudioElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions based on its displayed size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
        if (audio.paused || audio.ended) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return; // Stop the animation loop
        }

        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (rect.width / bufferLength) * 1.5;
        let x = 0;

        const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
        gradient.addColorStop(0, 'rgba(77, 77, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(77, 77, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(77, 77, 255, 0.1)');
        ctx.fillStyle = gradient;
        
        for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * rect.height;
            ctx.fillRect(x, rect.height - barHeight, barWidth, barHeight);
            x += barWidth + 2; // Add spacing between bars
        }
    };
    draw();
}

/**
 * Creates and manages a custom audio player.
 * @param audio - The HTMLAudioElement to control.
 * @param container - The container element to append the player controls to.
 */
function createCustomPlayer(audio: HTMLAudioElement, container: HTMLElement) {
    const visualizerCanvas = document.createElement('canvas');
    visualizerCanvas.className = 'audio-visualizer';
    container.appendChild(visualizerCanvas);

    const playerControls = document.createElement('div');
    playerControls.className = 'player-controls';

    const playPauseBtn = document.createElement('button');
    playPauseBtn.className = 'play-pause-btn';
    playPauseBtn.setAttribute('aria-label', 'Odtwarzaj');
    playPauseBtn.innerHTML = playIcon;

    const restartBtn = document.createElement('button');
    restartBtn.className = 'restart-btn';
    restartBtn.setAttribute('aria-label', 'Odtwórz od początku');
    restartBtn.title = 'Odtwórz od początku';
    restartBtn.innerHTML = replayIcon;

    const seekSlider = document.createElement('input');
    seekSlider.type = 'range';
    seekSlider.className = 'seek-slider';
    seekSlider.min = '0';
    seekSlider.value = '0';
    seekSlider.step = '1';

    const timeContainer = document.createElement('div');
    timeContainer.className = 'time-container';

    const currentTimeEl = document.createElement('span');
    currentTimeEl.className = 'time-display';
    currentTimeEl.textContent = '00:00';

    const durationEl = document.createElement('span');
    durationEl.className = 'time-display';
    durationEl.textContent = '00:00';
    
    const volumeControls = document.createElement('div');
    volumeControls.className = 'volume-controls';
    
    const volumeBtn = document.createElement('button');
    volumeBtn.className = 'volume-btn';
    volumeBtn.setAttribute('aria-label', 'Wycisz');
    volumeBtn.innerHTML = volumeIcon;

    const volumeSlider = document.createElement('input');
    volumeSlider.type = 'range';
    volumeSlider.className = 'volume-slider';
    volumeSlider.min = '0';
    volumeSlider.max = '1';
    volumeSlider.step = '0.01';
    volumeSlider.value = '1';

    timeContainer.append(currentTimeEl, seekSlider, durationEl);
    volumeControls.append(volumeBtn, volumeSlider);
    playerControls.append(playPauseBtn, restartBtn, timeContainer, volumeControls);
    container.appendChild(playerControls);

    // --- Player Logic ---
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    restartBtn.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.pause();
    });

    audio.addEventListener('play', () => {
        playPauseBtn.innerHTML = pauseIcon;
        playPauseBtn.setAttribute('aria-label', 'Pauza');

        // Initialize AudioContext on first user interaction
        if (!audioContext) {
            try {
                audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            } catch (e) {
                console.error("Web Audio API is not supported in this browser.", e);
                return; // Exit if not supported
            }
        }

        // Connect audio element to the visualizer nodes if not already connected
        if (audioContext && !audioNodes.has(audio)) {
            try {
                const source = audioContext.createMediaElementSource(audio);
                const analyser = audioContext.createAnalyser();
                source.connect(analyser);
                analyser.connect(audioContext.destination);
                analyser.fftSize = 128; // Lower value for fewer bars, better performance
                audioNodes.set(audio, { source, analyser });
            } catch (e) {
                 console.error("Error setting up audio nodes. Is audio cross-origin?", e);
                 return;
            }
        }
        
        const nodes = audioNodes.get(audio);
        if (nodes) {
            drawVisualizer(visualizerCanvas, nodes.analyser, audio);
        }
    });

    audio.addEventListener('pause', () => {
        playPauseBtn.innerHTML = playIcon;
        playPauseBtn.setAttribute('aria-label', 'Odtwarzaj');
    });

    audio.addEventListener('loadedmetadata', () => {
        seekSlider.max = `${audio.duration}`;
        durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        seekSlider.value = `${audio.currentTime}`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });
    
    seekSlider.addEventListener('input', () => {
        audio.currentTime = parseFloat(seekSlider.value);
    });
    
    volumeBtn.addEventListener('click', () => {
        audio.muted = !audio.muted;
    });
    
    volumeSlider.addEventListener('input', () => {
        const volume = parseFloat(volumeSlider.value);
        audio.volume = volume;
        if (volume > 0) {
            audio.muted = false;
        }
    });

    audio.addEventListener('volumechange', () => {
        volumeSlider.value = audio.muted ? '0' : String(audio.volume);
        if (audio.muted || audio.volume === 0) {
            volumeBtn.innerHTML = muteIcon;
            volumeBtn.setAttribute('aria-label', 'Włącz dźwięk');
        } else {
            volumeBtn.innerHTML = volumeIcon;
            volumeBtn.setAttribute('aria-label', 'Wycisz');
        }
    });
}

/**
 * Initializes the interactive plexus background animation.
 */
function initPlexusBackground() {
    const canvas = document.getElementById('plexus-bg') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const options = {
        particleColor: 'rgba(255, 255, 255, 0.7)',
        lineColor: 'rgba(255, 255, 255, 0.1)',
        particleAmount: 50,
        defaultRadius: 1.5,
        linkRadius: 150, // How close particles need to be to link
        mouseLinkRadius: 200, // How close mouse needs to be to link
    };

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = options.defaultRadius;
        }

        draw() {
            ctx!.beginPath();
            ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx!.fillStyle = options.particleColor;
            ctx!.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < (canvas.width * canvas.height) / 25000; i++) {
            particles.push(new Particle());
        }
    }

    function linkParticles() {
        for (let i = 0; i < particles.length; i++) {
            // Link to other particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < options.linkRadius) {
                    const opacity = 1 - dist / options.linkRadius;
                    ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
                    ctx!.lineWidth = 1;
                    ctx!.beginPath();
                    ctx!.moveTo(particles[i].x, particles[i].y);
                    ctx!.lineTo(particles[j].x, particles[j].y);
                    ctx!.stroke();
                }
            }

            // Link to mouse
            const dxMouse = particles[i].x - mouse.x;
            const dyMouse = particles[i].y - mouse.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            if (distMouse < options.mouseLinkRadius) {
                 const opacity = 1 - distMouse / options.mouseLinkRadius;
                 ctx!.strokeStyle = `rgba(77, 77, 255, ${opacity * 0.5})`;
                 ctx!.lineWidth = 1.5;
                 ctx!.beginPath();
                 ctx!.moveTo(particles[i].x, particles[i].y);
                 ctx!.lineTo(mouse.x, mouse.y);
                 ctx!.stroke();
            }
        }
    }

    function animate() {
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        linkParticles();
        requestAnimationFrame(animate);
    }

    // Event Listeners
    window.addEventListener('resize', () => {
        setCanvasSize();
        createParticles();
    });
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
     window.addEventListener('mouseout', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    // Initial setup
    setCanvasSize();
    createParticles();
    animate();
}


document.addEventListener('DOMContentLoaded', () => {
    // --- Admin Mode Check ---
    const urlParams = new URLSearchParams(window.location.search);
    const isAdmin = urlParams.get('admin') === 'true';

    // --- Centralized AI Client ---
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

    /**
     * Converts markdown-like text to formatted HTML.
     * Handles bold, italics, and unordered/ordered lists.
     */
    const formatResponseToHtml = (text: string): string => {
        const lines = text.split('\n');
        let htmlResult = '';
        let inUl = false;
        let inOl = false;

        for (const line of lines) {
            let processedLine = line
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>');

            const trimmedLine = line.trim();

            // Unordered List
            if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
                if (inOl) { htmlResult += '</ol>'; inOl = false; }
                if (!inUl) { htmlResult += '<ul>'; inUl = true; }
                htmlResult += `<li>${processedLine.trim().substring(2)}</li>`;
                continue;
            }

            // Ordered List
            if (trimmedLine.match(/^\d+\.\s/)) {
                if (inUl) { htmlResult += '</ul>'; inUl = false; }
                if (!inOl) { htmlResult += '<ol>'; inOl = true; }
                htmlResult += `<li>${processedLine.trim().replace(/^\d+\.\s/, '')}</li>`;
                continue;
            }

            // Close any open lists if the current line is not a list item
            if (inUl) { htmlResult += '</ul>'; inUl = false; }
            if (inOl) { htmlResult += '</ol>'; inOl = false; }

            // Regular paragraph
            if (trimmedLine.length > 0) {
                htmlResult += `<p>${processedLine}</p>`;
            }
        }
        
        // Close any dangling lists at the end
        if (inUl) { htmlResult += '</ul>'; }
        if (inOl) { htmlResult += '</ol>'; }

        return htmlResult;
    };

    // --- Plexus Background ---
    initPlexusBackground();

    // --- Favorites & Comments Logic ---
    let favoritePodcasts = new Set<string>();
    let reportedComments = new Set<string>();

    const loadFavorites = () => {
        const storedFavorites = localStorage.getItem('favoritePodcasts');
        if (storedFavorites) {
            favoritePodcasts = new Set(JSON.parse(storedFavorites));
        }
    };

    const saveFavorites = () => {
        localStorage.setItem('favoritePodcasts', JSON.stringify(Array.from(favoritePodcasts)));
    };
    
    const loadReportedComments = () => {
        const storedReported = localStorage.getItem('reportedComments');
        if (storedReported) {
            reportedComments = new Set(JSON.parse(storedReported));
        }
    };
    
    const saveReportedComments = () => {
        localStorage.setItem('reportedComments', JSON.stringify(Array.from(reportedComments)));
    };

    interface Comment {
        timestamp: number;
        text: string;
    }

    const loadComments = (podcastTitle: string): Comment[] => {
        const storedComments = localStorage.getItem(`comments-${podcastTitle}`);
        return storedComments ? JSON.parse(storedComments) : [];
    };

    const saveComments = (podcastTitle: string, comments: Comment[]) => {
        localStorage.setItem(`comments-${podcastTitle}`, JSON.stringify(comments));
    };

    // Expanded list of forbidden words and their variations
    const forbiddenWords = [
        'kurwa', 'chuj', 'pizda', 'jebac', 'pierdolic', 'suka', 'skurwysyn', 'pojebany', 'cipa',
        'gowno', 'gówno', 'cholera', 'dupa', 'dziwka', 'huj', 'kutas', 'szmata', 'spierdalaj',
        'wypierdalaj', 'zajebisty', 'pedal', 'debil', 'idiota', 'kretyn', 'kurde', 'kurcze',
        'pierdole', 'jebany', 'jebana', 'jebane', 'jebani', 'pierdolony', 'pierdolona', 'pierdolone',
        'pierdoleni', 'kurestwo', 'hwdp', 'jp', 'fuck', 'cunt', 'bitch', 'asshole', 'motherfucker',
        'cock', 'pussy', 'penis', 'cipka', 'kurw', 'jeb', 'pierdol', 'szmato', 'kurwy', 'kurwami',
        'chuje', 'chujnia', 'chujowy', 'chuja', 'pizdy', 'pizdzie', 'jebal', 'jebał', 'jebie',
        'jebią', 'jebia', 'pierdolisz', 'pierdoli', 'sukinsyn', 'skurwiel', 'pojeb', 'zjeb', 'cip',
        'gnojek', 'szmaciarz', 'dziwkarz', 'kurewka'
    ];
    
    const containsForbiddenWords = (text: string): boolean => {
        // Normalize the input text: convert to lower case and remove all non-alphanumeric characters.
        // This helps catch variations like "k.u.r.w.a" or "j e b a ć".
        const normalizedText = text.toLowerCase().replace(/[\s\W_]+/g, '');
        
        // Check if the normalized text includes any of the forbidden words.
        return forbiddenWords.some(word => normalizedText.includes(word));
    };

    const renderFavoritesSection = () => {
        const favoritesSection = document.getElementById('favorites-section');
        const favoritesGrid = document.getElementById('favorites-grid');
        if (!favoritesSection || !favoritesGrid) return;

        favoritesGrid.innerHTML = '';
        if (favoritePodcasts.size === 0) {
            favoritesSection.style.display = 'none';
            return;
        }

        favoritesSection.style.display = 'block';
        podcastData.forEach(podcast => {
            if (favoritePodcasts.has(podcast.title)) {
                const favCard = document.createElement('a');
                const cardId = `podcast-${encodeURIComponent(podcast.title).replace(/[.'()]/g, '')}`;
                favCard.href = `#${cardId}`;
                favCard.className = 'favorite-card';
                favCard.innerHTML = `
                    <img src="${podcast.imageUrl}" alt="${podcast.title}">
                    <p>${podcast.title}</p>
                `;
                 favCard.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.getElementById(cardId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
                favoritesGrid.appendChild(favCard);
            }
        });
    };
    
    const renderComments = (commentsList: HTMLElement, podcastTitle: string, audio: HTMLAudioElement) => {
        commentsList.innerHTML = '';
        const comments = loadComments(podcastTitle);
        comments.sort((a, b) => a.timestamp - b.timestamp);

        if (comments.length === 0) {
            commentsList.innerHTML = `<p class="system-message" style="background: none; text-align: left; padding-left: 0;">Brak komentarzy. Bądź pierwszy!</p>`;
            return;
        }

        comments.forEach(comment => {
            const commentId = `${podcastTitle}-${comment.timestamp}-${comment.text}`;
            const isReported = reportedComments.has(commentId);
            
            const commentItem = document.createElement('div');
            commentItem.className = 'comment-item';
            if (isAdmin && isReported) {
                commentItem.classList.add('reported-admin');
            }
            
            const meta = document.createElement('div');
            meta.className = 'comment-meta';
            
            const timestampEl = document.createElement('span');
            timestampEl.className = 'comment-timestamp';
            timestampEl.textContent = formatTime(comment.timestamp);
            timestampEl.title = `Przejdź do ${formatTime(comment.timestamp)}`;
            timestampEl.addEventListener('click', () => {
                audio.currentTime = comment.timestamp;
                audio.play();
            });

            const controls = document.createElement('div');
            controls.className = 'comment-controls';

            const reportBtn = document.createElement('button');
            reportBtn.className = 'report-btn';
            reportBtn.innerHTML = reportIcon;
            reportBtn.disabled = isReported;
            reportBtn.setAttribute('aria-label', isReported ? 'Zgłoszono' : 'Zgłoś komentarz');
            reportBtn.title = isReported ? 'Zgłoszono' : 'Zgłoś komentarz';

            reportBtn.addEventListener('click', () => {
                reportedComments.add(commentId);
                saveReportedComments();
                reportBtn.disabled = true;
                reportBtn.setAttribute('aria-label', 'Zgłoszono');
                 reportBtn.title = 'Zgłoszono';
                showNotification('Komentarz został zgłoszony do moderacji.');
                 if (isAdmin) {
                    commentItem.classList.add('reported-admin');
                }
            });

            controls.appendChild(reportBtn);

            if (isAdmin) {
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'admin-delete-comment-btn';
                deleteBtn.innerHTML = deleteIcon;
                deleteBtn.title = 'Usuń komentarz';
                deleteBtn.setAttribute('aria-label', 'Usuń komentarz');
                deleteBtn.addEventListener('click', () => {
                    if (confirm('Czy na pewno chcesz usunąć ten komentarz?')) {
                        const currentComments = loadComments(podcastTitle);
                        const filteredComments = currentComments.filter(c => c.timestamp !== comment.timestamp || c.text !== comment.text);
                        saveComments(podcastTitle, filteredComments);
                        renderComments(commentsList, podcastTitle, audio);
                        showNotification('Komentarz usunięty.');
                    }
                });
                controls.appendChild(deleteBtn);
            }


            const textEl = document.createElement('p');
            textEl.className = 'comment-text';
            textEl.textContent = comment.text;
            
            meta.append(timestampEl, controls);
            commentItem.append(meta, textEl);
            commentsList.appendChild(commentItem);
        });
    };

    // --- Podcast Grid Generation ---
    const grid = document.getElementById('podcast-grid');
    const audioPlayers = new Map<string, HTMLAudioElement>();
    
    loadFavorites(); // Load before rendering cards
    loadReportedComments(); // Load reported comments data

    if (grid) {
        podcastData.forEach(podcast => {
            const card = document.createElement('div');
            card.className = 'podcast-card';
            card.dataset.title = podcast.title; 
            card.dataset.tags = podcast.tags.join(',');
            const cardId = `podcast-${encodeURIComponent(podcast.title).replace(/[.'()]/g, '')}`;
            card.id = cardId;

            const img = document.createElement('img');
            img.src = podcast.imageUrl;
            img.alt = `Okładka podcastu: ${podcast.title}`;
            
            const cardHeader = document.createElement('div');
            cardHeader.className = 'podcast-card-header';

            const title = document.createElement('h3');
            title.textContent = podcast.title;
            
            const favBtn = document.createElement('button');
            favBtn.className = 'favorite-btn';
            
            const updateFavBtnState = () => {
                if (favoritePodcasts.has(podcast.title)) {
                    favBtn.innerHTML = heartIconFilled;
                    favBtn.classList.add('favorited');
                    favBtn.setAttribute('aria-label', 'Usuń z ulubionych');
                } else {
                    favBtn.innerHTML = heartIconOutline;
                    favBtn.classList.remove('favorited');
                    favBtn.setAttribute('aria-label', 'Dodaj do ulubionych');
                }
            };
            
            favBtn.addEventListener('click', () => {
                if (favoritePodcasts.has(podcast.title)) {
                    favoritePodcasts.delete(podcast.title);
                } else {
                    favoritePodcasts.add(podcast.title);
                }
                saveFavorites();
                updateFavBtnState();
                renderFavoritesSection();
            });
            updateFavBtnState();
            cardHeader.append(title, favBtn);

            const summary = document.createElement('p');
            summary.className = 'ai-summary';
            summary.textContent = podcast.summary;
            
            const playerContainer = document.createElement('div');
            
            const audio = new Audio();
            audio.crossOrigin = 'anonymous'; // IMPORTANT: Set before src for Web Audio API
            audio.src = podcast.audioUrl;

            createCustomPlayer(audio, playerContainer);
            audioPlayers.set(podcast.title, audio); 

            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tags';
            tagsContainer.innerHTML = podcast.tags.map(tag => `<span>${tag}</span>`).join('');
            
            const takeawaysContainer = document.createElement('div');
            takeawaysContainer.className = 'takeaways-container';
            const takeawaysBtn = document.createElement('button');
            takeawaysBtn.className = 'takeaways-btn';
            takeawaysBtn.textContent = 'Pokaż kluczowe wnioski AI';

            takeawaysBtn.addEventListener('click', async () => {
                takeawaysBtn.disabled = true;
                takeawaysContainer.innerHTML = '<div class="loader-small"></div>';
                try {
                    const transcriptResponse = await fetch(podcast.transcriptUrl);
                    if (!transcriptResponse.ok) throw new Error('Failed to fetch transcript.');
                    const transcriptText = await transcriptResponse.text();

                    const systemInstruction = "Jesteś asystentem AI, którego zadaniem jest analiza i podsumowanie tekstu. Na podstawie dostarczonej transkrypcji podcastu, zidentyfikuj i wypisz od 3 do 5 kluczowych wniosków lub najważniejszych punktów w formie listy. Odpowiadaj w języku polskim. Twoja odpowiedź powinna być zwięzła i łatwa do przyswojenia.";
                    const prompt = `Oto transkrypcja:\n\n${transcriptText}\n\nWygeneruj kluczowe wnioski.`;

                    const response = await ai.models.generateContent({
                        model: 'gemini-2.5-flash',
                        contents: prompt,
                        config: { systemInstruction: systemInstruction },
                    });
                    
                    const resultDiv = document.createElement('div');
                    resultDiv.className = 'takeaways-result';
                    resultDiv.innerHTML = formatResponseToHtml(response.text);
                    takeawaysContainer.innerHTML = ''; 
                    takeawaysContainer.appendChild(resultDiv);
                } catch (error) {
                    console.error("Error generating key takeaways:", error);
                    takeawaysContainer.innerHTML = '';
                    takeawaysContainer.appendChild(takeawaysBtn);
                    takeawaysBtn.disabled = false;
                    takeawaysBtn.textContent = 'Błąd. Spróbuj ponownie';
                }
            });
            takeawaysContainer.appendChild(takeawaysBtn);

            // --- Comments Section ---
            const commentsSection = document.createElement('div');
            commentsSection.className = 'comments-section';

            const commentsHeader = document.createElement('div');
            commentsHeader.className = 'comments-header';

            const commentsTitle = document.createElement('h4');
            commentsTitle.textContent = 'Komentarze';
            commentsHeader.appendChild(commentsTitle);
            
            const commentsList = document.createElement('div');
            commentsList.className = 'comments-list';

            if (isAdmin) {
                const clearBtn = document.createElement('button');
                clearBtn.className = 'admin-clear-btn';
                clearBtn.textContent = 'Wyczyść komentarze';
                clearBtn.addEventListener('click', () => {
                    if (confirm(`Czy na pewno chcesz usunąć wszystkie komentarze dla "${podcast.title}"?`)) {
                        saveComments(podcast.title, []); // Clear comments
                        renderComments(commentsList, podcast.title, audio);
                        showNotification('Komentarze zostały wyczyszczone.');
                    }
                });
                commentsHeader.appendChild(clearBtn);
            }

            const commentForm = document.createElement('form');
            commentForm.className = 'comment-form';
            const commentInput = document.createElement('input');
            commentInput.type = 'text';
            commentInput.className = 'comment-form-input';
            commentInput.placeholder = 'Dodaj komentarz...';
            commentInput.required = true;

            const commentSubmitBtn = document.createElement('button');
            commentSubmitBtn.type = 'submit';
            commentSubmitBtn.className = 'comment-form-button';
            commentSubmitBtn.textContent = 'Opublikuj';
            
            const timestampIndicator = document.createElement('span');
            timestampIndicator.className = 'comment-timestamp-indicator';
            timestampIndicator.textContent = `w ${formatTime(audio.currentTime)}`;

            commentForm.append(commentInput, commentSubmitBtn, timestampIndicator);
            
            commentsSection.append(commentsHeader, commentForm, commentsList);
            
            // Comments Logic
            audio.addEventListener('timeupdate', () => {
                timestampIndicator.textContent = `w ${formatTime(audio.currentTime)}`;
            });

            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const text = commentInput.value.trim();
                if (!text) return;

                if (containsForbiddenWords(text)) {
                    showNotification('Komentarz zawiera niedozwolone słowa i nie został opublikowany.');
                    return; 
                }
                
                const newComment: Comment = {
                    timestamp: audio.currentTime,
                    text: text
                };

                const existingComments = loadComments(podcast.title);
                existingComments.push(newComment);
                saveComments(podcast.title, existingComments);
                
                renderComments(commentsList, podcast.title, audio);
                commentInput.value = '';
            });

            renderComments(commentsList, podcast.title, audio);

            card.append(img, cardHeader, summary, playerContainer, tagsContainer, takeawaysContainer, commentsSection);
            grid.appendChild(card);
        });

        renderFavoritesSection();
    }

    // --- Topic Map Logic ---
    const topicMapContainer = document.getElementById('topic-map-container');
    if (topicMapContainer) {
        const tagFrequencies = new Map<string, number>();
        podcastData.forEach(p => {
            p.tags.forEach(tag => {
                tagFrequencies.set(tag, (tagFrequencies.get(tag) || 0) + 1);
            });
        });

        const sortedTags = Array.from(tagFrequencies.entries()).sort((a, b) => b[1] - a[1]);
        const maxFreq = sortedTags[0]?.[1] || 1;
        const minFreq = sortedTags[sortedTags.length - 1]?.[1] || 1;

        sortedTags.forEach(([tag, freq]) => {
            const tagEl = document.createElement('button');
            tagEl.className = 'topic-tag';
            tagEl.textContent = tag;
            tagEl.dataset.tag = tag;

            // Vary font size based on frequency
            const normalizedFreq = (freq - minFreq) / (maxFreq - minFreq);
            const fontSize = 1 + normalizedFreq * 1.5; // From 1rem to 2.5rem
            tagEl.style.fontSize = `${fontSize}rem`;

            topicMapContainer.appendChild(tagEl);
        });

        topicMapContainer.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (!target.classList.contains('topic-tag')) return;

            const selectedTag = target.dataset.tag;
            const isActive = target.classList.contains('active');
            
            // Deactivate all tags
            topicMapContainer.querySelectorAll('.topic-tag').forEach(t => t.classList.remove('active'));

            if (isActive) { // If it was active, deactivate it and show all cards
                grid?.querySelectorAll('.podcast-card').forEach(card => {
                    card.classList.remove('filtered-out');
                });
            } else { // If it was not active, activate it and filter cards
                target.classList.add('active');
                grid?.querySelectorAll<HTMLElement>('.podcast-card').forEach(card => {
                    const cardTags = card.dataset.tags || '';
                    if (cardTags.includes(selectedTag!)) {
                        card.classList.remove('filtered-out');
                    } else {
                        card.classList.add('filtered-out');
                    }
                });
            }
        });
    }


    // --- Modal Logic ---
    const aboutBtn = document.getElementById('about-project-btn');
    const modalOverlay = document.getElementById('about-modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPlayerContainer = document.getElementById('modal-player-container');

    if (aboutBtn && modalOverlay && modalCloseBtn && modalPlayerContainer) {
        const modalAudio = new Audio();
        modalAudio.crossOrigin = 'anonymous'; // IMPORTANT: Set before src for Web Audio API
        modalAudio.src = aboutProjectAudioUrl;

        createCustomPlayer(modalAudio, modalPlayerContainer);
        
        const openModal = () => {
            modalOverlay.classList.add('visible');
            modalAudio.play();
        };

        const closeModal = () => {
            modalOverlay.classList.remove('visible');
            modalAudio.pause();
            modalAudio.currentTime = 0; // Reset audio on close
        };

        aboutBtn.addEventListener('click', openModal);
        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // --- Form Logic ---
    function showNotification(message: string): void {
        const notificationBubble = document.getElementById('notification-bubble');
        if (notificationBubble) {
            notificationBubble.innerText = message;
            notificationBubble.classList.add('show');
            setTimeout(() => {
                notificationBubble.classList.remove('show');
            }, 3000);
        }
    }

    const feedbackForm = document.getElementById('feedback-form') as HTMLFormElement;
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitButton = feedbackForm.querySelector('button[type="submit"]') as HTMLButtonElement;
            const ratingInput = document.querySelector('input[name="star-rating"]:checked') as HTMLInputElement;
            
            if (!ratingInput) {
                showNotification('Proszę ocenić stronę, aby wysłać opinię.');
                return;
            }

            const formData = {
                rating: ratingInput.value,
                likes: (document.getElementById('co-podobalo') as HTMLTextAreaElement).value,
                improvements: (document.getElementById('co-poprawic') as HTMLTextAreaElement).value,
            };

            const FORM_ENDPOINT_URL = 'https://formspree.io/f/mldwqejv';

            submitButton.disabled = true;
            submitButton.textContent = 'Wysyłanie...';

            try {
                const response = await fetch(FORM_ENDPOINT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    showNotification('Dziękujemy za opinię! Została pomyślnie wysłana.');
                    feedbackForm.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                showNotification('Wystąpił błąd podczas wysyłania opinii. Spróbuj ponownie.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Wyślij Opinię';
            }
        });
    }
    
    const coPodobalo = document.getElementById('co-podobalo');
    const coPoprawic = document.getElementById('co-poprawic');
    if (coPodobalo) {
        coPodobalo.addEventListener('focus', () => coPodobalo.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    }
    if (coPoprawic) {
        coPoprawic.addEventListener('focus', () => coPoprawic.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    }

    // --- Chatbot Logic ---
    const chatbotFab = document.getElementById('chatbot-fab');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form') as HTMLFormElement;
    const chatInput = document.getElementById('chat-input') as HTMLInputElement;
    const chatSendBtn = document.getElementById('chat-send-btn') as HTMLButtonElement;
    
    if (chatbotFab && chatbotWindow && chatbotCloseBtn && chatMessages && chatForm && chatInput && chatSendBtn) {
        
        let transcriptsLoaded = false;
        let fullTranscriptContext = '';

        const toggleChatbot = () => {
            chatbotWindow.classList.toggle('visible');
            chatbotFab.classList.toggle('open');
            if (chatbotWindow.classList.contains('visible') && !transcriptsLoaded) {
                loadTranscripts();
            }
        };

        const addMessage = (content: string | { answer: string, sourceTitle?: string, timestamp?: number }, sender: 'user' | 'bot' | 'system', isLoading = false) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', `${sender}-message`);
            
            if (isLoading) {
                messageElement.classList.add('thinking-indicator');
                messageElement.innerHTML = `<span></span><span></span><span></span>`;
            } else if (sender === 'bot' && typeof content === 'object') {
                const { answer, sourceTitle, timestamp } = content;
                messageElement.innerHTML = formatResponseToHtml(answer);

                if (sourceTitle && typeof timestamp !== 'undefined') {
                    const button = document.createElement('button');
                    button.className = 'timestamp-link';
                    button.dataset.title = sourceTitle;
                    button.dataset.time = timestamp.toString();
                    button.textContent = `Posłuchaj w "${sourceTitle.split(':')[0]}" (${formatTime(timestamp)})`;
                    messageElement.appendChild(button);
                }
            } else if (typeof content === 'string') {
                messageElement.innerHTML = sender === 'bot' ? formatResponseToHtml(content) : content;
            }
            
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            return messageElement;
        };
        
        const loadTranscripts = async () => {
            const loadingMessage = addMessage('Chwileczkę, uczę się treści wszystkich podcastów...', 'system');
            chatInput.disabled = true;
            chatSendBtn.disabled = true;

            try {
                const transcriptPromises = podcastData.map(async (podcast) => {
                    const response = await fetch(podcast.transcriptUrl);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch transcript for ${podcast.title}: ${response.statusText}`);
                    }
                    const text = await response.text();
                    return `--- TRANSKRYPCJA ODCINKA: ${podcast.title} ---\n${text}`;
                });

                const transcripts = await Promise.all(transcriptPromises);
                fullTranscriptContext = transcripts.join('\n\n');
                transcriptsLoaded = true;

                loadingMessage.remove();
                addMessage('Jestem gotów! O co chcesz zapytać w kontekście podcastów?', 'bot');
                chatInput.disabled = false;
                chatSendBtn.disabled = false;
                chatInput.focus();

            } catch (error) {
                console.error("Error loading transcripts:", error);
                loadingMessage.textContent = 'Nie udało się załadować wiedzy z podcastów. Może to być chwilowy problem z siecią. Proszę, zamknij i otwórz czat ponownie, aby spróbować jeszcze raz.';
            }
        };

        chatbotFab.addEventListener('click', toggleChatbot);
        chatbotCloseBtn.addEventListener('click', toggleChatbot);

        chatMessages.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const button = target.closest<HTMLButtonElement>('.timestamp-link');

            if (button) {
                const title = button.dataset.title;
                const time = parseFloat(button.dataset.time || '0');
                
                if (title && audioPlayers.has(title)) {
                    const card = document.querySelector(`.podcast-card[data-title="${title}"]`);
                    const audio = audioPlayers.get(title);

                    if (card && audio) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        audio.currentTime = time;
                        audio.play();

                        card.classList.add('highlighted');
                        setTimeout(() => card.classList.remove('highlighted'), 2000);
                        
                        toggleChatbot();
                    }
                }
            }
        });

        addMessage('Cześć! Jestem asystentem AI. Zapytaj mnie o cokolwiek związanego z treścią podcastów.', 'bot');

        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userInput = chatInput.value.trim();
            if (!userInput || !transcriptsLoaded) return;

            addMessage(userInput, 'user');
            chatInput.value = '';
            chatSendBtn.disabled = true;
            
            const thinkingIndicator = addMessage('', 'bot', true);

            try {
                const systemInstruction = "Jesteś ekspertem i asystentem AI dla strony internetowej z podcastami 'Marek AI'. Twoja wiedza jest ściśle ograniczona do dostarczonych PEŁNYCH TRANSKRYPCJI podcastów. Twoim zadaniem jest odpowiedzieć na pytanie użytkownika i ZIDENTYFIKOWAĆ źródłowy odcinek podcastu oraz przybliżony CZAS (w sekundach), w którym dany temat jest poruszany. Twoja odpowiedź MUSI być w formacie JSON, zgodnym z podanym schematem. Klucz 'answer' powinien zawierać pełną, merytoryczną odpowiedź w języku polskim. Klucze 'sourceTitle' i 'timestamp' powinny zawierać tytuł odcinka i czas w sekundach. Jeśli nie jesteś w stanie zlokalizować dokładnego fragmentu, pomiń klucze 'sourceTitle' i 'timestamp', ale wciąż udziel odpowiedzi w kluczu 'answer'. Jeśli pytanie wykracza poza treść transkrypcji, odpowiedz w kluczu 'answer', że nie posiadasz takich informacji.";
                
                const fullPrompt = `OTO CAŁA DOSTĘPNA WIEDZA Z TRANSKRYPCJI:\n${fullTranscriptContext}\n\nPYTANIE UŻYTKOWNIKA:\n${userInput}`;
                
                const response = await ai.models.generateContent({
                  model: 'gemini-2.5-flash',
                  contents: fullPrompt,
                  config: {
                    systemInstruction: systemInstruction,
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: 'OBJECT',
                        properties: {
                            answer: { type: 'STRING' },
                            sourceTitle: { type: 'STRING' },
                            timestamp: { type: 'INTEGER' }
                        },
                        required: ['answer']
                    }
                  },
                });

                thinkingIndicator.remove();
                const data = JSON.parse(response.text);
                addMessage(data, 'bot');

            } catch (error) {
                console.error("Błąd podczas komunikacji z API Gemini:", error);
                thinkingIndicator.remove();
                addMessage('Przepraszam, wystąpił błąd. Spróbuj ponownie później.', 'bot');
            } finally {
                chatSendBtn.disabled = false;
                chatInput.focus();
            }
        });
    }

    // --- Quiz Logic ---
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
        const selectionView = document.getElementById('quiz-selection');
        const loadingView = document.getElementById('quiz-loading');
        const activeView = document.getElementById('quiz-active');
        const resultsView = document.getElementById('quiz-results');

        const topicSelect = document.getElementById('quiz-topic-select') as HTMLSelectElement;
        const startBtn = document.getElementById('start-quiz-btn');

        const questionCounter = document.getElementById('question-counter');
        const quizScoreEl = document.getElementById('quiz-score');
        const questionText = document.getElementById('question-text');
        const answerButtonsContainer = document.getElementById('answer-buttons');
        const nextQuestionBtn = document.getElementById('next-question-btn');

        const resultsTitle = document.getElementById('results-title');
        const resultsSummary = document.getElementById('results-summary');
        const restartBtn = document.getElementById('restart-quiz-btn');

        let quizQuestions: any[] = [];
        let currentQuestionIndex = 0;
        let score = 0;
        
        const populateTopicSelect = () => {
            topicSelect.innerHTML = '<option value="all">Wszystkie Odcinki</option>';
            podcastData.forEach((podcast, index) => {
                const option = document.createElement('option');
                option.value = index.toString();
                option.textContent = podcast.title;
                topicSelect.appendChild(option);
            });
        };
        
        const setView = (view: 'selection' | 'loading' | 'active' | 'results') => {
            [selectionView, loadingView, activeView, resultsView].forEach(v => v?.classList.remove('active'));
            document.getElementById(`quiz-${view}`)?.classList.add('active');
        };
        
        const generateQuiz = async () => {
            setView('loading');
            
            const selectedTopic = topicSelect.value;
            let context = '';
            
            if (selectedTopic === 'all') {
                 const allTranscripts = await Promise.all(
                    podcastData.map(p => fetch(p.transcriptUrl).then(res => res.text()))
                );
                context = allTranscripts.join('\n\n---\n\n');
            } else {
                const podcastIndex = parseInt(selectedTopic, 10);
                context = await fetch(podcastData[podcastIndex].transcriptUrl).then(res => res.text());
            }

            const systemInstruction = "Jesteś asystentem AI, którego zadaniem jest tworzenie quizów. Na podstawie dostarczonego tekstu transkrypcji podcastu, wygeneruj 5 pytań wielokrotnego wyboru. Każde pytanie musi mieć 3 możliwe odpowiedzi, z których tylko jedna jest poprawna. Twoja odpowiedź MUSI być w formacie JSON, zgodnym z podanym schematem. Nie dodawaj żadnego innego tekstu ani wyjaśnień poza JSONem.";
            
            const prompt = `Oto tekst do analizy:\n\n${context}\n\nStwórz quiz składający się z 5 pytań.`;

            try {
                const response = await ai.models.generateContent({
                  model: 'gemini-2.5-flash',
                  contents: prompt,
                  config: {
                    systemInstruction: systemInstruction,
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: 'ARRAY',
                        items: {
                            type: 'OBJECT',
                            properties: {
                                question: { type: 'STRING' },
                                answers: {
                                    type: 'ARRAY',
                                    items: { type: 'STRING' }
                                },
                                correctAnswerIndex: { type: 'INTEGER' }
                            },
                            required: ['question', 'answers', 'correctAnswerIndex']
                        }
                    }
                  },
                });

                const jsonResponse = JSON.parse(response.text);
                
                if (!Array.isArray(jsonResponse) || jsonResponse.length === 0) {
                   throw new Error("API returned invalid quiz data.");
                }

                // Shuffle questions for randomness
                quizQuestions = jsonResponse.sort(() => Math.random() - 0.5);
                startQuiz();

            } catch (error) {
                console.error("Error generating quiz:", error);
                setView('selection'); // Go back to selection on error
                alert("Nie udało się wygenerować quizu. Spróbuj ponownie później.");
            }
        };

        const startQuiz = () => {
            currentQuestionIndex = 0;
            score = 0;
            setView('active');
            displayQuestion();
        };

        const displayQuestion = () => {
            resetState();
            const question = quizQuestions[currentQuestionIndex];
            
            if (questionCounter) questionCounter.textContent = `Pytanie ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
            if (quizScoreEl) quizScoreEl.textContent = `Wynik: ${score}`;
            if (questionText) questionText.textContent = question.question;

            question.answers.forEach((answer: string, index: number) => {
                const button = document.createElement('button');
                button.textContent = answer;
                button.classList.add('answer-btn');
                button.dataset.correct = (index === question.correctAnswerIndex).toString();
                button.addEventListener('click', selectAnswer);
                answerButtonsContainer?.appendChild(button);
            });
        };
        
        const resetState = () => {
            if (answerButtonsContainer) answerButtonsContainer.innerHTML = '';
            if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';
        };

        const selectAnswer = (e: Event) => {
            const selectedBtn = e.target as HTMLButtonElement;
            const isCorrect = selectedBtn.dataset.correct === 'true';

            if (isCorrect) {
                score++;
            }
            
            if (quizScoreEl) quizScoreEl.textContent = `Wynik: ${score}`;
            
            Array.from(answerButtonsContainer?.children || []).forEach(button => {
                const btn = button as HTMLButtonElement;
                if (btn.dataset.correct === 'true') {
                    btn.classList.add('correct');
                } else if (btn === selectedBtn) {
                    btn.classList.add('incorrect');
                }
                btn.disabled = true;
            });
            
            if (nextQuestionBtn) nextQuestionBtn.style.display = 'block';
        };
        
        const showNextQuestion = () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                displayQuestion();
            } else {
                showResults();
            }
        };
        
        const showResults = () => {
            setView('results');
            if(resultsTitle) resultsTitle.textContent = "Quiz Zakończony!";
            if(resultsSummary) resultsSummary.textContent = `Twój wynik to: ${score} na ${quizQuestions.length} poprawnych odpowiedzi.`;
        };

        // Event Listeners
        startBtn?.addEventListener('click', generateQuiz);
        nextQuestionBtn?.addEventListener('click', showNextQuestion);
        restartBtn?.addEventListener('click', () => setView('selection'));

        // Initial setup
        populateTopicSelect();
        setView('selection');
    }
});