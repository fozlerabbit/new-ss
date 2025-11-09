/* ========================================
   FILE: member.js
   ScriptySphere Member Directory JavaScript
   ======================================== */

// ========== BANGLADESH DIVISIONS & DISTRICTS ==========
const divisionsData = {
  "Dhaka": {
    icon: "🏛️",
    districts: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Jamalpur", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Mymensingh", "Narayanganj", "Narsingdi", "Netrokona", "Rajbari", "Shariatpur", "Sherpur", "Tangail"]
  },
  "Chattogram": {
    icon: "🌊",
    districts: ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"]
  },
  "Rajshahi": {
    icon: "🌾",
    districts: ["Bogura", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajganj"]
  },
  "Khulna": {
    icon: "🐅",
    districts: ["Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"]
  },
  "Barishal": {
    icon: "⛵",
    districts: ["Barguna", "Barishal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"]
  },
  "Sylhet": {
    icon: "☕",
    districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]
  },
  "Rangpur": {
    icon: "🌾",
    districts: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"]
  },
  "Mymensingh": {
    icon: "🎓",
    districts: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"]
  }
};

// ========== SAMPLE MEMBERS DATA ==========
const membersData = [
  {
    id: 1,
    name: "Fozle Rabbi",
    role: "Founder & CEO",
    division: "Rangpur",
    district: "Nilphamari",
    photo: "https://ui-avatars.com/api/?name=Fozle+Rabbi&background=0EA5E9&color=fff&size=200",
    skills: ["Leadership", "Technology", "Innovation"],
    email: "fozle@scriptysphere.org",
    phone: "+880 1600-374396",
    joinedDate: "2020-01-15",
    bio: "Founder of ScriptySphere, passionate about youth empowerment and technology education."
  },
  {
    id: 2,
    name: "Afsana Rahman",
    role: "Volunteer Lead",
    division: "Dhaka",
    district: "Dhaka",
    photo: "https://ui-avatars.com/api/?name=Afsana+Rahman&background=06B6D4&color=fff&size=200",
    skills: ["Community Building", "Event Management", "Coordination"],
    email: "afsana@scriptysphere.org",
    phone: "+880 1700-123456",
    joinedDate: "2020-03-20",
    bio: "Leading volunteer programmes and community engagement initiatives."
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Programme Coordinator",
    division: "Chattogram",
    district: "Chattogram",
    photo: "https://ui-avatars.com/api/?name=Tanvir+Ahmed&background=8B5CF6&color=fff&size=200",
    skills: ["Project Management", "Coding", "Training"],
    email: "tanvir@scriptysphere.org",
    phone: "+880 1800-234567",
    joinedDate: "2020-06-10",
    bio: "Coordinating educational programmes and skill development workshops."
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Community Manager",
    division: "Dhaka",
    district: "Gazipur",
    photo: "https://ui-avatars.com/api/?name=Nusrat+Jahan&background=10B981&color=fff&size=200",
    skills: ["Social Media", "Content Creation", "Communication"],
    email: "nusrat@scriptysphere.org",
    phone: "+880 1900-345678",
    joinedDate: "2020-08-05",
    bio: "Managing online community and creating engaging content."
  },
  {
    id: 5,
    name: "Rakib Hasan",
    role: "Tech Lead",
    division: "Sylhet",
    district: "Sylhet",
    photo: "https://ui-avatars.com/api/?name=Rakib+Hasan&background=0EA5E9&color=fff&size=200",
    skills: ["Web Development", "Python", "AI/ML"],
    email: "rakib@scriptysphere.org",
    phone: "+880 1600-456789",
    joinedDate: "2021-01-12",
    bio: "Leading technical projects and mentoring aspiring developers."
  },
  {
    id: 6,
    name: "Sadia Sultana",
    role: "Content Writer",
    division: "Rajshahi",
    district: "Rajshahi",
    photo: "https://ui-avatars.com/api/?name=Sadia+Sultana&background=06B6D4&color=fff&size=200",
    skills: ["Writing", "Blogging", "Research"],
    email: "sadia@scriptysphere.org",
    phone: "+880 1700-567890",
    joinedDate: "2021-03-18",
    bio: "Creating impactful content and documenting our journey."
  },
  {
    id: 7,
    name: "Fahim Rahman",
    role: "Mentor",
    division: "Khulna",
    district: "Khulna",
    photo: "https://ui-avatars.com/api/?name=Fahim+Rahman&background=8B5CF6&color=fff&size=200",
    skills: ["Mentorship", "Career Guidance", "Public Speaking"],
    email: "fahim@scriptysphere.org",
    phone: "+880 1800-678901",
    joinedDate: "2021-05-22",
    bio: "Mentoring youth and guiding them towards successful careers."
  },
  {
    id: 8,
    name: "Tasnuva Akter",
    role: "Workshop Facilitator",
    division: "Barishal",
    district: "Barishal",
    photo: "https://ui-avatars.com/api/?name=Tasnuva+Akter&background=10B981&color=fff&size=200",
    skills: ["Teaching", "Workshop Design", "Training"],
    email: "tasnuva@scriptysphere.org",
    phone: "+880 1900-789012",
    joinedDate: "2021-07-30",
    bio: "Facilitating hands-on workshops and skill-building sessions."
  }
];

