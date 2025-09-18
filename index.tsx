/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface Podcast {
    title: string;
    summary: string;
    audioUrl: string;
    imageUrl: string;
    tags: string[];
}

const podcastData: Podcast[] = [
    {
        title: 'Odcinek 1: Fundamenty Sztucznej Inteligencji',
        summary: 'Ten odcinek wyjaśnia, czym jest sztuczna inteligencja, odróżniając ją od tradycyjnego oprogramowania poprzez zdolność do adaptacji, przedstawia jej burzliwą historię od lat 50. XX wieku i omawia podział na istniejącą dziś wąską AI (ANI) oraz hipotetyczną ogólną (AGI) i superinteligencję (ASI).',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzia%C5%82%201_Fundamenty%20Sztucznej%20Inteligencji_%20Definicja,%20Historia,%20Rodzaje.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 1.png',
        tags: ['Historia AI', 'Wąska AI', 'Definicja AI']
    },
    {
        title: 'Odcinek 2: Machine Learning: Silnik Sztucznej Inteligencji',
        summary: 'W tym odcinku omawiane są trzy główne paradygmaty uczenia maszynowego: nadzorowane (klasyfikacja i regresja), nienadzorowane (klastrowanie, asocjacja) i uczenie przez wzmacnianie, podkreślając fundamentalną rolę jakości danych dla skuteczności algorytmów i modeli.',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzial%202_Machine%20Learning_%20The%20Engine%20of%20AI.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 2.png',
        tags: ['Uczenie nadzorowane', 'Uczenie przez wzmacnianie', 'Jakość danych']
    },
    {
        title: 'Odcinek 3: Wielkie Modele Językowe (LLM): Językowa Rewolucja',
        summary: 'Odcinek ten wyjaśnia, co oznacza "wielki" w nazwie LLM (dane, parametry, moc obliczeniowa), opisuje ich działanie oparte na architekturze Transformer, a także przedstawia kluczowe ograniczenia, takie jak halucynacje, uprzedzenia i brak realnego rozumienia świata.',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzial%203_Large%20Language%20Models_%20A%20Linguistic%20Revolution.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 3.png',
        tags: ['LLM', 'Architektura Transformer', 'Halucynacje AI']
    },
    {
        title: 'Odcinek 4: Sztuka Dialogu: Mistrzostwo w Promptowaniu AI',
        summary: 'Ten odcinek skupia się na tworzeniu skutecznych promptów, omawiając zasady precyzji, kontekstu i definiowania roli, a także prezentuje zaawansowane techniki, takie jak Few-Shot, Chain-of-Thought do logicznego rozumowania oraz Flipped Interaction.',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzial%204_Sztuka%20Dialogu_%20Mistrzostwo%20w%20Promptowaniu%20AI.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 4.png',
        tags: ['Prompting', 'Chain-of-Thought', 'Few-Shot']
    },
    {
        title: 'Odcinek 5: Kreowanie Asystentów AI: Twoi Spersonalizowani Cyfrowi Eksperci',
        summary: 'Materiał wyjaśnia, jak przejść od ogólnych zapytań do tworzenia wyspecjalizowanych asystentów AI za pomocą "custom instructions", definiując sześć kluczowych filarów ich "konstytucji": rolę, misję, zasady, ton, proces i format wyjściowy.',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzial%205_Crafting%20AI%20Assistants_%20Your%20Personalized%20Digital%20Experts.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 5.png',
        tags: ['Asystent AI', 'Custom Instructions', 'Personalizacja AI']
    },
    {
        title: 'Odcinek 6: Autonomiczni Agenci AI: Od Asystentów do Wykonawców',
        summary: 'Odcinek ten przedstawia ewolucję od reaktywnych asystentów do proaktywnych agentów AI, którzy autonomicznie realizują cele, wykorzystując narzędzia i działając w pętli ReAct (rozumowanie-działanie-obserwacja). ',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzia%C5%82%206_Autonomous%20AI%20Agents_%20From%20Assistants%20to%20Executors.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 6.png',
        tags: ['Agent AI', 'Pętla ReAct', 'Autonomia AI']
    },
    {
        title: 'Odcinek 7: Budowanie Zespołów Agentów AI: Synergia i Projektowanie Przepływów Pracy',
        summary: 'W tym odcinku omówiono korzyści płynące z tworzenia zespołów wyspecjalizowanych agentów AI, takie jak lepsza jakość, redukcja błędów dzięki agentom-krytykom i większa skalowalność, a także przedstawiono metody projektowania ich współpracy w modelach sekwencyjnych lub hierarchicznych.',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzia%C5%82%207_%20Building%20AI%20Agent%20Teams_%20Synergy%20and%20Workflow%20Design.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 7.png',
        tags: ['Zespoły agentów AI', 'Systemy wieloagentowe', 'Workflow AI']
    },
    {
        title: 'Odcinek 8: Halucynacje AI: Zrozumienie i Kontrola',
        summary: 'Ten odcinek wyjaśnia, że halucynacje AI wynikają ze statystycznej natury modeli językowych, omawia techniki ich minimalizowania, takie jak uziemienie (RAG) i weryfikacja, a także wskazuje, kiedy ta skłonność do "wymyślania" może być pożądaną cechą w zadaniach kreatywnych.',
        audioUrl: 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/Rozdzia%C5%82%208_AI%20Hallucinations_%20Understanding%20and%20Control.mp3',
        imageUrl: 'https://raw.githubusercontent.com/funzo79-lgtm/Podcasty/main/Odcinek 8.png',
        tags: ['Halucynacje AI', 'RAG', 'Kreatywność AI']
    }
];
const aboutProjectAudioUrl = 'https://github.com/funzo79-lgtm/Podcasty/raw/refs/heads/main/ElevenLabs_2025-09-18T17_34_20_Marek%20g%C5%82os_pvc_sp100_s50_sb75_se0_b_m2.mp3';


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
const volumeIcon = `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>`;
const muteIcon = `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>`;

