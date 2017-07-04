# Contributing to ClojureBridge Workshop

Thank you for considering contributing to the content of this workshop.

Any of the following aspects are valuable contributions
* Code examples
* Explanations of Clojure & Functional Programming concepts
* Code challenges (exercises for students)

Feedback on: 
* how well any concepts are explained
* how simple the code examples are to follow
* if code challenges are clear, to easy or to challenging

Please ask about contributing at the **#clojurebridge-london** channel on the [Clojurians Slack community](https://clojurians.slack.com/).  

> Use the [Clojurians.net slackbot](http://clojurians.net/) for an invite if you do not have a login account for the Clojurians Slack community.

## How to Contribute

You can either add or edit content directly on the [ClojureBridge Workshop Github repository](https://github.com/ClojureBridgeLondon/workshop-content-gitbook.git) or fork that repository and make changes with your favourite editor and submit a pull request.

All content is in [markdown]() files, ending with a file extension of `.md`.

All content is in English with UK spelling, except in some code snippets that use Americanised words (eg. color).


## Creating a local environment

The Workshop uses Gitbook to create the website content (html, css, javascript) from the markdown pages.  

You can run your own Gitbook server to see what your changes look like before making a commit.


### Install Node.js

Gitbook requires [Node.js](https://nodejs.org/) and recommends version 6.11.x or greater

The [Node.js website ](https://nodejs.org/) has installation instructions.  To test you have nodejs working, run the command `node -v`


### Install Gitbook

Install Gitbook npm package globally (where-ever nodejs itself is installed) using the command

```sh
npm install gitbook-cli -g
```

> If the above fails because nodejs is installed in a protected area of your filespace, you will need to install gitbook as administrator using the following command instead `sudo npm install gitbook-cli -g`


### Clone the Workshop content

Use git to download a local copy of the workshop content to your local machine.  For example:

```sh
git clone https://github.com/ClojureBridgeLondon/workshop-content-gitbook.git
```

### Install Gitbook plugins

Once downloaded, change into the `workshop-content-gitbook` directory and run the following command to install the supporting plugins for Gitbook

```sh
gitbook install
```

Do not run `gitbook install` as administrator, only your normal user account.  These plugins are installed locally in a folder called `node-modules` inside the `workshop-content-gitbook` directory.

> ####Warning::Do not run gitbook init
> Please do not run gitbook init inside the `workshop-content-gitbook` directory or it will updated the navigation and add a second readme.md file.

### Running Gitbook locally

Gitbook will run a local webserver on port `:4000` using the command:

```sh
gitbook serve
```

View the website using [http://localhost:4000](http://localhost:4000)


## Making changes

Edit or create new files and once you save changes the website will automatically update.

### Changing the Navigation

The navigation is defined in the file `SUMMARY.md`.

Each line in this file creates a link in the left hand side navigation of the Gitbook website.  The syntax is `[Link name](/path/to/file.md)`.

Nested pages of the navigation are defined by inserting 4 space characters at the start of a line.  There can be several levels of nesting.

A style guide for the navigation is to create a directory and index.md file for each section and contain all the markdown files under that section in that directory.


## Contributing changes

Please create a pull request on the [ClojureBridge Workshop Github repository](https://github.com/ClojureBridgeLondon/workshop-content-gitbook.git).

Thank you.
[@jr0cket](https://github.com/jr0cket)
