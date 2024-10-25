document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (!tabs[0].id) {
            document.getElementById('result').textContent = 'Cannot check this page.';
            return;
        }

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            world: "MAIN",
            func: () => {
                if (window.Shopify && window.Shopify.theme) {
                    return {
                        exists: true,
                        theme: window.Shopify.theme
                    };
                }
                return {
                    exists: false,
                    theme: null
                };
            }
        })
            .then(results => {
                const result = document.getElementById('result');
                if (results && results[0] && results[0].result && results[0].result.exists) {
                    const theme = results[0].result.theme;
                    result.className = 'exists';

                    // Create a table element
                    const table = document.createElement('table');
                    table.style.border = '1px solid black';
                    table.style.borderCollapse = 'collapse';
                    table.style.width = '100%';

                    // Create a table header row
                    const headerRow = document.createElement('tr');
                    const headers = ['Property', 'Value'];
                    headers.forEach(headerText => {
                        const th = document.createElement('th');
                        th.style.border = '1px solid black';
                        th.style.padding = '8px';
                        th.textContent = headerText;
                        headerRow.appendChild(th);
                    });
                    table.appendChild(headerRow);

                    const addRows = (obj, parentKey = '') => {
                        for (const [key, value] of Object.entries(obj)) {
                            if (key === "style" || key === "theme_store_id" || key === "handle") {
                                continue;
                            }
                            const row = document.createElement('tr');

                            const keyCell = document.createElement('td');
                            keyCell.style.border = '1px solid black';
                            keyCell.style.padding = '8px';

                            keyCell.textContent = parentKey ? `${parentKey}.${key}` : key;
                            row.appendChild(keyCell);

                            const valueCell = document.createElement('td');
                            valueCell.style.border = '1px solid black';
                            valueCell.style.padding = '8px';

                            if (typeof value === 'object' && value !== null) {
                                valueCell.textContent = JSON.stringify(value);
                            } else {
                                valueCell.textContent = value;
                            }
                            row.appendChild(valueCell);

                            // Add the row to the table
                            table.appendChild(row);
                        }
                    };

                    addRows(theme);

                    result.innerHTML = '';
                    result.appendChild(table);

                } else {
                    result.textContent = 'No Shopify theme data found.';
                    result.className = 'not-exists';
                }
            })
            .catch(error => {
                document.getElementById('result').textContent = 'Error checking theme: ' + error.message;
            });
    });
});