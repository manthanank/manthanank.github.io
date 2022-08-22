# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Dennis Ivy Digital Resume

A digital resume website built based on the content from my personal REAL [resume](./assets/resume.pdf) 

View live demo here using github pages: [Live Demo](https://divanov11.github.io/Digital-Resume/)

## Dark Mode Preview

<img src="assets\images\dark mode preview.PNG">

## Light Mode Preview

<img src="assets\images\light mode preview.PNG">

## Switching between color themes

This website has no auto toggle theme switcher, therefor to change themes you must manual go into `/styles/main.css` and the css variables to use either theme. Default is dark, so do the following here:

```css
--mainTextColor:var(--mainTextColor-light); 
--secondaryTextColor:(--secondaryTextColor-light);
--mainLinkColor:var(--mainLinkColor-light);
--mainBorderColor:var(--mainBorderColor-light);
--mainBgColor:var(--mainBgColor-light);
```

### Angular application performance with the help of GZip compression

`npm install -g gzipper`

And I modified the package.json and added one more command under scripts, like this.

`"build-compress": "ng build && gzipper c ./dist --include js,css,html --output-file-format [filename].[ext] ./dist-compressed/"`

### Run 

`npm run build-compress`