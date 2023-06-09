function CreateEditor(element_id) {
    ClassicEditor
        .create(document.querySelector(element_id), {
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'indent',
                    'outdent',
                    '|',
                    'imageUpload',
                    'blockQuote',
                    'insertTable',
                    'mediaEmbed',
                    'undo',
                    'redo'
                ]
            },
            autoParagraph: true,
            language: 'en',
            image: {
                toolbar: [
                    'imageTextAlternative',
                    'imageStyle:full',
                    'imageStyle:side'
                ]
            },
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                ]
            },
            licenseKey: '',
        })
        .then( editor => {
            window[element_id.substr(1)] = editor;
        });
}


function ZeroFill(number, width = 6) {
    let numberOutput = Math.abs(number).toString();
    let pad = '0'.repeat(Math.max(0, width - numberOutput.length));

    return (number < 0 ? '-' : '') + pad + numberOutput;
}

function StrAlert(content, duration = 5000) {
    const alert = document.querySelector('.str-alert');
    const inner = document.querySelector('.str-alert .str-alert-content:first-child div');

    alert.style.display = "block";
    inner.innerHTML = content;

    setTimeout(() => {
        alert.style.display = "none";
        inner.innerHTML = "";
    }, duration);
}