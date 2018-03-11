# Leiningen - the build automation tool for Clojure

Leiningen will help you create, build and deploy your Clojure projects.


## Check if Leiningen is installed

Open a terminal and use the following command

```bash
lein
```

If a list of Leiningen commands is shown then it is working correctly.

---

## Manual install: Ubuntu & MacOSX

Download the latest stable Leiningen script to your local `bin` directory.  Then make the `lein` script executable and run `lein` to download the full version.

```bash
mkdir ~/bin
curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein > ~/bin/lein
chmod u+x ~/bin/lein
lein
```
> If the command `lein` is not found, run `source ~/.bashrc` to ensure your `bin` directory is on the path.


## Homebrew (MacOSX)

```bash
brew install leiningen
```

## Choclatey (Windows)

Install the [Leiningen package](https://chocolatey.org/packages/Lein)

```bash
choco install lein
```

## Windows - Manual install

Create a directory called C:\Users\your-user-name\AppData\Local\Programs\Leiningen

Download the lein.bat file and save it to the above directory

Open "Environment variables for your account" and add the directory to your path

Open a command window and run the command: `lein.bat`

The full version of Leiningen will be downloaded