// ========== STATE MANAGEMENT ==========
let currentView = 'all';
let currentDivision = null;
let currentDistrict = null;
let displayedMembers = 12;
let filteredMembers = [...membersData];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initAOS();
  initCountUp();
  initTabs();
  initSearch();
  initSort();
  loadAllMembers();
  loadDivisions();
  loadAllDistricts();
  initModal();
  
  // SEO: Update page title dynamically
  updatePageTitle();
});

// ========== SCROLL PROGRESS ==========
function initScrollProgress() {
  const progress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / height) * 100;
    progress.style.width = `${scrolled}%`;
  }, { passive: true });
}

// ========== AOS (ANIMATE ON SCROLL) ==========
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 100
    });
  }
}

// ========== COUNTUP ANIMATIONS ==========
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = entry.target;
        const end = parseInt(target.getAttribute('data-count'));
        animateCount(target, 0, end, 2000);
        target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCount(element, start, end, duration) {
  const increment = (end - start) / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ========== TAB FUNCTIONALITY ==========
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      // Update active tab
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      
      // Switch views
      switchView(category);
    });
  });
}

function switchView(view) {
  currentView = view;
  const sections = document.querySelectorAll('.content-section');
  
  sections.forEach(section => section.classList.remove('active'));
  
  switch(view) {
    case 'all':
      document.getElementById('allMembersSection').classList.add('active');
      loadAllMembers();
      break;
    case 'divisions':
      document.getElementById('divisionsSection').classList.add('active');
      showDivisionsView();
      break;
    case 'districts':
      document.getElementById('districtsSection').classList.add('active');
      break;
  }
  
  // SEO: Update page title
  updatePageTitle();
}

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
  const searchInput = document.getElementById('memberSearch');
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = e.target.value.toLowerCase().trim();
      filterMembers(query);
    }, 300);
  });
}

function filterMembers(query) {
  if (!query) {
    filteredMembers = [...membersData];
  } else {
    filteredMembers = membersData.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.skills.some(skill => skill.toLowerCase().includes(query)) ||
      member.division.toLowerCase().includes(query) ||
      member.district.toLowerCase().includes(query)
    );
  }
  
  displayedMembers = 12;
  loadAllMembers();
}

// ========== SORT FUNCTIONALITY ==========
function initSort() {
  const sortSelect = document.getElementById('sortSelect');
  
  sortSelect.addEventListener('change', (e) => {
    const sortType = e.target.value;
    sortMembers(sortType);
  });
}

function sortMembers(type) {
  switch(type) {
    case 'name-asc':
      filteredMembers.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filteredMembers.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'date-new':
      filteredMembers.sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));
      break;
    case 'date-old':
      filteredMembers.sort((a, b) => new Date(a.joinedDate) - new Date(b.joinedDate));
      break;
    case 'role':
      filteredMembers.sort((a, b) => a.role.localeCompare(b.role));
      break;
  }
  
  loadAllMembers();
}

