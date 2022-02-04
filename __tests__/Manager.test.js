const Manager = require('../lib/Manager');

test('Expect office number to be 8778888888', () => {
    const crtEmp = new Manager('Marty', 'TopDog1', 'bosslevel@gmail.com', '8778888888')
    expect(crtEmp.getOfficeNumber()).toBe('8778888888');
});

test('Expect employee role to be Manager', () => {
    const crtEmp = new Manager('Marty', 'TopDog1', 'bosslevel@gmail.com', '8778888888')
    expect(crtEmp.getRole()).toBe('Manager');
});