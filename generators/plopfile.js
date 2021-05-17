module.exports = (plop) => {
  plop.setGenerator('class', {
    description: 'Create a class',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your class name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your class description?'
      },
      {
        type: 'list',
        name: 'category',
        message: 'What category do you need?',
        choices: ['controllers']
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{lowerCase category}}/{{pascalCase name}}.js',
        templateFile: 'templates/class.js.hbs'
      }
    ]
  })
}
