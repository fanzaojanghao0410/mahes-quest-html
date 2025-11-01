const questions = [
    {
        id: 1,
        area: 'hutan',
        question: 'Kamu menemukan seekor burung terluka di hutan. Apa yang kamu lakukan?',
        options: [
            { text: 'Merawatnya dengan sabar hingga sembuh', xp: 15, effect: 'heart' },
            { text: 'Mencari bantuan dari ahli hewan', xp: 12, effect: 'mind' },
            { text: 'Membawanya pulang meski tidak tahu cara merawat', xp: 8, effect: 'courage' }
        ]
    },
    {
        id: 2,
        area: 'hutan',
        question: 'Di tengah hutan, kamu menemukan dua jalan: satu terang tapi jauh, satu gelap tapi dekat. Mana yang kamu pilih?',
        options: [
            { text: 'Jalan terang, karena keamanan lebih penting', xp: 10, effect: 'mind' },
            { text: 'Jalan gelap, karena aku berani menghadapi tantangan', xp: 15, effect: 'courage' },
            { text: 'Istirahat dulu dan pikirkan matang-matang', xp: 12, effect: 'heart' }
        ]
    },
    {
        id: 3,
        area: 'hutan',
        question: 'Seorang pengembara menawarkan memberimu peta rahasia dengan imbalan makananmu. Bagaimana sikapmu?',
        options: [
            { text: 'Berbagi makanan karena semua butuh pertolongan', xp: 15, effect: 'heart' },
            { text: 'Menolak karena aku butuh makanan untuk perjalanan', xp: 8, effect: 'mind' },
            { text: 'Menawarkan setengah dan bernegosiasi', xp: 12, effect: 'courage' }
        ]
    },
    {
        id: 4,
        area: 'hutan',
        question: 'Apa yang lebih penting dalam perjalanan hidup?',
        options: [
            { text: 'Proses dan pelajaran yang didapat', xp: 15, effect: 'mind' },
            { text: 'Orang-orang yang kita temui dan bantu', xp: 15, effect: 'heart' },
            { text: 'Tujuan yang kita capai', xp: 10, effect: 'courage' }
        ]
    },
    {
        id: 5,
        area: 'hutan',
        question: 'Kamu mendengar suara tangisan di kejauhan. Waktu terbatas. Apa yang kamu lakukan?',
        options: [
            { text: 'Langsung pergi menyelidiki dan membantu', xp: 15, effect: 'courage' },
            { text: 'Mengamati dulu situasinya dengan hati-hati', xp: 12, effect: 'mind' },
            { text: 'Mencari orang lain untuk pergi bersama', xp: 10, effect: 'heart' }
        ]
    },
    {
        id: 6,
        area: 'danau',
        question: 'Danau menunjukkan refleksi dirimu yang sebenarnya. Apa yang paling ingin kamu perbaiki?',
        options: [
            { text: 'Cara berpikirku yang terkadang terburu-buru', xp: 15, effect: 'mind' },
            { text: 'Keberanianku dalam mengambil keputusan', xp: 12, effect: 'courage' },
            { text: 'Empati dan pemahamanku terhadap orang lain', xp: 15, effect: 'heart' }
        ]
    },
    {
        id: 7,
        area: 'danau',
        question: 'Seorang anak kehilangan mainan kesayangannya di danau. Apa yang kamu lakukan?',
        options: [
            { text: 'Menyelam untuk mengambilnya meski berbahaya', xp: 15, effect: 'courage' },
            { text: 'Menenangkan anak dan membantunya mencari alternatif', xp: 15, effect: 'heart' },
            { text: 'Mencari alat atau cara aman untuk mengambilnya', xp: 12, effect: 'mind' }
        ]
    },
    {
        id: 8,
        area: 'danau',
        question: 'Apa arti kebijaksanaan menurutmu?',
        options: [
            { text: 'Kemampuan membuat keputusan yang tepat', xp: 15, effect: 'mind' },
            { text: 'Memahami dan menghormati perasaan orang lain', xp: 15, effect: 'heart' },
            { text: 'Berani menghadapi konsekuensi dari pilihanmu', xp: 12, effect: 'courage' }
        ]
    },
    {
        id: 9,
        area: 'danau',
        question: 'Air danau bisa menjawab satu pertanyaan tentang masa depan. Apa yang kamu tanyakan?',
        options: [
            { text: 'Apakah aku akan menjadi orang yang bijaksana?', xp: 15, effect: 'mind' },
            { text: 'Apakah orang-orang yang aku sayangi akan bahagia?', xp: 15, effect: 'heart' },
            { text: 'Apakah aku akan berhasil melewati tantangan besar?', xp: 12, effect: 'courage' }
        ]
    },
    {
        id: 10,
        area: 'danau',
        question: 'Kamu menemukan koin ajaib di dasar danau. Apa yang kamu lakukan?',
        options: [
            { text: 'Mengambilnya untuk mempelajari keajaibannya', xp: 12, effect: 'mind' },
            { text: 'Membiarkannya karena bukan milikku', xp: 10, effect: 'heart' },
            { text: 'Mengambilnya dan menggunakannya untuk membantu orang', xp: 15, effect: 'courage' }
        ]
    },
    {
        id: 11,
        area: 'kota',
        question: 'Temanmu melakukan kesalahan besar dan disalahkan semua orang. Apa yang kamu lakukan?',
        options: [
            { text: 'Membela dan mendampinginya meski aku juga dirugikan', xp: 15, effect: 'heart' },
            { text: 'Memberinya saran bagaimana memperbaiki kesalahan', xp: 12, effect: 'mind' },
            { text: 'Menegurnya secara langsung agar dia belajar', xp: 10, effect: 'courage' }
        ]
    },
    {
        id: 12,
        area: 'kota',
        question: 'Ada konflik antara dua kelompok di kota. Kamu diminta menjadi mediator. Bagaimana caramu?',
        options: [
            { text: 'Mendengarkan kedua belah pihak dengan empati', xp: 15, effect: 'heart' },
            { text: 'Menganalisis fakta dan mencari solusi objektif', xp: 15, effect: 'mind' },
            { text: 'Membuat keputusan tegas meski tidak semua setuju', xp: 12, effect: 'courage' }
        ]
    },
    {
        id: 13,
        area: 'kota',
        question: 'Kamu melihat seseorang mencuri karena lapar. Apa tindakanmu?',
        options: [
            { text: 'Memberinya makan dan membantu mencari pekerjaan', xp: 15, effect: 'heart' },
            { text: 'Melaporkan tapi menyarankan hukuman ringan', xp: 10, effect: 'mind' },
            { text: 'Membayar kerugian toko dan berbicara dengan pencuri', xp: 15, effect: 'courage' }
        ]
    },
    {
        id: 14,
        area: 'kota',
        question: 'Manakah yang paling berharga dalam sebuah komunitas?',
        options: [
            { text: 'Aturan yang jelas dan adil', xp: 12, effect: 'mind' },
            { text: 'Kepedulian dan solidaritas antar warga', xp: 15, effect: 'heart' },
            { text: 'Pemimpin yang berani mengambil keputusan', xp: 10, effect: 'courage' }
        ]
    },
    {
        id: 15,
        area: 'kota',
        question: 'Kamu diberi kesempatan mengubah satu hal di kota ini. Apa yang kamu pilih?',
        options: [
            { text: 'Sistem pendidikan yang lebih baik', xp: 15, effect: 'mind' },
            { text: 'Program bantuan untuk yang membutuhkan', xp: 15, effect: 'heart' },
            { text: 'Keamanan dan ketertiban yang lebih kuat', xp: 10, effect: 'courage' }
        ]
    },
    {
        id: 16,
        area: 'gunung',
        question: 'Pendakian sangat berat. Kamu kelelahan di tengah jalan. Apa yang kamu lakukan?',
        options: [
            { text: 'Istirahat dan melanjutkan dengan strategi baru', xp: 15, effect: 'mind' },
            { text: 'Tetap berjalan meski lelah karena tidak mau menyerah', xp: 15, effect: 'courage' },
            { text: 'Membantu pendaki lain yang juga kesulitan', xp: 12, effect: 'heart' }
        ]
    },
    {
        id: 17,
        area: 'gunung',
        question: 'Di puncak gunung, kamu harus memilih: kembali selamat atau menolong pendaki yang terjebak?',
        options: [
            { text: 'Menolong meski resikonya besar', xp: 15, effect: 'courage' },
            { text: 'Turun untuk mencari bantuan profesional', xp: 12, effect: 'mind' },
            { text: 'Tetap di sana menemani hingga bantuan datang', xp: 15, effect: 'heart' }
        ]
    },
    {
        id: 18,
        area: 'gunung',
        question: 'Badai menghalangi perjalananmu. Apa yang kamu lakukan?',
        options: [
            { text: 'Mencari tempat berlindung dan menunggu badai reda', xp: 15, effect: 'mind' },
            { text: 'Terus maju dengan hati-hati', xp: 12, effect: 'courage' },
            { text: 'Memastikan semua anggota rombongan aman', xp: 15, effect: 'heart' }
        ]
    },
    {
        id: 19,
        area: 'gunung',
        question: 'Apa yang membuatmu terus berjalan meski lelah?',
        options: [
            { text: 'Keyakinan pada tujuan dan rencanaku', xp: 12, effect: 'mind' },
            { text: 'Orang-orang yang menungguku', xp: 15, effect: 'heart' },
            { text: 'Keteguhan hati dan keinginan untuk tidak menyerah', xp: 15, effect: 'courage' }
        ]
    },
    {
        id: 20,
        area: 'gunung',
        question: 'Di puncak, kamu menemukan prasasti kuno. Isinya: "Kebijaksanaan sejati adalah...". Lanjutannya?',
        options: [
            { text: '...mengetahui kapan harus bertindak dan kapan harus menunggu', xp: 15, effect: 'mind' },
            { text: '...memahami bahwa semua makhluk saling terhubung', xp: 15, effect: 'heart' },
            { text: '...berani mengakui kesalahan dan belajar darinya', xp: 15, effect: 'courage' }
        ]
    },
    {
        id: 21,
        area: 'temple',
        question: 'Jika kamu harus memilih satu hal untuk dibawa selamanya, apa itu?',
        options: [
            { text: 'Pengetahuan dan kebijaksanaan', xp: 20, effect: 'mind' },
            { text: 'Cinta dan kebaikan hati', xp: 20, effect: 'heart' },
            { text: 'Keberanian dan keteguhan', xp: 20, effect: 'courage' }
        ]
    },
    {
        id: 22,
        area: 'temple',
        question: 'Apa yang membuat seseorang layak disebut bijaksana?',
        options: [
            { text: 'Mampu belajar dari pengalaman dan kesalahan', xp: 20, effect: 'mind' },
            { text: 'Selalu mengutamakan kebaikan untuk semua', xp: 20, effect: 'heart' },
            { text: 'Tidak pernah takut menghadapi kebenaran', xp: 20, effect: 'courage' }
        ]
    },
    {
        id: 23,
        area: 'temple',
        question: 'Pertanyaan terakhir: Apa yang akan kamu lakukan dengan Mahkota Kebijaksanaan?',
        options: [
            { text: 'Menggunakannya untuk mengajar dan berbagi ilmu', xp: 20, effect: 'mind' },
            { text: 'Menggunakannya untuk membantu yang menderita', xp: 20, effect: 'heart' },
            { text: 'Menggunakannya untuk melindungi yang lemah', xp: 20, effect: 'courage' }
        ]
    }
];

