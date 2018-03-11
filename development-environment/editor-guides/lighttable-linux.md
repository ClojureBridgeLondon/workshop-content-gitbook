# Ubuntu Setup

* Java install
* Install Leiningen
* Install Light Table
* Test your setup

## Start a terminal

A terminal is a text-based interface to talk to your computer, opened by clicking "Dash Home" and typing `Terminal`. You can also open a terminal by pressing `CTRL-ALT-T`.

If you have never used the terminal before you may want to spend some time [reading up on command-line basics](http://blog.teamtreehouse.com/command-line-basics).

Go ahead and open your terminal now. It should look something like this:

![blank terminal](img/ubuntu/blank_terminal.png)

The prompt (where you will type your commands) may look different: it usually shows the computer name and user name, as well as the folder or directory you are currently in.

For the rest of this setup, I will tell you to run commands in your terminal. When I say that, I mean "type the command into the terminal and press the Return key."


## Making sure Java is installed

Run `java -version` in your terminal. If you do not have Java installed, Ubuntu will prompt you to install it. It should look something like this:

![no java](img/ubuntu/no_java.png)

Follow all of the directions Ubuntu gives you, selecting the package "openjdk-8-jre" then return to this part of the tutorial and run `java -version` again.

If Java is installed, you will see something like this in your terminal:

![Java version](img/ubuntu/java_version.png)

The details of Java's version may differ from what you see above; that is perfectly fine.

## Install Leiningen

Leiningen is a tool used on the command line to manage Clojure projects.

Go to the [Leiningen website](http://leiningen.org/). You will see a link to the `lein` script under the "Install" heading. Right-click that link and choose "Save Link As...". Save it in your Downloads directory.

![Leiningen site](img/leiningen_site.png)
![Leiningen site](img/lein_install.png)

After that, run the following commands in your terminal. You will be prompted to enter your password.

```
sudo mkdir -p /usr/local/bin/
sudo mv ~/Downloads/lein* /usr/local/bin/lein
sudo chmod a+x /usr/local/bin/lein
```

After you run the above commands, run the `lein version` command. It should take a while to run, as it will download some resources it needs the first time. If it completes successfully, you are golden! If not, ask an instructor for help.

## Install Light Table

Go to the [Light Table site](http://www.lighttable.com/) and click the "Linux" button and select the "Save file".

* Open up your terminal and cd to the directory where your downloads go `cd ~/Downloads`.
* Check to see that your file is there. `ls`
* Extract the compressed file `tar -xzf LightTableLinux64.tar.gz`
* Check to see that there is now a directory called LightTable `ls`
* Move the LightTable directory to "/usr/local/bin" `sudo mv LightTable /usr/local/bin`
* Set your path so you can launch LightTable from the command line `export PATH=$PATH:/usr/local/bin/LightTable`
Launch LightTable `LightTable`


## Testing Light Table

Now we will open and run the sample Clojure apps in Light Table, so start Light Table

In Light Table, click on the menu "File" then choose "Open Folder." Find the
directory, `welcometoclojurebridge`, which was created when you ran
`git clone` command. Click "Upload." In the workspace menu on the
left, click on `welcometoclojurebridge` - `src` -
`welcometoclojurebridge` - `core.clj`. Double-click the `core.clj` file
to open it. This is a Clojure program.

![Testing apps - welcome code](img/testing-welcome-app-code.png)


Click on the file contents and
press the following key combination:

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>

You should see a fun welcome message.

![Testing apps - welcome](img/testing-welcomeclojurebridge.png)


Next, in the workspace menu on the left, click on
`welcometoclojurebridge` - `src` - `clojurebridge-turtle` -
`walk.clj`. Double-click the core.clj file to open it.

![Testing apps - walk code](img/testing-turtle-walk-code.png)

press the following key combination:

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>

An initial image of the turtles app will pop up.

Type `(forward 40)` at the end of the `walk.clj` and press the
following combination:

<kbd>Ctrl</kbd> + <kbd>Enter</kbd>

You should see this on the Light Table:

![Testing apps - forward](img/testing-turtle-forward.png)

also, your turtle should move.

> Pressing the Control button and Space Bar together (abbreviated `Ctrl+Space`) is how you start giving Light Table a command.


#### Success!

Congratulations! You have opened and run your first Clojure apps, and
your install and setup are all completed!
