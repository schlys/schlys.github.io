const myTags = [
    'Python', 'Java', 'C',
    'C#', 'Go', 'GCP',
    'HTML', 'JavaScript',
    'Terraform', 'Git', 'CSS',
     'CI/CD', 'Docker', 'AWS', 'SQL', 'MongoDB', 'Flask'
];

var tagCloud = TagCloud('#cloud', myTags, {

    radius: getComputedStyle(document.documentElement).getPropertyValue('--cloud-radius'),

    maxSpeed: 'fast',
    initSpeed: 'slow',

    direction: 135,

    keep: true
});

window.onresize = function(){
    
    const node = document.getElementById("cloud");
    node.textContent='';
    
    TagCloud('#cloud', myTags, {

    radius: getComputedStyle(document.documentElement).getPropertyValue('--cloud-radius'),

    maxSpeed: 'fast',
    initSpeed: 'slow',

    direction: 135,

    keep: true
});}




const btn = document.getElementById('mobile-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

