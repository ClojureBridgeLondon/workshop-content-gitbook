# Java

Clojure is a hosted language, so we need to install a Java run-time environment (JRE).  Java is typically installed on all modern operating systems.


## Install Java

<!-- Operating System specific instructions -->
{% tabs first="Debian/Ubuntu", second="Homebrew", third="Chocolatey", forth="Manual" %}

<!-- Ubuntu install -->
{% content "first" %}

Open a terminal and run the following command (you will be prompted for your login password to complete the install)

```bash
sudo apt-get install openjdk-8-jre
```

> #### Hint:: openjdk-8 not available?
> If openjdk-8 is not available, add the [WebUpd8 Java personal package archive](https://launchpad.net/~webupd8team/+archive/ubuntu/java)
```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
```

<!-- Homebrew (MacOSX) install -->
{% content "second" %}

If you use [Homebrew](https://brew.sh/), then run the following commands in a terminal:

```bash
brew tap AdoptOpenJDK/openjdk
brew install adoptopenjdk-openjdk8
```

<!-- Choclatey (Windows) install -->
{% content "third" %}

[Chocolatey](https://chocolatey.org/) is a package manager for Windows (similar to Homebrew for MacOSX)

Install the [Java Runtime (JRE)](https://chocolatey.org/packages/javaruntime) using the following commands in a command window

```bash
choco install javaruntime
```

<!-- Manual Install -->
{% content "forth" %}

[Download OpenJDK 8](https://adoptopenjdk.net/)

[![Adopt OpenJDK webpage](/images/adoptopenjdk-install.png)](https://adoptopenjdk.net/)

Run the file once downloaded and follow the install instructions.


{% endtabs %}
<!-- End of Operating System specific instructions -->



## Check Java is working

Open a terminal and run the command

`java -version`

If Java is installed, you will see something like this in your terminal:

![Java version](/images/development-environment-java-check.png)

The details of Java's version may differ from what you see above; that is perfectly fine, so long as you have Java version 8 or above.
