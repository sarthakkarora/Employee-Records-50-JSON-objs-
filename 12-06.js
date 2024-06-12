const records = [
    { id: 1, name: "A1", designation: "Computer Programmer", department: "System Admin", salary: "10 Lakh" },
    { id: 2, name: "A2", designation: "Manager", department: "Network Manager", salary: "11 Lakh" },
    { id: 3, name: "B1", designation: "Data Analyst", department: "Data Management", salary: "10 Lakh" },
    { id: 4, name: "B2", designation: "Web Developer", department: "IT", salary: "9 Lakh" },
    { id: 5, name: "C1", designation: "System Analyst", department: "System Admin", salary: "10.5 Lakh" },
    { id: 6, name: "C2", designation: "Project Manager", department: "Project Management", salary: "12 Lakh" },
    { id: 7, name: "D1", designation: "DevOps Engineer", department: "IT", salary: "11.5 Lakh" },
    { id: 8, name: "D2", designation: "UX Designer", department: "Design", salary: "9.5 Lakh" },
    { id: 9, name: "E1", designation: "Data Scientist", department: "Data Management", salary: "14 Lakh" },
    { id: 10, name: "E2", designation: "HR Manager", department: "Human Resources", salary: "8 Lakh" },
    { id: 11, name: "F1", designation: "Software Engineer", department: "IT", salary: "10.5 Lakh" },
    { id: 12, name: "F2", designation: "Graphic Designer", department: "Design", salary: "7 Lakh" },
    { id: 13, name: "G1", designation: "Network Engineer", department: "IT", salary: "10 Lakh" },
    { id: 14, name: "G2", designation: "Database Administrator", department: "Data Management", salary: "9 Lakh" },
    { id: 15, name: "H1", designation: "Frontend Developer", department: "IT", salary: "8.5 Lakh" },
    { id: 16, name: "H2", designation: "Backend Developer", department: "IT", salary: "11 Lakh" },
    { id: 17, name: "I1", designation: "SEO Specialist", department: "Marketing", salary: "9.5 Lakh" },
    { id: 18, name: "I2", designation: "Content Writer", department: "Marketing", salary: "6.5 Lakh" },
    { id: 19, name: "J1", designation: "Accountant", department: "Finance", salary: "8 Lakh" },
    { id: 20, name: "J2", designation: "Business Analyst", department: "Business", salary: "10 Lakh" },
    { id: 21, name: "K1", designation: "Project Coordinator", department: "Project Management", salary: "11 Lakh" },
    { id: 22, name: "K2", designation: "UI Designer", department: "Design", salary: "9 Lakh" },
    { id: 23, name: "L1", designation: "Quality Assurance Analyst", department: "IT", salary: "10.5 Lakh" },
    { id: 24, name: "L2", designation: "Data Entry Operator", department: "Data Management", salary: "8.5 Lakh" },
    { id: 25, name: "M1", designation: "Technical Writer", department: "Documentation", salary: "9 Lakh" },
    { id: 26, name: "M2", designation: "Sales Representative", department: "Sales", salary: "10 Lakh" },
    { id: 27, name: "N1", designation: "Customer Support Specialist", department: "Customer Service", salary: "8 Lakh" },
    { id: 28, name: "N2", designation: "Financial Analyst", department: "Finance", salary: "11 Lakh" },
    { id: 29, name: "O1", designation: "Marketing Coordinator", department: "Marketing", salary: "10.5 Lakh" },
    { id: 30, name: "O2", designation: "Legal Advisor", department: "Legal", salary: "12 Lakh" },
    { id: 31, name: "P1", designation: "Event Planner", department: "Event Management", salary: "9.5 Lakh" },
    { id: 32, name: "P2", designation: "Research Analyst", department: "Research", salary: "10.5 Lakh" },
    { id: 33, name: "Q1", designation: "Healthcare Administrator", department: "Healthcare", salary: "11 Lakh" },
    { id: 34, name: "Q2", designation: "Insurance Agent", department: "Insurance", salary: "9 Lakh" },
    { id: 35, name: "R1", designation: "Real Estate Agent", department: "Real Estate", salary: "12 Lakh" },
    { id: 36, name: "R2", designation: "Travel Agent", department: "Travel", salary: "8.5 Lakh" },
    { id: 37, name: "S1", designation: "Fashion Designer", department: "Fashion", salary: "10 Lakh" },
    { id: 38, name: "S2", designation: "Interior Designer", department: "Interior Design", salary: "11 Lakh" },
    { id: 39, name: "T1", designation: "Architect", department: "Architecture", salary: "12 Lakh" },
    { id: 40, name: "T2", designation: "Civil Engineer", department: "Engineering", salary: "13 Lakh" },
    { id: 41, name: "U1", designation: "Electrical Engineer", department: "Engineering", salary: "14 Lakh" },
    { id: 42, name: "U2", designation: "Mechanical Engineer", department: "Engineering", salary: "15 Lakh" },
    { id: 43, name: "V1", designation: "Chemical Engineer", department: "Engineering", salary: "16 Lakh" },
    { id: 44, name: "V2", designation: "Biomedical Engineer", department: "Engineering", salary: "17 Lakh" },
    { id: 45, name: "W1", designation: "Aerospace Engineer", department: "Engineering", salary: "18 Lakh" },
    { id: 46, name: "W2", designation: "Environmental Engineer", department: "Engineering", salary: "19 Lakh" },
    { id: 47, name: "X1", designation: "Industrial Engineer", department: "Engineering", salary: "20 Lakh" },
    { id: 48, name: "X2", designation: "Software Developer", department: "IT", salary: "21 Lakh" },
    { id: 49, name: "Y1", designation: "Systems Analyst", department: "IT", salary: "22 Lakh" },
    { id: 50, name: "Y2", designation: "Network Administrator", department: "IT", salary: "23 Lakh" }
];

const recordsPerPage = 10;
let currentPage = 1;

function displayRecords(page) {
    const start = (page - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    const pageRecords = records.slice(start, end);

    const tbody = document.querySelector('#recordsTable tbody');
    tbody.innerHTML = '';

    pageRecords.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.designation}</td>
            <td>${record.department}</td>
            <td>${record.salary}</td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('prevBtn').disabled = page === 1;
    document.getElementById('nextBtn').disabled = page === 5;
    updatePageNumbers();
}

function updatePageNumbers() {
    const totalPages = Math.ceil(records.length / recordsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => goToPage(i);
        if (i === currentPage) {
            button.classList.add('active');
        }
        pageNumbers.appendChild(button);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayRecords(currentPage);
    }
}

function nextPage() {
    if (currentPage < 5) {
        currentPage++;
        displayRecords(currentPage);
    }
}

function goToPage(page) {
    currentPage = page;
    displayRecords(currentPage);
}

displayRecords(currentPage);


const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');


search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}