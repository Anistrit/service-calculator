function nextStep(step) {
    document.querySelectorAll('.step-section').forEach(s => s.style.display = 'none');
    document.getElementById('step' + step).style.display = 'block';
    document.querySelectorAll('.step-dot').forEach((d, i) => d.classList.toggle('active', i + 1 === step));
}

function calculateTotal() {
    let baseTotal = 0;
    let reportData = [];

    document.querySelectorAll('.room-area-input').forEach(input => {
        const area = parseFloat(input.value) || 0;
        const rate = parseFloat(input.dataset.rate) || 0;
        if (area > 0) {
            baseTotal += (area * rate);
            reportData.push({name: input.dataset.name, area, subtotal: area * rate});
        }
    });

    const level = parseFloat(document.querySelector('input[name="repairLevel"]:checked').value);
    const propType = parseFloat(document.getElementById('propertyType').value);
    let total = baseTotal * level * propType;

    document.querySelectorAll('.service:checked').forEach(s => {
        total += parseInt(s.value);
        reportData.push({name: "Extra Service", subtotal: parseInt(s.value)});
    });

    if (document.getElementById('contingency').checked) {
        total *= 1.10;
        reportData.push({name: "Buffer", subtotal: total * 0.09});
    }

    document.getElementById('result').innerText = "Total: $" + total.toFixed(2);
    document.getElementById('pdfBtn').style.display = total > 0 ? 'block' : 'none';
    window.lastEstimate = { total, reportData };
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Брендирование
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("SMETA PRO - ESTIMATE", 20, 20);
    doc.setFontSize(10);
    doc.text("Professional Renovation Services", 20, 27);
    
    doc.line(20, 32, 190, 32); // Разделительная линия
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    
    let y = 45;
    window.lastEstimate.reportData.forEach(item => {
        doc.text(`${item.name}: ${item.area ? item.area + 'm²' : ''} $${item.subtotal.toFixed(0)}`, 20, y);
        y += 10;
    });
    
    doc.line(20, y, 190, y);
    doc.setFontSize(16);
    doc.text(`GRAND TOTAL: $${window.lastEstimate.total.toFixed(2)}`, 20, y + 15);
    
    doc.save("Smeta_Pro_Estimate.pdf");
}