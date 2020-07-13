let jspdf = document.createElement("script");
 
jspdf.onload = function () {
 
    let pdf = new jsPDF();
    let elements = document.getElementsByTagName("img");
    for (let i in elements) {
        let img = elements[i];
        console.log("add img ", img);
        if (!/^blob:/.test(img.src)) {
            console.log("invalid src");
            continue;
        }
        let can = document.createElement('canvas');
        let con = can.getContext("2d");
        can.width = img.width;
        can.height = img.height;
        con.drawImage(img, 0, 0);
        let imgData = can.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.addPage();
    }
 
    pdf.save("download.pdf");
};
 
jspdf.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
document.body.appendChild(jspdf);

/*Step-1 : Scroll to the bottom of the document, so all the pages are presentOpen developer console in the google drive file webpage by ctrl+shift+I
  Step-2 : Open developer console in the google drive file webpage by ctrl+shift+I
  Step-3 : In Developer Tools choose the Console tab
  Step-4 : Paste Below code and Press Enter
  Step-5 : Now wait see the magic */
