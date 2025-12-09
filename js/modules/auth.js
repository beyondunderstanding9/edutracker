export const Auth = {
    user: JSON.parse(localStorage.getItem('edu_user')) || null,

    init() {
        if (!this.user) {
            this.renderLogin();
            document.getElementById('auth-view').style.display = 'flex';
            document.getElementById('app').style.display = 'none';
        } else {
            document.getElementById('auth-view').style.display = 'none';
            document.getElementById('app').style.display = 'grid';
            this.updateUserDisplay();
        }
    },

    renderLogin() {
        const container = document.getElementById('auth-view');
        container.innerHTML = `
            <div class="auth-box">
                <div class="auth-title">
                    <i class="ph ph-books-fill" style="color: var(--primary-color);"></i><br>
                    Welcome to EduTracker
                </div>
                <form id="login-form">
                    <div class="input-group">
                        <label>Institutional Email</label>
                        <input type="email" id="email" class="input-field" placeholder="you@collegename.edu.in" required>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <div style="position: relative;">
                            <input type="password" id="password" class="input-field" placeholder="••••••••" required>
                            <i class="ph ph-eye" id="toggle-pw" style="position: absolute; right: 12px; top: 12px; cursor: pointer; color: var(--text-muted);"></i>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-muted);">
                            <input type="checkbox" id="remember-me"> Remember me
                        </label>
                    </div>
                    <button type="submit" class="auth-btn">Login</button>
                    <div id="auth-error" style="color: var(--danger-text); font-size: 13px; margin-top: 10px; min-height: 20px;"></div>
                    <div class="toggle-auth" id="go-signup">Create an Account</div>
                </form>
            </div>
        `;

        this.bindEvents('login');
    },

    renderSignup() {
        const container = document.getElementById('auth-view');
        container.innerHTML = `
            <div class="auth-box">
                <div class="auth-title">Create Account</div>
                <form id="signup-form">
                    <div class="input-group">
                        <label>Full Name</label>
                        <input type="text" id="name" class="input-field" placeholder="John Doe" required>
                    </div>
                    <div class="input-group">
                        <label>Institutional Email</label>
                        <input type="email" id="email" class="input-field" placeholder="you@collegename.edu.in" required>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" id="password" class="input-field" required>
                    </div>
                     <div class="input-group">
                        <label>Role</label>
                        <select id="role" class="input-field">
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </select>
                    </div>
                    <button type="submit" class="auth-btn">Sign Up</button>
                    <div id="auth-error" style="color: var(--danger-text); font-size: 13px; margin-top: 10px; min-height: 20px;"></div>
                    <div class="toggle-auth" id="go-login">Back to Login</div>
                </form>
            </div>
        `;
        this.bindEvents('signup');
    },

    bindEvents(mode) {
        // Toggle Password
        const togglePw = document.getElementById('toggle-pw');
        if (togglePw) {
            togglePw.addEventListener('click', () => {
                const input = document.getElementById('password');
                if (input.type === 'password') {
                    input.type = 'text';
                    togglePw.classList.replace('ph-eye', 'ph-eye-slash');
                } else {
                    input.type = 'password';
                    togglePw.classList.replace('ph-eye-slash', 'ph-eye');
                }
            });
        }

        // Switch Mode
        if (mode === 'login') {
            document.getElementById('go-signup').addEventListener('click', () => this.renderSignup());
            document.getElementById('login-form').addEventListener('submit', (e) => this.handleLogin(e));
        } else {
            document.getElementById('go-login').addEventListener('click', () => this.renderLogin());
            document.getElementById('signup-form').addEventListener('submit', (e) => this.handleSignup(e));
        }
    },

    isValidEmail(email) {
        // Regex for @collegename.edu.in OR @collegename.ac.in
        const regex = /^[a-zA-Z0-9._%+-]+@(collegename\.edu\.in|collegename\.ac\.in)$/;
        return regex.test(email);
    },

    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('auth-error');

        if (!this.isValidEmail(email)) {
            errorDiv.innerText = "Invalid Domain. Must be @collegename.edu.in or .ac.in";
            return;
        }

        // Simulate Auth
        // In real app, check password. Here we simulate success.
        const mockUser = {
            name: email.split('@')[0],
            email: email,
            role: email.includes('faculty') ? 'faculty' : 'student', // Simple hack for demo role
            id: 'USER_' + Math.floor(Math.random() * 1000)
        };

        this.loginUser(mockUser);
    },

    handleSignup(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        const errorDiv = document.getElementById('auth-error');

        if (!this.isValidEmail(email)) {
            errorDiv.innerText = "Invalid Domain. Must be @collegename.edu.in or .ac.in";
            return;
        }

        const newUser = { name, email, role, id: 'USER_NEW' };
        this.loginUser(newUser);
    },

    loginUser(user) {
        this.user = user;
        localStorage.setItem('edu_user', JSON.stringify(user));
        this.init(); // Refresh view
    },

    logout() {
        this.user = null;
        localStorage.removeItem('edu_user');
        this.init();
    },

    updateUserDisplay() {
        if (!this.user) return;
        document.getElementById('user-name-display').innerText = this.user.name;
        document.getElementById('user-role-display').innerText = this.user.role.charAt(0).toUpperCase() + this.user.role.slice(1);
        document.getElementById('user-avatar').src = `https://ui-avatars.com/api/?name=${this.user.name}&background=random&color=fff`;

        // Show/Hide QR toggle based on role
        const qrBtn = document.getElementById('qr-toggle-btn');
        if (this.user.role === 'faculty') {
            qrBtn.style.display = 'flex';
        } else {
            qrBtn.style.display = 'none';
        }
    }
};
