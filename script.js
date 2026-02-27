let students = [
    { name: "Jane Cooper", id: "STU-2023-089", dept: "Computer Science", percent: 85, joined: "Oct 12, 2023" },
    { name: "Alex Smith", id: "STU-2023-102", dept: "Software Engineering", percent: 92, joined: "Nov 05, 2023" },
    { name: "Michael Wong", id: "STU-2024-012", dept: "Data Science", percent: 45, joined: "Jan 15, 2024" },
    { name: "Sarah Lane", id: "STU-2024-045", dept: "Information Technology", percent: 78, joined: "Feb 01, 2024" },
    { name: "David Brown", id: "STU-2024-067", dept: "Computer Science", percent: 65, joined: "Feb 12, 2024" }
];

const list = document.getElementById('studentList');
const form = document.getElementById('studentForm');
const search = document.getElementById('searchBar');

function render(data = students) {
    list.innerHTML = '';
    data.forEach((s, i) => {
        const isPass = s.percent >= 50;
        const initials = s.name.split(' ').map(n => n[0]).join('');
        
        const row = document.createElement('div');
        row.className = 'student-row';
        row.innerHTML = `
            <div class="info-cell">
                <div class="avatar-circle">${initials}</div>
                <div class="name-container">
                    <div class="student-name">${s.name}</div>
                    <div class="sub-text">Joined: ${s.joined}</div>
                </div>
            </div>
            <div class="identity-cell">
                <div class="id-blue">${s.id}</div>
                <div class="sub-text">${s.dept}</div>
            </div>
            <div class="percentage-cell">
                <div class="percent-value">${s.percent}%</div>
                <div class="progress-bar-bg">
                    <div class="progress-fill ${isPass ? 'bg-pass' : 'bg-fail'}" style="width:${s.percent}%"></div>
                </div>
            </div>
            <div class="action-cell">
                <span class="status-tag ${isPass ? 'tag-pass' : 'tag-fail'}">
                    ${isPass ? 'PASS' : 'FAIL'}
                </span>
                <button class="delete-btn" onclick="removeStudent(${i})">
                    <i data-lucide="trash-2" class="trash-icon"></i>
                </button>
            </div>
        `;
        list.appendChild(row);
    });
    lucide.createIcons();
    document.getElementById('footerStats').innerText = `Showing ${data.length} of ${students.length} students`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newStudent = {
        name: document.getElementById('nameInput').value,
        id: document.getElementById('idInput').value,
        dept: document.getElementById('deptInput').value,
        percent: parseInt(document.getElementById('percentInput').value),
        joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    students.unshift(newStudent);
    render();
    form.reset();
});

search.addEventListener('input', (e) => {
    const word = e.target.value.toLowerCase();
    const filtered = students.filter(s => 
        s.name.toLowerCase().includes(word) || s.id.toLowerCase().includes(word) || s.dept.toLowerCase().includes(word)
    );
    render(filtered);
});

window.removeStudent = (index) => {
    students.splice(index, 1);
    render();
};

render();