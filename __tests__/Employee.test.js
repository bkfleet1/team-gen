const Employee = require('../lib/Employee');

test ('Employee name should be Brad', () => {
    const crtEmp = new Employee('Brad','1234','myemail@gmail.com')
    expect(crtEmp.getName()).toBe('Brad');
})

test ('Employee id should ve 1234', () => {
    const crtEmp = new Employee('Brad','1234','myemail@gmail.com')
    expect(crtEmp.getId()).toBe('1234');
})

test ('Employee email should be myemail@gmail.com', () => {
    const crtEmp = new Employee('Brad','1234','myemail@gmail.com')
    expect(crtEmp.getEmail()).toBe('myemail@gmail.com');
})

/test ('Employee role should be Employee', () => {
    const crtEmp = new Employee('Brad','1234','myemail@gmail.com')
    expect(crtEmp.getRole()).toBe('Employee');
})