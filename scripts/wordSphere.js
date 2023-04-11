const myTags = [
    'Python', 'Java', 'C',
    'C#', 'Go', 'GCP',
    'HTML', 'JavaScript',
    'Terraform', 'Git', 'CSS',
     'CI/CD', 'Docker', 'AWS', 'SQL', 'MongoDB', 'Flask'
];

var tagCloud = TagCloud('.content', myTags, {

    radius: 350,

    maxSpeed: 'fast',
    initSpeed: 'slow',

    direction: 135,

    keep: true
});
