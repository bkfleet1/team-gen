const Engineer = require('../lib/Engineer');

test (`Employee's Github username should be bk1234`, () => {
    const crtEmp = new Engineer('Brett','1234','myemail@gmail.com','bk1234')
    expect(crtEmp.getGithub()).toBe('bk1234');
})

test (`Employee's role should be Engineer`, () => {
    const crtEmp = new Engineer('Brett','1234','myemail@gmail.com','bkfleet1')
    expect(crtEmp.getRole()).toBe('Engineer');
})