## Installations guide

To make the platform work on your local machine, you need the following installed locally in your gig:

  * NodeJS
  * MongoDB

devBook will not work if the above softwares are not installed in your gig. devBook is bootstraped with [Webpack](https://www.webpack.org).

`/client` folder has the code that runs on the client and the `/server` folder contains the API devBook interacts with from the Front-End.

devBook state management is handled by `redux`.

devBook does not handle any data modification on the `/client`. The `/client` only update the App's store.

devBook handles data modification and manupulation on the `/server`. Our API sends the response back to the client and the client only update it's data store via `redux` action dispatch.

You need to create your own secret keys for making API request to external sources and also the `PORT` and `MONGO_URI` are configured in secret keys.

devBook uses [googleMapsAPI](), to acquire secret key for this API, you need to have a google developer account which you can register  from [here]().

devBook also uses [MailTrap.io](https://www.mailtrap.io) for develoment to send dummy email for account verification, password reset and account reset. Register with Mailtrap to acquire configurations to setup your dummy email sending account using [nodemailer](). Grab your configurations and save them in `.env` for your own local development or interactions.

**NB:** remember `.env` is not tracked by `git` for security purposes. To avoid `git` tracking private enviroment configurations file, add `.env` file to `.gitignore` and commit your changes to `git`.

To start interacting with devBook:

```
git clone <repo>
```
to have a local copy of devBook in your machine.

```
cd devBook && npm install
```
to install all the packages devBook uses and its dependencies.

```
npm run build && npm start
```
to start the development server and :boom:, you now have devBook running locally in your machine.