// ========== LOAD ALL MEMBERS ==========
function loadAllMembers() {
  const grid = document.getElementById('membersGrid');
  const noResults = document.getElementById('noResults');
  const memberCount = document.getElementById('memberCount');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreWrapper = document.getElementById('loadMoreWrapper');
  
  grid.innerHTML = '';
  
  if (filteredMembers.length === 0) {
    noResults.style.display = 'block';
    loadMoreWrapper.style.display = 'none';
    memberCount.textContent = '0';
    return;
  }
  
  noResults.style.display = 'none';
  memberCount.textContent = filteredMembers.length;
  
  const membersToShow = filteredMembers.slice(0, displayedMembers);
  
  membersToShow.forEach((member, index) => {
    const card = createMemberCard(member, index);
    grid.appendChild(card);
  });
  
  // Show/hide load more button
  if (displayedMembers < filteredMembers.length) {
    loadMoreWrapper.style.display = 'block';
  } else {
    loadMoreWrapper.style.display = 'none';
  }
  
  // Load more functionality
  loadMoreBtn.onclick = () => {
    displayedMembers += 12;
    loadAllMembers();
  };
}

// ========== CREATE MEMBER CARD ==========
function createMemberCard(member, index) {
  const card = document.createElement('div');
  card.className = 'member-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', (index % 3) * 100);
  
  card.innerHTML = `
    <div class="member-card-header">
      <div class="member-avatar-wrapper">
        <img 
          src="${member.photo}" 
          alt="${member.name} - ${member.role} at ScriptySphere" 
          class="member-avatar"
          loading="lazy"
        >
      </div>
    </div>
    <div class="member-card-body">
      <h3 class="member-name">${member.name}</h3>
      <p class="member-role">${member.role}</p>
      <div class="member-location">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>${member.district}, ${member.division}</span>
      </div>
      <div class="member-skills">
        ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      <div class="member-actions">
        <button class="btn-action" onclick="openMemberModal(${member.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4M12 8h.01"/>
          </svg>
          View Details
        </button>
        <button class="btn-action btn-share" onclick="shareMember(${member.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// ========== LOAD DIVISIONS ==========
function loadDivisions() {
  const grid = document.getElementById('divisionsGrid');
  grid.innerHTML = '';
  
  Object.keys(divisionsData).forEach((divisionName, index) => {
    const division = divisionsData[divisionName];
    const memberCount = membersData.filter(m => m.division === divisionName).length;
    
    const card = document.createElement('div');
    card.className = 'division-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 50);
    
    card.innerHTML = `
      <div class="division-icon">${division.icon}</div>
      <h3 class="division-name">${divisionName}</h3>
      <div class="division-stats">
        <span class="stat-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          ${memberCount} Members
        </span>
        <span class="stat-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
          ${division.districts.length} Districts
        </span>
      </div>
    `;
    
    card.onclick = () => selectDivision(divisionName);
    grid.appendChild(card);
  });
}

// ========== SELECT DIVISION ==========
function selectDivision(divisionName) {
  currentDivision = divisionName;
  const division = divisionsData[divisionName];
  
  // Hide divisions grid
  document.getElementById('divisionsGrid').style.display = 'none';
  
  // Show back button
  document.getElementById('backToDivisions').style.display = 'inline-flex';
  document.getElementById('divisionTitle').textContent = `Districts in ${divisionName}`;
  
  // Load districts
  const districtsGrid = document.getElementById('districtsGrid');
  districtsGrid.style.display = 'grid';
  districtsGrid.innerHTML = '';
  
  division.districts.forEach((districtName, index) => {
    const memberCount = membersData.filter(m => 
      m.division === divisionName && m.district === districtName
    ).length;
    
    const card = document.createElement('div');
    card.className = 'district-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 30);
    
    card.innerHTML = `
      <div class="district-icon">📍</div>
      <h4 class="district-name">${districtName}</h4>
      <div class="district-stats">
        <span class="stat-badge">
          ${memberCount} ${memberCount === 1 ? 'Member' : 'Members'}
        </span>
      </div>
    `;
    
    card.onclick = () => selectDistrict(divisionName, districtName);
    districtsGrid.appendChild(card);
  });
  
  // Back button functionality
  document.getElementById('backToDivisions').onclick = showDivisionsView;
}

// ========== SELECT DISTRICT ==========
function selectDistrict(divisionName, districtName) {
  currentDistrict = districtName;
  
  const members = membersData.filter(m => 
    m.division === divisionName && m.district === districtName
  );
  
  // Hide districts grid
  document.getElementById('districtsGrid').style.display = 'none';
  
  // Update title
  document.getElementById('divisionTitle').textContent = `Members from ${districtName}, ${divisionName}`;
  
  if (members.length === 0) {
    // Show empty state
    const emptyState = document.getElementById('emptyDivision');
    emptyState.style.display = 'block';
    document.getElementById('emptyMessage').textContent = 
      `No members yet from ${districtName}. Join ScriptySphere and become the first member from this district!`;
  } else {
    // Show members
    const membersGrid = document.getElementById('divisionMembersGrid');
    membersGrid.style.display = 'grid';
    membersGrid.innerHTML = '';
    
    members.forEach((member, index) => {
      const card = createMemberCard(member, index);
      membersGrid.appendChild(card);
    });
  }
}

// ========== SHOW DIVISIONS VIEW ==========
function showDivisionsView() {
  document.getElementById('divisionsGrid').style.display = 'grid';
  document.getElementById('districtsGrid').style.display = 'none';
  document.getElementById('divisionMembersGrid').style.display = 'none';
  document.getElementById('emptyDivision').style.display = 'none';
  document.getElementById('backToDivisions').style.display = 'none';
  document.getElementById('divisionTitle').textContent = 'Divisions of Bangladesh';
  
  currentDivision = null;
  currentDistrict = null;
}

// ========== LOAD ALL DISTRICTS ==========
function loadAllDistricts() {
  const grid = document.getElementById('allDistrictsGrid');
  grid.innerHTML = '';
  
  let allDistricts = [];
  Object.keys(divisionsData).forEach(divisionName => {
    divisionsData[divisionName].districts.forEach(districtName => {
      allDistricts.push({ division: divisionName, district: districtName });
    });
  });
  
  allDistricts.forEach((item, index) => {
    const memberCount = membersData.filter(m => 
      m.division === item.division && m.district === item.district
    ).length;
    
    const card = document.createElement('div');
    card.className = 'district-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 8) * 20);
    
    card.innerHTML = `
      <div class="district-icon">📍</div>
      <h4 class="district-name">${item.district}</h4>
      <p style="font-size: 0.875rem; color: var(--gray-600); margin-bottom: var(--space-sm);">${item.division} Division</p>
      <div class="district-stats">
        <span class="stat-badge">
          ${memberCount} ${memberCount === 1 ? 'Member' : 'Members'}
        </span>
      </div>
    `;
    
    card.onclick = () => selectDistrict(item.division, item.district);
    grid.appendChild(card);
  });
}

// ========== MODAL FUNCTIONALITY ==========
function initModal() {
  const modal = document.getElementById('memberModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  
  closeBtn.onclick = closeModal;
  overlay.onclick = closeModal;
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openMemberModal(memberId) {
  const member = membersData.find(m => m.id === memberId);
  if (!member) return;
  
  const modal = document.getElementById('memberModal');
  const modalBody = modal.querySelector('.modal-body');
  
  modalBody.innerHTML = `
    <div class="modal-member-header">
      <img 
        src="${member.photo}" 
        alt="${member.name} - ${member.role}" 
        class="modal-member-avatar"
        loading="lazy"
      >
      <h2 class="modal-member-name">${member.name}</h2>
      <p class="modal-member-role">${member.role}</p>
    </div>
    
    <div class="modal-member-info">
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Location</div>
          <div class="info-value">${member.district}, ${member.division}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Email</div>
          <div class="info-value">${member.email}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Phone</div>
          <div class="info-value">${member.phone}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Joined</div>
          <div class="info-value">${new Date(member.joinedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 20v-6M6 20V10M18 20V4"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Skills</div>
          <div class="info-value">${member.skills.join(', ')}</div>
        </div>
      </div>
    </div>
    
    ${member.bio ? `<p style="color: var(--gray-600); line-height: 1.8; margin-bottom: var(--space-xl);">${member.bio}</p>` : ''}
    
    <div class="modal-member-actions">
      <button class="btn-action" onclick="window.location.href='mailto:${member.email}'">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        Send Email
      </button>
      <button class="btn-action btn-share" onclick="shareMember(${member.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        Share Profile
      </button>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // SEO: Update page title
  document.title = `${member.name} - ${member.role} | ScriptySphere Members`;
}

function closeModal() {
  const modal = document.getElementById('memberModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  // SEO: Restore original title
  updatePageTitle();
}

// ========== SHARE MEMBER ==========
function shareMember(memberId) {
  const member = membersData.find(m => m.id === memberId);
  if (!member) return;
  
  // Create shareable URL
  const baseUrl = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUrl}?member=${memberId}`;
  
  // Try to use Web Share API
  if (navigator.share) {
    navigator.share({
      title: `${member.name} - ${member.role}`,
      text: `Check out ${member.name}'s profile on ScriptySphere!`,
      url: shareUrl
    }).catch(err => {
      console.log('Share cancelled:', err);
    });
  } else {
    // Fallback: Copy to clipboard
    copyToClipboard(shareUrl);
  }
}

