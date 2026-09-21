document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const previewText = document.getElementById('preview-text');
    const previewArea = document.getElementById('preview-area');
    
    const fontFamiltySelect = document.getElementById('font-family');
    
    const fontSizeInput = document.getElementById('font-size');
    const fontSizeVal = document.getElementById('font-size-val');
    
    const lineHeightInput = document.getElementById('line-height');
    const lineHeightVal = document.getElementById('line-height-val');
    
    const letterSpacingInput = document.getElementById('letter-spacing');
    const letterSpacingVal = document.getElementById('letter-spacing-val');
    
    const fontWeightSelect = document.getElementById('font-weight');
    
    const alignBtns = document.querySelectorAll('#text-align button');
    
    const textColorInput = document.getElementById('text-color');
    const bgColorInput = document.getElementById('bg-color');
    
    const resetBtn = document.getElementById('reset-btn');

    // Default values
    const defaults = {
        fontFamily: "'Inter', sans-serif",
        fontSize: "16",
        lineHeight: "1.5",
        letterSpacing: "0",
        fontWeight: "400",
        textAlign: "left",
        textColor: "#1a1a1a",
        bgColor: "#ffffff"
    };

    // Update functions
    function updateTypography() {
        // Values
        const family = fontFamiltySelect.value;
        const size = fontSizeInput.value;
        const line = lineHeightInput.value;
        const spacing = letterSpacingInput.value;
        const weight = fontWeightSelect.value;
        const color = textColorInput.value;
        const bg = bgColorInput.value;
        
        // Active align
        const activeAlignBtn = document.querySelector('#text-align button.active');
        const align = activeAlignBtn ? activeAlignBtn.dataset.align : defaults.textAlign;

        // Apply to preview text
        previewText.style.fontFamily = family;
        previewText.style.fontSize = `${size}px`;
        previewText.style.lineHeight = line;
        previewText.style.letterSpacing = `${spacing}px`;
        previewText.style.fontWeight = weight;
        previewText.style.textAlign = align;
        previewText.style.color = color;
        
        // Apply to preview area
        previewArea.style.backgroundColor = bg;

        // Update labels
        fontSizeVal.textContent = `${size}px`;
        lineHeightVal.textContent = line;
        letterSpacingVal.textContent = `${spacing}px`;
    }

    // Event Listeners for inputs
    fontFamiltySelect.addEventListener('change', updateTypography);
    fontSizeInput.addEventListener('input', updateTypography);
    lineHeightInput.addEventListener('input', updateTypography);
    letterSpacingInput.addEventListener('input', updateTypography);
    fontWeightSelect.addEventListener('change', updateTypography);
    textColorInput.addEventListener('input', updateTypography);
    bgColorInput.addEventListener('input', updateTypography);

    // Event Listeners for text align buttons
    alignBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alignBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTypography();
        });
    });

    // Reset function
    resetBtn.addEventListener('click', () => {
        fontFamiltySelect.value = defaults.fontFamily;
        fontSizeInput.value = defaults.fontSize;
        lineHeightInput.value = defaults.lineHeight;
        letterSpacingInput.value = defaults.letterSpacing;
        fontWeightSelect.value = defaults.fontWeight;
        textColorInput.value = defaults.textColor;
        bgColorInput.value = defaults.bgColor;
        
        alignBtns.forEach(b => {
            if (b.dataset.align === defaults.textAlign) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
        
        updateTypography();
    });

    // Initialize
    updateTypography();
});
