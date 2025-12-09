import { store } from '../store/mockData.js';

export function renderDashboard() {
    const { stats } = store;

    return `
        <div class="kpi-grid">
            <div class="card">
                <h3>Attendance</h3>
                <div class="stat-value ${stats.attendance < 75 ? 'text-danger' : 'text-success'}">${stats.attendance}%</div>
                <div class="stat-sub">Overall Average</div>
            </div>
            <div class="card">
                <h3>Assignments</h3>
                <div class="stat-value text-warning">${stats.assignments_pending}</div>
                <div class="stat-sub">Pending Submission</div>
            </div>
            <div class="card">
                <h3>Placements</h3>
                <div class="stat-value text-success">${stats.applications_active}</div>
                <div class="stat-sub">Active Applications</div>
            </div>
            <div class="card">
                <h3>Next Exam</h3>
                <div class="stat-value">2 Days</div>
                <div class="stat-sub">Data Structures</div>
            </div>
        </div>

        <div class="section-grid">
            <div class="card">
                <h3>Performance Overview</h3>
                <div style="height: 200px; display: flex; align-items: flex-end; justify-content: space-around; padding-top: 20px;">
                    <!-- CSS Bar Chart -->
                    <div style="width: 15%; height: 60%; background: var(--primary-color); border-radius: 4px 4px 0 0; opacity: 0.5;"></div>
                    <div style="width: 15%; height: 80%; background: var(--primary-color); border-radius: 4px 4px 0 0; opacity: 0.7;"></div>
                    <div style="width: 15%; height: 40%; background: var(--primary-color); border-radius: 4px 4px 0 0; opacity: 0.4;"></div>
                    <div style="width: 15%; height: 90%; background: var(--primary-color); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 15%; height: 75%; background: var(--primary-color); border-radius: 4px 4px 0 0; opacity: 0.6;"></div>
                </div>
                <div style="display: flex; justify-content: space-around; margin-top: 10px; color: var(--text-muted); font-size: 12px;">
                    <span>Sem 1</span><span>Sem 2</span><span>Sem 3</span><span>Sem 4</span><span>Sem 5</span>
                </div>
            </div>

            <div class="card">
                <h3>Recent Activity</h3>
                <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <div style="width: 8px; height: 8px; background: hsl(var(--hue-success), 70%, 60%); border-radius: 50%;"></div>
                        <div style="font-size: 14px;">Applied to <b>TechNova</b></div>
                    </div>
                     <div style="display: flex; gap: 10px; align-items: center;">
                        <div style="width: 8px; height: 8px; background: hsl(var(--hue-warning), 70%, 60%); border-radius: 50%;"></div>
                        <div style="font-size: 14px;">Absent for <b>CS302</b></div>
                    </div>
                     <div style="display: flex; gap: 10px; align-items: center;">
                        <div style="width: 8px; height: 8px; background: hsl(var(--hue-primary), 70%, 60%); border-radius: 50%;"></div>
                        <div style="font-size: 14px;">Uploaded Assign. <b>A-4</b></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