class MahesQuest {
    constructor() {
        this.player = {
            level: 1,
            xp: 0,
            mind: 0,
            heart: 0,
            courage: 0
        };

        this.progress = {
            hutan: 0,
            danau: 0,
            kota: 0,
            gunung: 0,
            temple: 0
        };

        this.currentArea = '';
        this.currentQuestionIndex = 0;
        this.areaQuestions = [];
        this.inventory = [];
        this.xpPerLevel = 100;

        this.loadProgress();
        this.updateUI();
    }

    initGame() {
        this.showScene('landing');
    }

    showScene(sceneName) {
        document.querySelectorAll('.scene').forEach(scene => {
            scene.classList.remove('active');
        });

        setTimeout(() => {
            document.getElementById(sceneName).classList.add('active');
        }, 100);
    }

    startAdventure() {
        this.resetProgress();
        this.showScene('prolog');
    }

    continueAdventure() {
        const savedData = localStorage.getItem('mahesQuestSave');
        if (savedData) {
            this.loadProgress();
            this.showMap();
        } else {
            this.startAdventure();
        }
    }

    showMap() {
        this.updateUI();
        this.updateProgressDisplay();
        this.showScene('map');
    }

    enterArea(areaName) {
        this.currentArea = areaName;
        this.areaQuestions = questions.filter(q => q.area === areaName);
        this.currentQuestionIndex = this.progress[areaName];

        if (this.currentQuestionIndex >= this.areaQuestions.length) {
            alert(`Kamu sudah menyelesaikan area ${this.getAreaTitle(areaName)}!`);
            return;
        }

        if (areaName === 'temple') {
            const totalCompleted = this.progress.hutan + this.progress.danau +
                                   this.progress.kota + this.progress.gunung;
            if (totalCompleted < 20) {
                alert('Selesaikan semua area terlebih dahulu untuk memasuki Kuil Kebijaksanaan!');
                return;
            }
        }

        this.showQuestion();
    }

