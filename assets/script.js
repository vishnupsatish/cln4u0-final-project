const pdfs = document.getElementsByClassName("pdf");

for (const pdf of pdfs) {
    const link = pdf.getAttribute('data');
    pdf.insertAdjacentHTML("afterbegin",
        `
        <div class="card toc" style="width: 100%; height: 100%;">
            <div class="card-body pb-2">
                <p class="card-text">
                    <p>This PDF cannot be opened in this browser.</p>
                    <p><a href="${link}" target="_blank">Click here</a> to open it in a new tab.</p>
                </p>
            </div>
        </div>
        `
    )
}