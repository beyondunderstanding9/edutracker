export const QRController = {
    intervalId: null,
    timerId: null,
    qrObj: null,
    timeLeft: 30,

    init() {
        // Create Modal DOM if doesn't exist
        if (!document.getElementById('qr-modal')) {
            const modal = document.createElement('div');
            modal.id = 'qr-modal';
            modal.innerHTML = `
                <div class="glass" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: none; justify-content: center; align-items: center; z-index: 2000;">
                    <div style="background: white; padding: 40px; border-radius: 20px; text-align: center; position: relative; width: 400px;">
                        <button id="close-qr" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
                        <h2 style="margin-bottom: 20px; color: var(--text-main);">Attendance QR</h2>
                        <div id="qrcode" style="display: flex; justify-content: center; margin-bottom: 20px;"></div>
                        <div style="font-size: 18px; font-weight: 600; color: var(--primary-dark);">
                            Refreshes in: <span id="qr-timer">30</span>s
                        </div>
                        <div style="margin-top: 15px; font-size: 13px; color: var(--text-muted);">
                            Scan to mark attendance automatically.
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            // Close Event
            document.getElementById('close-qr').addEventListener('click', () => {
                this.stop();
                document.getElementById('qr-modal').firstElementChild.style.display = 'none';
            });
        }
    },

    show() {
        this.init();
        document.getElementById('qr-modal').firstElementChild.style.display = 'flex';
        this.generate();
        this.startTimer();
    },

    generate() {
        const container = document.getElementById('qrcode');
        container.innerHTML = ''; // Clear previous

        // Generate a random token simulating a secure session ID + timestamp
        const token = `ATTENDANCE_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Use global QRCode library
        if (window.QRCode) {
            new QRCode(container, {
                text: token,
                width: 200,
                height: 200,
                colorDark: "#4c4cff",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        } else {
            container.innerHTML = 'QR Library not loaded';
        }
    },

    startTimer() {
        this.timeLeft = 30;
        this.updateTimerDisplay();

        this.stop(); // Clear existing

        this.intervalId = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 0) {
                this.generate();
                this.timeLeft = 30;
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const el = document.getElementById('qr-timer');
        if (el) el.innerText = this.timeLeft;
    },

    stop() {
        if (this.intervalId) clearInterval(this.intervalId);
    }
};
