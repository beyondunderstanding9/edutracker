import { store } from '../store/mockData.js';

export function renderAcademics() {
    const { attendance_data, exams } = store;

    const attendanceRows = attendance_data.map(subject => {
        const percentage = Math.round((subject.present / subject.total) * 100);
        const statusClass = percentage < 75 ? 'text-danger' : 'text-success';

        return `
            <tr>
                <td>${subject.code}</td>
                <td>${subject.subject}</td>
                <td>${subject.present}/${subject.total}</td>
                <td><span class="${statusClass}" style="font-weight: bold;">${percentage}%</span></td>
                <td>
                    <div style="width: 100px; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;">
                        <div style="width: ${percentage}%; height: 100%; background: currentColor; border-radius: 3px;" class="${statusClass}"></div>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    return `
        <div class="card" style="margin-bottom: 20px;">
            <h3>Current Semester Attendance</h3>
            <div class="table-container">
                <table style="margin-top: 15px;">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Subject</th>
                            <th>Classes</th>
                            <th>%</th>
                            <th>Visual</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${attendanceRows}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <h3>Upcoming Exams</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                ${exams.map(exam => `
                    <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border: 1px solid var(--glass-border);">
                        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 5px;">${exam.date} • ${exam.time}</div>
                        <div style="font-weight: 600; margin-bottom: 5px;">${exam.subject}</div>
                        <div style="font-size: 13px; color: var(--text-muted);"><i class="ph ph-map-pin"></i> ${exam.hall}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