    showQuestion() {
        const question = this.areaQuestions[this.currentQuestionIndex];

        document.getElementById('current-area').textContent = this.getAreaTitle(this.currentArea);
        document.getElementById('question-counter').textContent =
            `${this.currentQuestionIndex + 1}/${this.areaQuestions.length}`;
        document.getElementById('question-text').textContent = question.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.text;
            btn.onclick = () => this.selectAnswer(option, btn);
            optionsContainer.appendChild(btn);
        });

        this.showScene('question');
    }

    selectAnswer(option, btnElement) {
        const allButtons = document.querySelectorAll('.option-btn');
        allButtons.forEach(btn => btn.disabled = true);

        btnElement.classList.add('correct');

        this.addXP(option.xp);
        this.increaseAttribute(option.effect);

        setTimeout(() => {
            this.progress[this.currentArea]++;
            this.currentQuestionIndex++;

            if (this.currentQuestionIndex >= this.areaQuestions.length) {
                this.completeArea();
            } else {
                this.showQuestion();
            }

            this.saveProgress();
        }, 1200);
    }

    addXP(amount) {
        this.player.xp += amount;

        while (this.player.xp >= this.xpPerLevel) {
            this.player.xp -= this.xpPerLevel;
            this.player.level++;
            this.showLevelUpModal();
        }

        this.updateUI();
    }

    increaseAttribute(attr) {
        if (attr === 'mind') this.player.mind++;
        else if (attr === 'heart') this.player.heart++;
        else if (attr === 'courage') this.player.courage++;
        this.updateUI();
    }

    showLevelUpModal() {
        document.getElementById('new-level').textContent = this.player.level;
        this.openModal('levelup-modal');
    }

    selectAttribute(attr) {
        if (attr === 'mind') this.player.mind += 2;
        else if (attr === 'heart') this.player.heart += 2;
        else if (attr === 'courage') this.player.courage += 2;

        this.updateUI();
        this.closeModal('levelup-modal');
        this.saveProgress();
    }

    completeArea() {
        const areaTitle = this.getAreaTitle(this.currentArea);

        if (this.currentArea === 'temple') {
            this.showEnding();
        } else {
            const item = this.getAreaReward(this.currentArea);
            this.inventory.push(item);
            alert(`Selamat! Kamu menyelesaikan ${areaTitle}!\n\nReward: ${item.name}`);
            this.showMap();
        }
    }

    enterTemple() {
        this.enterArea('temple');
    }

    showEnding() {
        const { mind, heart, courage } = this.player;
        let endingType = '';
        let endingText = '';

        if (mind > heart && mind > courage) {
            endingType = 'Mahkota Sang Pemikir';
            endingText = 'Kamu telah membuktikan bahwa kebijaksanaan sejati lahir dari pemikiran yang jernih dan analisis yang tajam. Pengetahuan adalah cahaya yang menerangi jalan kegelapan. Dengan mahkota ini, kamu akan menjadi guru bagi banyak orang.';
        } else if (heart > mind && heart > courage) {
            endingType = 'Mahkota Sang Penyayang';
            endingText = 'Kamu telah membuktikan bahwa kebijaksanaan sejati lahir dari hati yang penuh kasih dan empati. Kebaikan adalah kekuatan terbesar yang dapat mengubah dunia. Dengan mahkota ini, kamu akan menyembuhkan luka banyak jiwa.';
        } else if (courage > mind && courage > heart) {
            endingType = 'Mahkota Sang Pemberani';
            endingText = 'Kamu telah membuktikan bahwa kebijaksanaan sejati lahir dari keberanian menghadapi ketakutan dan tantangan. Keteguhan hati adalah fondasi perubahan. Dengan mahkota ini, kamu akan melindungi yang lemah.';
        } else {
            endingType = 'Mahkota Kebijaksanaan Sejati';
            endingText = 'Kamu telah membuktikan keseimbangan sempurna antara pikiran, hati, dan keberanian. Kebijaksanaan sejati adalah harmoni dari ketiganya. Dengan mahkota ini, kamu akan memimpin dengan bijaksana dan penuh kasih.';
        }

        document.getElementById('ending-type').textContent = endingType;
        document.getElementById('ending-text').textContent = endingText;
        document.getElementById('final-mind').textContent = mind;
        document.getElementById('final-heart').textContent = heart;
        document.getElementById('final-courage').textContent = courage;
        document.getElementById('final-level').textContent = this.player.level;

        this.showScene('ending');
    }

    getAreaTitle(area) {
        const titles = {
            hutan: 'Hutan Tenang',
            danau: 'Danau Jernih',
            kota: 'Kota Bijaksana',
            gunung: 'Gunung Keberanian',
            temple: 'Kuil Kebijaksanaan'
        };
        return titles[area] || area;
    }

    getAreaReward(area) {
        const rewards = {
            hutan: { name: '🌿 Daun Kebijaksanaan', description: 'Memberikan ketenangan pikiran' },
            danau: { name: '💧 Air Kebenaran', description: 'Menunjukkan refleksi sejati' },
            kota: { name: '📜 Gulungan Pengetahuan', description: 'Berisi hikmat dari para bijak' },
            gunung: { name: '⚔️ Pedang Keberanian', description: 'Simbol keteguhan hati' }
        };
        return rewards[area];
    }

    updateUI() {
        document.getElementById('player-level').textContent = this.player.level;
        document.getElementById('player-xp').textContent = this.player.xp;
        document.getElementById('attr-mind').textContent = this.player.mind;
        document.getElementById('attr-heart').textContent = this.player.heart;
        document.getElementById('attr-courage').textContent = this.player.courage;

        const xpPercentage = (this.player.xp / this.xpPerLevel) * 100;
        document.getElementById('xp-fill').style.width = `${xpPercentage}%`;
    }

    updateProgressDisplay() {
        document.getElementById('progress-hutan').textContent = `${this.progress.hutan}/5`;
        document.getElementById('progress-danau').textContent = `${this.progress.danau}/5`;
        document.getElementById('progress-kota').textContent = `${this.progress.kota}/5`;
        document.getElementById('progress-gunung').textContent = `${this.progress.gunung}/5`;
    }

    showInventory() {
        const inventoryList = document.getElementById('inventory-list');

        if (this.inventory.length === 0) {
            inventoryList.innerHTML = '<p class="empty-state">Belum ada item yang dikumpulkan</p>';
        } else {
            inventoryList.innerHTML = this.inventory.map(item => `
                <div class="inventory-item">
                    <div class="inventory-item-icon">${item.name.split(' ')[0]}</div>
                    <div>
                        <strong>${item.name}</strong>
                        <p>${item.description}</p>
                    </div>
                </div>
            `).join('');
        }

        this.openModal('inventory-modal');
    }

    showSettings() {
        this.openModal('settings-modal');
    }

    openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    }

    saveProgress() {
        const saveData = {
            player: this.player,
            progress: this.progress,
            inventory: this.inventory
        };
        localStorage.setItem('mahesQuestSave', JSON.stringify(saveData));

        if (event && event.type === 'click') {
            alert('Progres berhasil disimpan!');
            this.closeModal('settings-modal');
        }
    }

    loadProgress() {
        const savedData = localStorage.getItem('mahesQuestSave');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.player = data.player;
            this.progress = data.progress;
            this.inventory = data.inventory || [];
        }
    }

    confirmReset() {
        if (confirm('Apakah kamu yakin ingin menghapus semua progres dan memulai petualangan baru?')) {
            this.resetAdventure();
        }
    }

    resetAdventure() {
        localStorage.removeItem('mahesQuestSave');
        this.player = {
            level: 1,
            xp: 0,
            mind: 0,
            heart: 0,
            courage: 0
        };
        this.progress = {
            hutan: 0,
            danau: 0,
            kota: 0,
            gunung: 0,
            temple: 0
        };
        this.inventory = [];
        this.closeModal('settings-modal');
        this.updateUI();
        this.showScene('landing');
    }

    resetProgress() {
        this.resetAdventure();
    }
}

const game = new MahesQuest();
game.initGame();