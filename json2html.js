export default function json2html(data) {
    // Extract unique headers from the data
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
    
    // Start creating the HTML table
    let html = `<table data-user="dvvswaroop18@gmail.com">`;
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
    html += `<tbody>`;
    
    // Add rows for each object in the data array
    for (const row of data) {
        html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    }
    
    html += `</tbody></table>`;
    return html;
}
