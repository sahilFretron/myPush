#!/bin/bash

# Update and upgrade packages
sudo apt update -y && sudo apt upgrade -y

# Install IntelliJ IDEA Community Edition
echo "Installing IntelliJ IDEA Community Edition..."
sudo snap install intellij-idea-community --classic

# Install VS Code
echo "Installing Visual Studio Code..."
sudo snap install code --classic

# Install MongoDB Compass
echo "Installing MongoDB Compass..."
wget https://downloads.mongodb.com/compass/mongodb-compass_1.41.0_amd64.deb
sudo dpkg -i mongodb-compass_1.41.0_amd64.deb
sudo apt --fix-broken install -y  # To handle dependencies if required
rm mongodb-compass_1.41.0_amd64.deb

# Install Postman
echo "Installing Postman..."
sudo snap install postman

# Install Node.js 22.11.0
echo "Installing Node.js version 22.11.0..."
wget https://nodejs.org/dist/v22.11.0/node-v22.11.0-linux-x64.tar.xz
sudo tar -xJvf node-v22.11.0-linux-x64.tar.xz -C /usr/local --strip-components=1
rm node-v22.11.0-linux-x64.tar.xz
echo "Node.js version $(node -v) installed."

# Install Java 11
echo "Installing OpenJDK 11..."
sudo apt install openjdk-11-jdk -y
java -version

# Install Gradle 8.0
echo "Installing Gradle 8.0..."
wget https://services.gradle.org/distributions/gradle-8.0-bin.zip
sudo unzip -d /opt/gradle gradle-8.0-bin.zip
rm gradle-8.0-bin.zip
sudo ln -s /opt/gradle/gradle-8.0/bin/gradle /usr/bin/gradle
gradle -v

echo "Installation Complete."




#To run this File:
# chmod +x install_tools.sh
# ./install_tools.sh