function copyToClipboard(text) {
  // Create temporary input
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  
  try {
    document.execCommand('copy');
    showToast();
  } catch (err) {
    console.error('Failed to copy:', err);
  }
  
  document.body.removeChild(input);
}

function showToast() {
  const toast = document.getElementById('shareToast');
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ========== CHECK URL PARAMETERS ==========
function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const memberId = params.get('member');
  
  if (memberId) {
    const id = parseInt(memberId);
    const member = membersData.find(m => m.id === id);
    
    if (member) {
      // Open modal for shared member
      setTimeout(() => {
        openMemberModal(id);
      }, 500);
    }
  }
}

// Check URL params on load
checkUrlParams();

// ========== SEO: UPDATE PAGE TITLE ==========
function updatePageTitle() {
  let title = 'Members Directory - ScriptySphere';
  
  switch(currentView) {
    case 'all':
      title = `All Members (${membersData.length}) - ScriptySphere`;
      break;
    case 'divisions':
      if (currentDivision && currentDistrict) {
        title = `Members from ${currentDistrict}, ${currentDivision} - ScriptySphere`;
      } else if (currentDivision) {
        title = `Members from ${currentDivision} Division - ScriptySphere`;
      } else {
        title = 'Members by Division - ScriptySphere';
      }
      break;
    case 'districts':
      title = 'Members by District (64 Districts) - ScriptySphere';
      break;
  }
  
  document.title = title;
  
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `Browse ${membersData.length}+ ScriptySphere members from across Bangladesh. ${title}`);
  }
}

