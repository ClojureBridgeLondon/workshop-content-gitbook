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

> #### Hint:: openjdk-8 not available or not the right version?
> If openjdk-8 is not available, add the [WebUpd8 Java personal package archive](https://launchpad.net/~webupd8team/+archive/ubuntu/java)
```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
```
>
> Switching between Java versions
> If you have more than one version of Java installed, set the version by opening a terminal and using the following command
>
```bash
sudo update-alternatives --config java
```
> Available java versions will be listed.  Enter the list number for the version you wish to use.


<!-- Homebrew (MacOSX) install -->
{% content "second" %}

Using [Homebrew](https://brew.sh/), run the following command in a terminal to install Java 11:

```bash
brew cask install adoptopenjdk11
```

If that command does not work, use this instead to install the latest version.

```bash
brew tap AdoptOpenJDK/openjdk
```

> #### Hint::Switching between Java versions
> You can run more than one version of Java on MacOS. Set the Java version by opening a terminal and using one of the following commands
>
> Show the Java versions installed
```bash
/usr/libexec/java_home -V
```
>
> Switch to Java version 1.8
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
```
>
> Change back to Java version 11
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
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
