# Calculator

## [Deploy](https://aggamix.github.io/calculator/dist/)

## [Task](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## How to run the app

In order to run the app you should make some steps:

1. Click on green button "Code"
2. Click on "Download ZIP"
3. Unzip a folder
4. Open a folder in a code editor
5. Open the terminal
6. Paste the command `npm install` into the terminal and wait for the dependencies to finish loading
7. After pasting and executing the command `npm run start`, the application will automatically open in the browser

## How to use 'pre-commit-hook'

If you have executed the previous commands and want to check the functionality of the **pre-commit hook**, you should make some steps:

1. Open the terminal
2. Paste the command `git init` into the terminal to initialized empty Git repository
3. After initializing the repository, paste the command `npx husky install` to install **Husky** for using the **pre-commit hook**
4. Edit any file with the **.js** format. For example, remove any semicolon at the end of a line and add some character. **ESLint** will immediately indicate that an error has been made
5. Add the modified files to the Git staging area using `git add .`
6. Make a new commit `git commit -m "Test commit"` to take a snapshot of the current changes in the project
7. Before the commit, **Husky** will run the command `npx lint-staged`:
   - It will check the files in the Git staging area for errors and fix them automatically if possible. After that, you will have a ready commit with the edited files
   - If the errors cannot be fixed automatically, the commit will not occur

## Folder structure

1. '.husky' - is the folder containing files that run the 'pre-commit hook'
2. 'dist' - is the folder containing files for deploying the application, built with **Webpack**
   - 'images' - is the folder containing **svg** files
3. 'node_modules' - is the folder containing configurations for project
4. 'src' - is the folder containing the project's source code
   - 'img' - is the folder containing **svg** files
   - 'scripts' - is the folder for **js** files
     - 'components' - is the folder for components
     - 'utils' - is the folder for helper functions
   - 'styles' - if the folder for **css** files
