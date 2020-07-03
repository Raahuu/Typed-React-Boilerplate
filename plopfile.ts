const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return { name: dirent.name, value: dirent.name };
    });

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: () => {
      let actions = [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          // Handlebars template used to generate content of new file
          templateFile: 'plop-templates/Component/Component.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/Component/index.ts.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'plop-templates/Component/Component.test.ts.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.styled.ts',
          templateFile: 'plop-templates/Component/Component.module.css.hbs',
        },
      ];
      return actions;
    },
  });

  plop.setGenerator('container', {
    description: 'Create a container',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your container name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component/Component.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/containers/{{pascalCase name}}/{{pascalCase name}}.styled.ts',
        templateFile: 'plop-templates/Component/Component.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{pascalCase name}}/action.ts',
        templateFile: 'plop-templates/Container/Container.action.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{pascalCase name}}/reducer.ts',
        templateFile: 'plop-templates/Container/Container.reducer.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/Container/Container.types.ts.hbs',
      },
    ],
  });
};
