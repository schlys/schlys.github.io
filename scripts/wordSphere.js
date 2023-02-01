const myTags = [
    'Python', 'Java', 'C',
    'C#', 'Bash', 'Go',
    'HTML', 'JavaScript',
    'Terraform', 'Git', 'CSS',
     'CI/CD', 'Docker', 'AWS', 'SQLite'
];

var tagCloud = TagCloud('.content', myTags, {

    radius: 350,

    maxSpeed: 'fast',
    initSpeed: 'slow',

    direction: 135,

    keep: true
});
