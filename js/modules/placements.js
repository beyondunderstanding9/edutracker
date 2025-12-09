import { store } from '../store/mockData.js';

export function renderPlacements() {
    const { placements } = store;

    const jobCards = placements.map(job => {
        let statusBadge = '';
        if (job.applied) {
            const colorClass = job.app_status === 'Rejected' ? 'rejected' :
                job.app_status === 'Interview' ? 'active' : 'pending';
            statusBadge = `<span class="status-chip ${colorClass}">${job.app_status}</span>`;
        }

        return `
            <div class="card" style="position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div> 
                        <h2 style="font-size: 18px; font-weight: 600;">${job.role}</h2>
                        <div style="color: var(--primary-color); font-weight: 500; font-size: 14px;">${job.company}</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-weight: 700;">${job.ctc}</div>
                        <div style="font-size: 12px; color: var(--text-muted);">${job.deadline}</div>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                    <div>${statusBadge}</div>
                    <button style="
                        background: ${job.applied ? 'transparent' : 'var(--primary-color)'}; 
                        color: var(--text-white); 
                        border: ${job.applied ? '1px solid var(--glass-border)' : 'none'};
                        padding: 8px 16px; 
                        border-radius: 6px; 
                        cursor: pointer;
                        font-weight: 500;
                        font-size: 13px;
                    ">
                        ${job.applied ? 'View Details' : 'Apply Now'}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            ${jobCards}
        </div>
    `;
}
