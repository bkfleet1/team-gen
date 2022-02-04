const Intern = require('../lib/Intern');

test('Expect school to be Harvard', () => {
    const crtEmp = new Intern('Jennifer', 'ABC999', 'jennifer@gmail.com', 'Harvard')
    expect(crtEmp.getSchool()).toBe('Harvard');
})

test('Expect employee role to be Intern', () => {
    const crtEmp = new Intern('Jennifer', 'ABC999', 'jennifer@gmail.com', 'Harvard')
    expect(crtEmp.getRole()).toBe('Intern');
})