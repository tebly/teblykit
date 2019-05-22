Tebly StoryBook
===

> The folder contains basic configuration about how to setup a Storybook or components explorer.
> The folder can be duplicated to create a new theme/environment.

```
    {
        "scripts": {
            "start-storybook-for-theme-a": "start-storybook -p 9001 -c .storybook-theme-a",
            "start-storybook-for-theme-b": "start-storybook -p 8001 -c .storybook-them-b"
        }
    }
```

### Convention to follow for our story folders/files
- Create a folder called _stories_ inside of your component's folder
- Create file(s) with the name of your component 
    - [Name of your component].story.js

Example
```
   MyAwesomeComponent/
       MyAwesomeComponent.jsx
       __stories__/
           MyAwesomeComponent.story.js
``` 
### Running Storybook
```
    npm run storybook:dev
```

### Deploying as a static App
```
    npm run storybook
```

For more information about the tool, go to the main site [https://storybook.js.org](https://storybook.js.org)
