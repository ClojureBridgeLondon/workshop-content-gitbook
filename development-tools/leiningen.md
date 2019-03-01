# Leiningen - the build automation tool for Clojure

Leiningen will help you create, build and deploy your Clojure projects.


## Install Leiningen

Install the Leiningen tool using the specific instructions for your Operating System

<!-- Operating System specific instructions -->
{% tabs linux="Linux", homebrew="Homebrew", gitbash="GitBash", chocolatey="Chocolatey", windows="Windows Manual" %}


{% content "linux" %}
[Download the lein script](https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein) to your local `bin` directory.  Then make the `lein` script executable and run `lein` to download the full version.

```bash
mkdir ~/bin
curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein > ~/bin/lein
chmod u+x ~/bin/lein
lein
```
If the command `lein` is not found, run `source ~/.bashrc` to ensure your `bin` directory is on the path.


{% content "homebrew" %}
If you have [Homebrew](https://brew.sh/) installed, run the following command in a terminal window.

```bash
brew install leiningen
```


{% content "gitbash" %}
GitBash allows you to use the Linux `lein` script, which causes have less issues when installing on Windows.

[Download Git](https://git-scm.com/download/win), double click the file and follow the install wizard accepting all the defaults (there are quite a few, sorry).

Create a directory called `C:\Users\your-user-name\AppData\Local\Programs\Leiningen`, where `your-user-name` is your windows login name.

[Download the lein script](https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein) save it to the above directory

Open `Environment variables for your account` and add the directory to your path

Open GitBash application and a terminal window will open.  Run the command: `lein`

The full version of Leiningen will be downloaded and Leiningen is ready to use.


{% content "chocolatey" %}

If you have [Chocolatey](https://chocolatey.org/) installed, add the [Leiningen package](https://chocolatey.org/packages/Lein) by running the following command in a terminal window.

```bash
choco install lein
```


{% content "windows" %}

> ####WARN::lein.bat method does not always work
> We recommend using the GitBash approach for Windows

Create a directory called `C:\Users\your-user-name\AppData\Local\Programs\Leiningen`

[Download the `lein.bat` file](https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein.bat) and save it to the above directory

Open `Environment variables for your account` and add the directory to your path

Open a command window and run the command: `lein`

The full version of Leiningen will be downloaded and Leiningen is ready to use.

If you get an error that `leiningen-x-x-x-standalone.jar cannot be found`, please use the GitBash approach.

{% endtabs %}
<!-- End of Operating System specific instructions -->



## Check Leiningen is working

Open a terminal and use the following command

```bash
lein
```

If a list of Leiningen commands is shown then it is working correctly.

![Leiningen help](/images/leiningen-help.png)