// ========== PERFORMANCE: LAZY LOAD IMAGES ==========
document.addEventListener('DOMContentLoaded', () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
  }
});

// ========== ANALYTICS: TRACK PAGE VIEWS ==========
function trackPageView(view) {
  // Google Analytics integration
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_path: window.location.pathname + window.location.search,
      view_type: view
    });
  }
  
  // Console log for debugging
  console.log(`Page View: ${view}`, {
    title: document.title,
    members: membersData.length
  });
}

// Track initial view
trackPageView('initial_load');

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
  // Escape key to close modal
  if (e.key === 'Escape') {
    const modal = document.getElementById('memberModal');
    if (modal.classList.contains('active')) {
      closeModal();
    }
  }
  
  // Ctrl/Cmd + K for search focus
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('memberSearch').focus();
  }
});

// ========== EXPORT FUNCTIONS FOR GLOBAL ACCESS ==========
window.openMemberModal = openMemberModal;
window.shareMember = shareMember;
window.selectDivision = selectDivision;
window.selectDistrict = selectDistrict;

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', () => {
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page Load Time: ${pageLoadTime}ms`);
  }
});

// ========== ERROR HANDLING ==========
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.error);
});

// ========== PWA: SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered:', registration);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed:', err);
      });
  });
}

// ========== CONSOLE BRANDING ==========
console.log(
  '%cScriptySphere Members Directory',
  'color: #0EA5E9; font-size: 24px; font-weight: bold;'
);
console.log(
  '%c300+ Youth Innovators Across Bangladesh',
  'color: #06B6D4; font-size: 14px;'
);
console.log(
  '%cBuilt with ❤️ by ScriptySphere Team',
  'color: #10B981; font-size: 12px;'
);

// ========== EXPORT MODULE ==========
export {
  divisionsData,
  membersData,
  openMemberModal,
  shareMember,
  selectDivision,
  selectDistrict,
  updatePageTitle
};