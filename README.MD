# Shopify Theme Info Checker Chrome Extension

## Overview

The Shopify Theme Info Checker is a Chrome extension designed to identify and display the `Shopify.theme` object from any website. It retrieves theme information, including the theme ID, name, and associated properties, and presents this data in a user-friendly table format.

## Features

- **Detects Shopify Theme**: Automatically checks for the presence of the `Shopify.theme` object on any website.
- **Displays Theme Data**: Presents the retrieved theme data, including nested properties, in a structured table format.
- **User-Friendly Interface**: Easy to use with a clear display of the theme information.

## Installation

1. **Download the Extension**:
   - Clone or download the repository:
     ```bash
     git clone https://github.com/yourusername/shopify-theme-checker.git
     ```
   - Navigate to the project directory:
     ```bash
     cd shopify-theme-checker
     ```

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the upper right corner.
   - Click on "Load unpacked" and select the directory where the extension files are located.

3. **Usage**:
   - Visit any Shopify website or any page where you want to check for the `Shopify.theme` object.
   - Click the extension icon in the Chrome toolbar to open the popup and view the theme information.

## Example Output

When a Shopify theme is found, the extension displays a table with the following format:

![Preview](./images/demo.png)
