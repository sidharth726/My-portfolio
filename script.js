const projects = [
  { title: 'Code with AI Quiz', description: 'Quiz project from my GitHub repositories.', technologies: 'See GitHub repository', links: [{ label: 'Open GitHub repository', url: 'https://github.com/sidharth726/code-with-ai-quiz' }] },
  { title: 'Python Basic', description: 'Python project from my GitHub repositories.', technologies: 'Python', links: [{ label: 'Open GitHub repository', url: 'https://github.com/sidharth726/python-basic-25BCOL2841' }] },
  { title: 'Python Basics: Factorial', description: 'Factorial project from my GitHub repositories.', technologies: 'Python', links: [{ label: 'Open GitHub repository', url: 'https://github.com/sidharth726/python-basics-factorial--25BCOL2841' }] },
  { title: 'Color Detection', description: 'Color detection project from my GitHub repositories.', technologies: 'See GitHub repository', links: [{ label: 'Open GitHub repository', url: 'https://github.com/sidharth726/color-detection' }] }
];
const grid = document.querySelector('#project-grid');
const search = document.querySelector('#project-search');
function renderProjects() {
  const term = search.value.trim().toLowerCase();
  const results = projects.filter(project => `${project.title} ${project.description} ${project.technologies}`.toLowerCase().includes(term));
  document.querySelector('#project-count').textContent = `${results.length} of ${projects.length} projects shown`;
  grid.innerHTML = results.length ? results.map(project => {
    const links = (project.links || []).map(link => `<a href="${safeUrl(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ↗</a>`);
    return `<article class="project-card"><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><p class="technology">${escapeHtml(project.technologies)}</p><div class="project-links">${links.join('')}</div></article>`;
  }).join('') : '<p class="hint">No projects match that search. Try Python, Quiz, or Book.</p>';
}
search.addEventListener('input', renderProjects);
renderProjects();
const themeButton = document.querySelector('#theme-toggle');
themeButton.addEventListener('click', () => {
  const light = document.documentElement.dataset.theme !== 'light';
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  themeButton.textContent = light ? '☾ Dark mode' : '☀ Light mode';
  themeButton.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`);
});
document.querySelector('#year').textContent = new Date().getFullYear();
const chatForm = document.querySelector('#chat-form');
chatForm.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#chat-input');
  const question = input.value.trim();
  if (!question) return;
  const messages = document.querySelector('#chat-messages');
  const user = document.createElement('p'); user.className = 'user-message'; user.textContent = question; messages.append(user);
  const answer = document.createElement('p'); answer.className = 'bot-message';
  answer.textContent = 'Thanks for your question! The chatbot API still needs to be connected using the method taught in class.';
  messages.append(answer); input.value = '';
});
function escapeHtml(value) { const node = document.createElement('span'); node.textContent = value; return node.innerHTML; }
function safeUrl(value) { try { const url = new URL(value, window.location.href); return ['https:', 'http:', 'file:'].includes(url.protocol) ? url.href : '#'; } catch { return '#'; } }