/**
 * Creates and manages a custom audio player.
 * @param audio - The HTMLAudioElement to control.
 * @param container - The container element to append the player controls to.
 */
function createCustomPlayer(audio: HTMLAudioElement, container: HTMLElement) {
    const playerControls = document.createElement('div');
    playerControls.className = 'player-controls';

    const playPauseBtn = document.createElement('button');
    playPauseBtn.className = 'play-pause-btn';
    playPauseBtn.setAttribute('aria-label', 'Odtwarzaj');
    playPauseBtn.innerHTML = playIcon;

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
    playerControls.append(playPauseBtn, timeContainer, volumeControls);
    container.appendChild(playerControls);

    // --- Player Logic ---
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', () => {
        playPauseBtn.innerHTML = pauseIcon;
        playPauseBtn.setAttribute('aria-label', 'Pauza');
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
    // --- Plexus Background ---
    initPlexusBackground();

    // --- Podcast Grid Generation ---
    const grid = document.getElementById('podcast-grid');
    if (grid) {
        podcastData.forEach(podcast => {
            const card = document.createElement('div');
            card.className = 'podcast-card';

            const img = document.createElement('img');
            img.src = podcast.imageUrl;
            img.alt = `Okładka podcastu: ${podcast.title}`;

            const title = document.createElement('h3');
            title.textContent = podcast.title;

            const summary = document.createElement('p');
            summary.className = 'ai-summary';
            summary.textContent = podcast.summary;
            
            const playerContainer = document.createElement('div');
            const audio = new Audio(podcast.audioUrl);
            createCustomPlayer(audio, playerContainer);

            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tags';
            tagsContainer.innerHTML = podcast.tags.map(tag => `<span>${tag}</span>`).join('');

            card.append(img, title, summary, playerContainer, tagsContainer);
            grid.appendChild(card);
        });
    }

    // --- Modal Logic ---
    const aboutBtn = document.getElementById('about-project-btn');
    const modalOverlay = document.getElementById('about-modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPlayerContainer = document.getElementById('modal-player-container');

    if (aboutBtn && modalOverlay && modalCloseBtn && modalPlayerContainer) {
        const modalAudio = new Audio(aboutProjectAudioUrl);
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
});