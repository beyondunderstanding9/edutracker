export const store = {
    user: {
        name: "Alex River",
        id: "CS2025042",
        role: "student",
        dept: "Computer Science",
        semester: 6,
        gpa: 3.8
    },

    stats: {
        attendance: 87,
        assignments_pending: 2,
        upcoming_exams: 1,
        applications_active: 3
    },

    attendance_data: [
        { subject: "Data Structures", total: 40, present: 36, code: "CS301" },
        { subject: "Web Technologies", total: 38, present: 38, code: "CS304" },
        { subject: "Database Mgmt", total: 42, present: 30, code: "CS302" },
        { subject: "Algorithms", total: 40, present: 32, code: "CS303" },
        { subject: "Soft Skills", total: 20, present: 19, code: "HU301" }
    ],

    exams: [
        { subject: "Data Structures", date: "2024-05-15", time: "10:00 AM", hall: "A-201" },
        { subject: "Web Tech", date: "2024-05-18", time: "02:00 PM", hall: "Lab-3" }
    ],

    placements: [
        {
            id: 1,
            company: "TechNova",
            role: "Frontend Developer",
            ctc: "12 LPA",
            status: "active",
            deadline: "2 days left",
            applied: true,
            app_status: "Interview"
        },
        {
            id: 2,
            company: "DataCorp",
            role: "Data Analyst",
            ctc: "9 LPA",
            status: "active",
            deadline: "5 days left",
            applied: false,
            app_status: null
        },
        {
            id: 3,
            company: "CloudSystems",
            role: "DevOps Intern",
            ctc: "25k/mo",
            status: "closed",
            deadline: "Ended",
            applied: true,
            app_status: "Rejected"
        },
        {
            id: 4,
            company: "InnovateAI",
            role: "ML Engineer",
            ctc: "18 LPA",
            status: "active",
            deadline: "1 week left",
            applied: true,
            app_status: "Applied"
        }
    ]
};
