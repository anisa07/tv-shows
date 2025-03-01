## Application description

This is an app that displayes info about shows from [TVMaze API](https://www.tvmaze.com/api#shows). The app displayes shows only with rating and image.
A user can search for a show by its name.
The shows are filtered by genre and sorted by rating in descending order. Default genre is "Action" and rating avg is "8" means that Action shows with rating from 8 or above will be displayed, a user can change rating and genre.  
Shows are displayed in horizontal row with navigation arrow buttons, it is also possible to display the list of shows as a grid by clicking "Display list as grid".  
Due to API limitations it is not possible to filter or sort shows on the backend side. The API returns 250 results per 1 page to see other pages a user can select another page and see new shows results.
A user can click on a show and open its details including cast and sesons.

## Tools and why they were used

- Use **Vue3** to create the app. Vue router to navigate between pages.
- **Tailwind** to create fast and simple design. **Heroicons** for icons.
- **Vitest** for unit testing testing composables logic.
- **Typescript** to ensure ebtities types safety.
- Basic **eslint** and **prettier** to support formating and code style consistency.
- **Vueuse** to handle fetch results, screen resize for device friendly solutions, and trottle input to make less requests to API.

## Used API endpoints

- https://api.tvmaze.com/shows?page={{ number }} - get list of shows to display on dasboard page
- https://api.tvmaze.com/singlesearch/shows?q={{ showName }} - get a single show by its name
- https://api.tvmaze.com/shows/{{ showId }} - get details about the show
- https://api.tvmaze.com/shows/{{ showId }}/seasons - get show seasons info
- https://api.tvmaze.com/shows/{{ showId }}/cast - get show cast

## Requirements

Node v20.18.1  
Npm 10.8.2  
Stable Internet connection

## Instructions

Install dependencies

```
npm i
```

Put var in .env

```
See .env.example
```

To start the app in dev mode

```
npm run dev
```

To run tests

```
npm run test
```

## Improvements

The following improvements could be done in future

- Add functionality to display information about show episodes and crew
- Add more tests both unit and e2e
- Add other languages support
- To improve quality of the application and speed up development the API upgrade is required i.e. make it possible to filter by genre and rating, limit results per page, get information about pagination data
  In case of displaying big amount of data need to think about perfomance e.g. add virtualization for the long list of the shows
