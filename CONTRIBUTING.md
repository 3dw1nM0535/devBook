# Contributing

So you found an issue on the platform or you don't like the way the platform works, just `Pull Request`!

We are open to, and grateful for, any contributions made by the community. By contributing to Events.com, you agree to abide by the [code of conduct]().

## Reporting Issues

Before opening an issue or requesting an issue, please search the [issue tracker]() to make sure your issue hasn't already been reported.

## Bugs and Improvements
We use the issue tracker to keep track of bugs and improvements to Events.com itself, and the documentation. We encourage you to open issues to discuss improvements, architecture, theory, internal implementation, etc. If a topic has been discussed before, we will ask you to join the previous discussion.

As Events.com is a platform, changes to its behaviour are carefully considered. Any pull requests that involve breaking changes should be made against the `next` branch.

## Help Us Help You

We encourage you to use syntax highlighting, indentation, and split text in paragraphs.

Please keep in mind that people spend their time trying to brainstorm your issue to find the best approach too. You can put your code on [JSBin]() if you are trying to illustrate an algorithm. Make sure all the necessary dependencies are declared in `package.json` so anyone can run `npm install && npm start` and reproduce your feature or issue.

## Development

Visit the [issue tracker]() to find a list of open issues or features that need attention.

Fork, then clone the repo:

```
git clone repo
```

### Building
#### Building Events.com

Running the build task will create a CommonJS module-per-module build.

```
npm run build
```
The result will be in the `dist` folder.

### Testing and Linting

To run linting only:
```
npm run lint
```
To run tests only:
```
npm run test
```

### Docs

Improvements to the documentation are always welcome.

## Sending A Pull Request

For non-trivial changes, please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

The best way to send a pull request is to start a conversation. Use your best judgement!

Contribution workflow should be like this:

* Open a new issue in the [issue tracker]().
* Fork the repo.
* Create a new branch based off the `master` branch.
* Make sure all tests pass and there are no linting errors.
* Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or improvements.

Thank you for contributing!
