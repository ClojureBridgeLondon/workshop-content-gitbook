# Java

Clojure is a hosted language, so needs a Java runtime environment (JRE).  Java is installed on all modern operating systems.


## Check if Java is already installed

Open a terminal and run the command

`java -version`

If Java is installed, you will see something like this in your terminal:

![Java version](/images/development-environment-java-check.png)

The details of Java's version may differ from what you see above; that is perfectly fine, so long as you have Java version 8 or above.


## Ubuntu

Open a terminal and run the following command (you will be prompted for your login password to complete the install)

```bash
sudo apt-get install openjdk-8-jre
```


## Homebrew (MacOSX)

If you already use [Homebrew](https://brew.sh/), then run the following commands in a terminal:

```bash
brew update
brew cask install java
```


## Choclatey (Windows)

Choclatey is a package manager for Windows (similar to Homebrew for MacOSX)

Install the [Java Runtime (JRE)](https://chocolatey.org/packages/javaruntime) using the following commands in a command window

```bash
choco install javaruntime
```


## Manual Install: MacOSX & Windows

[Download OpenJDK 8](http://jdk.java.net/8/)

Run the file once downloaded and follow the install instructions.
